'use client';

import CreateFile from '@/app/(dashboard)/CreateFile';
import { View } from 'reshaped';
import { DocumentFile } from './DocumentFile';

export default function DashBoard() {
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
