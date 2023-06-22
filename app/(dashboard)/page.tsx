'use client';

import CreateFile from '@/app/(dashboard)/CreateFile';
import { View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import { Query } from '@/fqlx-generated/typedefs';
import { DocumentFile } from './DocumentFile';

export default function DashBoard() {
  const query = useQuery<Query>();
  const documents = query.Document.all().exec();

  return (
    <View direction='row'>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      {documents.data.map((document) => (
        <View.Item key={document.id} columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
          <DocumentFile document={document} />
        </View.Item>
      ))}
    </View>
  );
}
