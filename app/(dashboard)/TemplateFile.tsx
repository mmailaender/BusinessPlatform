'use client';

import React from 'react';
import { Button, View, Text, DropdownMenu, Card } from 'reshaped';
import { useQuery } from 'fqlx-client';
import Link from 'next/link';
import Template from '@/components/Icons/Template';
import MoreIcon from '@/components/Icons/MoreIcon';
import PrintIcon from '@/components/Icons/PrintIcon';
import DuplicateIcon from '@/components/Icons/DuplicateIcon';
import BinIcon from '@/components/Icons/BinIcon';
import {
  Block,
  Query,
  Template as TypeTemplate,
} from '@/fqlx-generated/typedefs';

type TemplateFileProp = {
  template: TypeTemplate;
};

export function TemplateFile({ template }: TemplateFileProp) {
  const query = useQuery<Query>();

  const handleTemplateDelete = async (id: string) => {
    const res = await query.Template.byId(id).delete().exec();
    console.log('response', res);
  };

  const handleCreateDuplicate = async () => {
    const blocksPromises: Promise<Block>[] = [];

    template.blocks.forEach((m) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = (await Promise.all(blocksPromises)) as Block[];

    let blocks: string[] = [];

    for (const resolvedBlock of resolvedBlocks) {
      if (
        resolvedBlock.category === 'Section' ||
        resolvedBlock.category === 'SubSection'
      ) {
        const res = await query.Block.create({
          content: resolvedBlock.content,
        } as Block).exec();

        blocks.push(res.id);
      } else {
        blocks.push(resolvedBlock.id);
      }
    }

    if (blocks.length > 0) {
      const res = await query.Template.create({
        name: `${template.name} (Copy)`,
        blocks: blocks as unknown as Block[],
      }).exec();
      console.log('response', res);
    }
  };

  return (
    <View width='100%' padding={6} className='group'>
      {/* File component */}
      <View gap={4}>
        <View
          backgroundColor='neutral-faded'
          aspectRatio={1 / 1}
          borderRadius='small'
          justify='center'
          align='center'
          position='relative'
          padding={{ xl: 12, l: 14, m: 10, s: 10 }}
          className='transition ease-in-out duration-300 group-hover:bg-neutral-highlighted '
        >
          <View
            position='absolute'
            insetTop={2}
            insetEnd={2}
            className='transition ease-in-out duration-300 opacity-0 group-hover:opacity-100'
          >
            <DropdownMenu position='bottom-end'>
              <DropdownMenu.Trigger>
                {(attributes) => (
                  <Button
                    rounded={true}
                    elevated={true}
                    icon={<MoreIcon />}
                    color='white'
                    attributes={attributes}
                  ></Button>
                )}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Section>
                  <DropdownMenu.Item startSlot={<PrintIcon />}>
                    Print
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
                <DropdownMenu.Section>
                  <DropdownMenu.Item
                    onClick={handleCreateDuplicate}
                    startSlot={<DuplicateIcon />}
                  >
                    Duplicate
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onClick={() => handleTemplateDelete(template.id)}
                    startSlot={<BinIcon />}
                  >
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
          <Link href={`/templates/${template.id}`}>
            <Card>
              <View className='w-full' aspectRatio={1 / 1}>
                <Template />
              </View>
            </Card>
          </Link>
        </View>
        {/* Label */}
        <View align='center' paddingBottom={6} gap={1}>
          <Text
            variant='body-2'
            weight='medium'
            align='center'
            className='group-hover:text-neutral-faded'
          >
            {template.name}
          </Text>
          <Text variant='caption-1' align='center' color='neutral-faded'>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}