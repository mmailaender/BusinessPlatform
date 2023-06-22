'use client';

import { View, Text, Tooltip } from 'reshaped';
import Template from '@/components/Icons/Template';

const maxLength = 25;

export default function TemplateType({ name }: { name: string }) {
  const truncatedText =
    name?.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  const showTooltip = name?.length > maxLength;

  return (
    <View
      width='100%'
      className='flex flex-row group bg-page items-center'
      gap={4}
      direction='row'
      align='center'
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
        {showTooltip && (
          <Tooltip text={name}>
            {(attributes) => (
              <Text
                attributes={attributes}
                // className='text-ellipsis  break-words'
              >
                {truncatedText}
              </Text>
            )}
          </Tooltip>
        )}
        {!showTooltip && name}
      </Text>
    </View>
  );
}
