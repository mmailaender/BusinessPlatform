'use client';
import { View, Text, Image, ImageProps, Icon, IconProps } from 'reshaped';
import React from 'react';
import Document from '../Icons/Document';

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

export function SecondaryContentLine({
  subTitle,
  subSectionIndex,
}: {
  subTitle: string;
  subSectionIndex: string;
}) {
  return (
    <View gap={2} paddingStart={4}>
      <View className=' flex flex-row justify-between'>
        <Text variant='body-2' weight='regular'>
          {subSectionIndex} {subTitle}
        </Text>
      </View>
    </View>
  );
}
