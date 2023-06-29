'use client';

import { useSearchParams } from 'next/navigation';
import { View } from 'reshaped';
import { useQuery } from 'fqlx-client';
import CreateFile from '@/app/(dashboard)/CreateFile';
import { Query } from '@/fqlx-generated/typedefs';
import { DocumentFile } from './DocumentFile';

export default function DashBoard() {
  const query = useQuery<Query>();
  const search = useSearchParams();
  const documents = query.Document.all().order('desc(.ts)').exec();
  const filterDocument = query.Document.all()
    .where(`(a) => a.name.includes("${search.get('search')}")`)
    .order('desc(.ts)')
    .exec();

  const filteredDocuments = search.get('search') ? filterDocument : documents;

  return (
    <View direction='row'>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      {filteredDocuments.data.map((document) => (
        <View.Item key={document.id} columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
          <DocumentFile document={document} />
        </View.Item>
      ))}
    </View>
  );
}
