'use client';

import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import { Block, Query, TemplateInput } from '@/fqlx-generated/typedefs';
import { debounce } from 'radash';
import { useQuery } from 'fqlx-client';
import dynamic from 'next/dynamic';
import { useMemo, useState, useCallback, useEffect } from 'react';
import { View } from 'reshaped';
import { blocks } from './utils/getMappedBlocks';
import { getSections } from './utils/getSections';

const Plate = dynamic(() => import('@/components/Plate'), { ssr: false });
const FileNavigation = dynamic(() => import('@/components/FileNavigation'), {
  ssr: false,
});

interface PageProps {
  params: {
    id: string;
  };
}

export default function TemplateByIdPage({ params }: PageProps) {
  const [template, setTemplate] = useState<MyValue>([]);
  const [blocksId, setBlocksId] = useState<Block[]>([]);

  const query = useQuery<Query>();
  const templateId = params.id;

  const sections = useMemo(() => {
    return getSections(template);
  }, [template]);

  const addTemplateBlocksToFqlx = debounce(
    { delay: 2000 },
    useCallback(
      async (value: MyValue) => {
        const mappedBlocks = blocks(value);

        let blocksIdClone = [...blocksId];

        const blockPromises: Promise<Block>[] = [];

        mappedBlocks.forEach((singleBlock: any) => {
          const block = Object.values(singleBlock)[0] as unknown as {
            [key: string]: any;
          };

          const blockId: string = blocksIdClone.find(
            (bId) => bId == block?.content?.[0]?.id
          ) as unknown as string;

          if (blockId) {
            const res = query.Block.byId(blockId)
              .update({
                content: JSON.stringify(block.content),
              } as Block)
              .exec();

            blockPromises.push(res);
          } else {
            const res = query.Block.create({
              ...block,
              content: JSON.stringify(block.content),
            } as Block).exec();

            blockPromises.push(res);
          }

          blocksIdClone = blocksIdClone.filter(
            (bId) => bId !== block?.content?.[0]?.id
          );
        });

        const resolvedBlocks = await Promise.all(blockPromises);
        const template: any[] = [];

        const resolvedBlocksId = resolvedBlocks.map((block) => {
          const blockData = JSON.parse(block.content);

          template.push(
            { ...blockData[0], id: block.id },
            ...blockData.slice(1)
          );

          return block.id;
        });

        setTemplate(template);
        setBlocksId(resolvedBlocksId as unknown as Block[]);

        try {
          const templateRes = await query.Template.byId(templateId)
            .update({
              blocks: resolvedBlocksId as unknown as Block[],
            } as TemplateInput)
            .exec();

          console.log('Updated', { templateRes });
        } catch (e) {
          console.log({ e });
        }
      },
      [blocksId]
    )
  );

  const handleTemplateChange = useCallback(
    (value: MyValue) => {
      addTemplateBlocksToFqlx(value);
    },
    [template]
  );

  const fetchTemplate = async () => {
    const templateRes = await query.Template.byId(templateId).exec();
    const template: any[] = [];

    const blocksPromises: Promise<Block>[] = [];

    templateRes.blocks.forEach((m) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = await Promise.all(blocksPromises);

    resolvedBlocks.forEach((block) => {
      const blockData = JSON.parse(block.content);
      template.push({ ...blockData[0], id: block.id }, ...blockData.slice(1));
    });

    setTemplate(template);
    setBlocksId(templateRes.blocks);
  };

  useEffect(() => {
    fetchTemplate();
  }, [templateId]);

  return (
    <View>
      <View className='relative top-0 h-[69px]' />

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
