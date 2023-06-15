'use client';

import { ReactElement } from 'react';
import { View, Button, Tooltip } from 'reshaped';

export interface TextStyleProps {
  label: string;
  icon: ReactElement;
}

export default function TextStyle({ label, icon }: TextStyleProps) {
  return (
    <View>
      <Tooltip text={label}>
        {(attributes) => (
          <Button
            icon={icon}
            attributes={attributes}
            size='medium'
            variant='ghost'
          ></Button>
        )}
      </Tooltip>
    </View>
  );
}
