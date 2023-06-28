'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'reshaped';
import dynamic from 'next/dynamic';
import { debounce } from 'radash';
import { useQuery } from 'fqlx-client';
import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import { Block, DocumentInput, Query } from '@/fqlx-generated/typedefs';
import PrintCover from '../../PrintCover';
import ContentTemplate from '../../PrintTableOfContent';
import Watermark from '../../Watermark';
import { getDocumentSections } from './utils/getSections';
import { documentsBlocks } from './utils/getMappedBlocksDocument';

const Plate = dynamic(() => import('@/components/Plate'), { ssr: false });
const FileNavigation = dynamic(() => import('@/app/(editor)/FileNavigation'), {
  ssr: false,
});

interface PageProps {
  params: {
    id: string;
  };
}

function generateCustomId() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

  const id = year + month + day + hours + minutes + seconds + milliseconds;
  return id;
}

const DocumentPage = ({ params }: PageProps) => {
  const [document, setDocument] = useState<MyValue>([]);
  const [sections, setSections] = useState<{
    [sectionName: string]: { [key: string]: any; id: string };
  }>({});

  const query = useQuery<Query>();
  const DocumentId = params.id;

  const addDocumentBlocksToFqlx = debounce(
    { delay: 2000 },
    useCallback(async (value: MyValue) => {
      const mappedBlocks = documentsBlocks(value);

      const blocksIds = (await query.Document.byId(DocumentId).exec()).blocks;

      const currentBlocksId = mappedBlocks.map(
        (obj: any) => (Object.values(obj)[0] as any).id
      );

      let blocksIdClone = [...blocksIds];

      mappedBlocks.forEach(async (singleBlock: any) => {
        const block = Object.values(singleBlock)[0] as unknown as {
          [key: string]: any;
        };

        const blockId: string = blocksIdClone.find(
          (bId) => bId == block?.content?.[0]?.id
        ) as unknown as string;

        if (blockId) {
          await query.Block.byId(blockId)
            .update({
              content: JSON.stringify(block.content),
            } as Block)
            .exec();
        } else {
          await query.Block.create({
            id: block.id,
            content: JSON.stringify(block.content),
          } as Block).exec();
        }

        blocksIdClone = blocksIdClone.filter(
          (bId) => bId !== block?.content?.[0]?.id
        );
      });

      try {
        const res = await query.Document.byId(DocumentId)
          .update({
            blocks: currentBlocksId as unknown as Block[],
          } as DocumentInput)
          .exec();

        setSections(getDocumentSections(value));

        console.log('res document', res);
      } catch (e) {
        console.log({ e });
      }
    }, [])
  );

  const handleDocumentChange = useCallback(
    (value: MyValue) => {
      value.forEach((m: any) => {
        if (m.type === 'h1') {
          if (!m.id) m.id = generateCustomId();
          if (m.id && m.id.length < 6) m.id = generateCustomId();
          return m;
        } else return m;
      });

      addDocumentBlocksToFqlx(value);
    },
    [document]
  );

  const fetchDocument = async () => {
    const DocumentRes = await query.Document.byId(DocumentId).exec();
    const document: any[] = [];

    const blocksPromises: Promise<Block>[] = [];
    if (DocumentRes.blocks) {
      DocumentRes.blocks.forEach((m) => {
        return blocksPromises.push(
          query.Block.byId(m as unknown as string).exec()
        );
      });

      const resolvedBlocks = await Promise.all(blocksPromises);

      resolvedBlocks.forEach((block) => {
        const blockData = JSON.parse(block.content as string);
        document.push({ ...blockData[0], id: block.id }, ...blockData.slice(1));
      });

      setDocument(document);
      setSections(getDocumentSections(document));
    }
  };

  useEffect(() => {
    fetchDocument();
  }, []);

  return (
    <>
      <View className='hidden print:block'>
        <PrintCover />
      </View>
      <div className='hidden print:block fixed bottom-0 right-0 z-10'>
        <Watermark />
      </div>
      <View className='hidden print:block'>
        <ContentTemplate sections={sections} />
      </View>
      <View className='flex flex-row px-x6 pt-x16'>
        <View className='basis-2/12 print:hidden  min-w-0'>
          <View position='sticky' insetTop={20}>
            <FileNavigation sections={sections} />
          </View>
        </View>
        <View className='basis-1/12 print:hidden'></View>
        <View className='basis-6/12 print:basis-full print:px-x12 min-w-0'>
          <Plate value={document} onChange={handleDocumentChange} />
        </View>
      </View>
    </>
  );
};

export default DocumentPage;
