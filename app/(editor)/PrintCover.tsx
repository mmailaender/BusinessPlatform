'use client';

import { View, Text } from 'reshaped';
import { useOrganization } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { useQuery } from 'fqlx-client';
import { Query } from '@/fqlx-generated/typedefs';

export default function PrintCover() {
  const org = useOrganization();
  const [type, setType] = useState<'Template' | 'Document'>('Template');
  const param = useParams();
  const path = usePathname();
  const query = useQuery<Query>();
  const name = query[type].byId(param.id).project({ name: true }).exec().name;

  useEffect(() => {
    if (path.includes('templates')) {
      setType('Template');
    } else {
      setType('Document');
    }
  }, [path]);

  return (
    <View className='w-full' justify='end' paddingBottom={50} paddingTop={20}>
      <View width={80} height={80}>
        <Image
          alt='x-group logo'
          src='/X-GROUP-logo.png'
          width={300}
          height={103}
        />
      </View>
      <View>
        <View paddingBottom={24}>
          <Text variant='title-3'>{name}</Text>
        </View>
        <View gap={16}>
          {org && (
            <View gap={3}>
              <Text variant='body-1'>FOR COMPANY</Text>
              <Text variant='title-6' weight='regular'>
                {org.organization?.name}
              </Text>
            </View>
          )}
          <View gap={3}>
            <Text variant='body-1'>CONSULTANT</Text>
            <Text variant='title-6' weight='regular'>
              X-Group GmbH
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
