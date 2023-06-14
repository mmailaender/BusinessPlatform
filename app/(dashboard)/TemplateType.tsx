'use client';

import { View, Text } from 'reshaped';
import Template from '@/components/Icons/Template';

export default function TemplateType() {
  return (
    <View
      width='100%'
      className='flex flex-row group bg-page items-center'
      gap={4}
    >
      <View
        aspectRatio={1 / 1}
        borderRadius='small'
        width={16}
        padding={3}
        className='bg-neutral-faded transition-all duration-300 group-hover:bg-neutral-highlighted'
      >
        <Template />
      </View>
      <Text
        variant='body-1'
        className='text-neutral transition-all duration-300 group-hover:text-primary'
      >
        Template Name
      </Text>
    </View>
  );
}
