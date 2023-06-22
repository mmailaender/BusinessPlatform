'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from 'fqlx-client';
import { Button, View, Text, DropdownMenu, Card } from 'reshaped';
import { useUser } from '@clerk/nextjs';
import { Block, DocumentInput, Query } from '@/fqlx-generated/typedefs';
import Document from '@/components/Icons/Document';
import MoreIcon from '@/components/Icons/MoreIcon';
import DuplicateIcon from '@/components/Icons/DuplicateIcon';
import BinIcon from '@/components/Icons/BinIcon';

type DocumentFileProp = {
  document: any;
};

export function DocumentFile({ document }: DocumentFileProp) {
  const query = useQuery<Query>();
  const { user } = useUser();

  const handleDocumentDelete = async (id: string) => {
    await query.Document.byId(id).delete().exec();
  };

  const handleCreateDuplicate = async () => {
    const blocksPromises: Promise<Block>[] = [];

    document.blocks.forEach((m: any) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = (await Promise.all(blocksPromises)) as Block[];

    let blocks: string[] = [];

    for (const resolvedBlock of resolvedBlocks) {
      blocks.push(resolvedBlock.id);
    }

    if (blocks.length > 0) {
      const res = await query.Document.create({
        name: `${document.name} (Copy)`,
        owner: user?.id,
        blocks: blocks as unknown as Block[],
      } as unknown as DocumentInput).exec();
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
                    onClick={() => handleDocumentDelete(document.id)}
                    startSlot={<BinIcon />}
                  >
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
          <Link href={`/documents/${document.id}`}>
            <Card>
              <View className='w-full' aspectRatio={1 / 1}>
                <Document />
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
            {document.name}
          </Text>
          <Text variant='caption-1' align='center' color='neutral-faded'>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}
