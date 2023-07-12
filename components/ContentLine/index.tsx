'use client';

import { View, Text } from 'reshaped';
import React from 'react';

export default function ContentLine({
  title,
  sectionNumber,
}: {
  title: string;
  sectionNumber: number;
}) {
  return (
    <View gap={2}>
      <View className=' flex flex-row justify-between'>
        <Text variant='body-2' weight='bold'>
          {sectionNumber}. {title}
        </Text>
      </View>
    </View>
  );
}

export function SecondaryContentLine({ subTitle }: any) {
  return (
    <View gap={2} paddingStart={4}>
      <View className=' flex flex-row justify-between'>
        <Text variant='body-2' weight='regular'>
          {subTitle.h2}
        </Text>
      </View>
    </View>
  );
}
