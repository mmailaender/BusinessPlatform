'use client';
import CreateFile, { DocumentFile } from '@/components/File';

import { View, useToast } from 'reshaped';

export default function Page() {
  const toast = useToast();
  return (
    <View direction='row'>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <DocumentFile />
      </View.Item>
    </View>
  );
}
