'use client';

import React from 'react';
import { View, Text, Actionable } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { useRouter } from 'next/navigation';
import CreateDocument from '@/components/Icons/CreateDocument';
import { Query } from '@/fqlx-generated/typedefs';

export function CreateTemplate() {
  const query = useQuery<Query>();
  const router = useRouter();

  const createTemplate = async () => {
    const res = await query.Template.create({
      name: 'Untitled',
      blocks: [],
    }).exec();

    if (res.id) {
      router.push(`/templates/${res.id}`);
    }
  };

  return (
    <>
      <View width='100%' padding={6} className='group cursor-pointer'>
        {/* File component */}
        <Actionable onClick={createTemplate}>
          <View gap={4}>
            <View
              borderColor='neutral-faded'
              aspectRatio={1 / 1}
              borderRadius='small'
              className='border-dashed transition ease-in-out duration-300 group-hover:bg-neutral-highlighted'
              justify='center'
              align='center'
              padding={{ xl: 12, l: 14, m: 10, s: 10 }}
            >
              <CreateDocument />
            </View>
            {/* Label */}
            <View align='center' paddingBottom={6}>
              <Text
                variant='body-2'
                weight='medium'
                align='center'
                color='primary'
                className='group-hover:opacity-90'
              >
                Create New Template
              </Text>
            </View>
          </View>
        </Actionable>
      </View>
    </>
  );
}
