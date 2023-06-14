'use client';

import React from 'react';
import { Button, View, Text, DropdownMenu } from 'reshaped';
import Document from '@/components/Icons/Document';
import MoreIcon from '@/components/Icons/MoreIcon';
import PrintIcon from '@/components/Icons/PrintIcon';
import DuplicateIcon from '@/components/Icons/DuplicateIcon';
import BinIcon from '@/components/Icons/BinIcon';

export function DocumentFile() {
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
                  <DropdownMenu.Item startSlot={<DuplicateIcon />}>
                    Duplicate
                  </DropdownMenu.Item>
                  <DropdownMenu.Item startSlot={<BinIcon />}>
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
          <Document />
        </View>
        {/* Label */}
        <View align='center' paddingBottom={6} gap={1}>
          <Text
            variant='body-2'
            weight='medium'
            align='center'
            className='group-hover:text-neutral-faded'
          >
            Financial Business Plan
          </Text>
          <Text variant='caption-1' align='center' color='neutral-faded'>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}
