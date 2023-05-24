'use client';
import { View, Text, Image, ImageProps, Icon, IconProps } from 'reshaped';
import React from 'react';
import Document from '../Icons/Document';

export default function ContentLine({ title }: { title: string }) {
  return (
    <View gap={2}>
      <View className=' flex flex-row justify-between'>
        <Text variant='body-2' weight='bold'>
          {title}
        </Text>
      </View>
    </View>
  );
}

export function SecondaryContentLine({ subTitle }: { subTitle: string }) {
  return (
    <View gap={2} paddingStart={4}>
      <View className=' flex flex-row justify-between'>
        <Text variant='body-2' weight='regular'>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}
