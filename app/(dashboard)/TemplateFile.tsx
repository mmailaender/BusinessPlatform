'use client';

import React from 'react';
import { Button, View, Text, DropdownMenu, Card, Tooltip } from 'reshaped';
import { useQuery } from 'fqlx-client';
import Link from 'next/link';
import Template from '@/components/Icons/Template';
import MoreIcon from '@/components/Icons/MoreIcon';
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

const maxLength = 25;

export function TemplateFile({ template }: TemplateFileProp) {
  const query = useQuery<Query>();
  const truncatedText =
    template.name?.length > maxLength
      ? `${template.name.substring(0, maxLength)}...`
      : name;
  const showTooltip = template.name?.length > maxLength;

  const handleTemplateDelete = async (id: string) => {
    await query.Template.byId(id).delete().exec();
  };

  const handleCreateDuplicate = async () => {
    const blocksPromises: Promise<Block>[] = [];

    template.blocks.forEach((m) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = (await Promise.all(blocksPromises)) as Block[];

    let blocks: string[] = [];

    for (const resolvedBlock of resolvedBlocks) {
      blocks.push(resolvedBlock.id);
    }

    if (blocks.length > 0) {
      const res = await query.Template.create({
        name: `${template.name} (Copy)`,
        blocks: blocks as unknown as Block[],
      }).exec();
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
            {showTooltip && (
              <Tooltip text={template.name}>
                {(attributes) => (
                  <Text attributes={attributes}>{truncatedText as string}</Text>
                )}
              </Tooltip>
            )}
            {!showTooltip && template.name}
          </Text>
          <Text variant='caption-1' align='center' color='neutral-faded'>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}
