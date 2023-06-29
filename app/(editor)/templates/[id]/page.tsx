'use client';

import { useState, useCallback, useEffect } from 'react';
import { debounce } from 'radash';
import { View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import dynamic from 'next/dynamic';
import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import { Block, Query, TemplateInput } from '@/fqlx-generated/typedefs';
import { blocks } from './utils/getMappedBlocks';
import { getSections } from './utils/getSections';
import Watermark from '../../Watermark';
import ContentTemplate from '../../PrintTableOfContent';
import PrintCover from '../../PrintCover';

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

export default function TemplateByIdPage({ params }: PageProps) {
  const [template, setTemplate] = useState<MyValue>([]);
  const [sections, setSections] = useState<{
    [sectionName: string]: { [key: string]: any; id: string };
  }>({});

  const query = useQuery<Query>();
  const templateId = params.id;

  const addTemplateBlocksToFqlx = debounce(
    { delay: 2000 },
    useCallback(async (value: MyValue) => {
      const mappedBlocks = blocks(value);

      const existingBlocks = (await query.Template.byId(templateId).exec())
        .blocks;

      const currentBlocksId = mappedBlocks.map(
        (obj: any) => (Object.values(obj)[0] as any).id
      );

      let blocksIdClone = [...existingBlocks];

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
        const res = await query.Template.byId(templateId)
          .update({
            blocks: currentBlocksId as unknown as Block[],
          } as TemplateInput)
          .exec();

        setSections(getSections(value));

        console.log('res template', res);
      } catch (e) {
        console.log({ e });
      }
    }, [])
  );

  const handleTemplateChange = useCallback(
    (value: MyValue) => {
      value.forEach((m: any) => {
        if (m.type === 'h1') {
          if (!m.id) m.id = generateCustomId();
          if (m.id && m.id.length < 6) m.id = generateCustomId();
          return m;
        } else return m;
      });

      addTemplateBlocksToFqlx(value);
    },
    [template]
  );

  const fetchTemplate = async () => {
    const templateRes = await query.Template.byId(templateId).exec();
    const template: any[] = [];

    const blocksPromises: Promise<Block>[] = [];
    if (templateRes.blocks) {
      templateRes.blocks.forEach((m) => {
        blocksPromises.push(query.Block.byId(m as unknown as string).exec());
      });

      const resolvedBlocks = await Promise.all(blocksPromises);

      resolvedBlocks.forEach((block) => {
        const blockData = JSON.parse(block.content as string);
        template.push({ ...blockData[0], id: block.id }, ...blockData.slice(1));
      });

      setTemplate(template);
      setSections(getSections(template));
    }
  };

  useEffect(() => {
    fetchTemplate();
  }, []);

  return (
    <View>
      <View className='hidden print:block'>
        <PrintCover />
      </View>
      <View className='hidden print:block fixed bottom-0'>
        <Watermark />
      </View>
      <View className='hidden print:block'>
        <ContentTemplate sections={sections} />
      </View>

      <View className='flex flex-row px-x6 pt-x16'>
        <View className='basis-2/12 print:hidden min-w-0'>
          <View position='sticky' insetTop={20}>
            <FileNavigation sections={sections} />
          </View>
        </View>
        <View className='basis-1/12 print:hidden'></View>
        <View className='basis-6/12 print:basis-full min-w-0'>
          <Plate value={template} onChange={handleTemplateChange} />
        </View>
      </View>
    </View>
  );
}
