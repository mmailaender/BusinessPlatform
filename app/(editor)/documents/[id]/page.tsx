'use client';

import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { View } from 'reshaped';

const Plate = dynamic(() => import('@/components/Plate'), { ssr: false });
const FileNavigation = dynamic(() => import('@/components/FileNavigation'), {
  ssr: false,
});

const DocumentPage = () => {
  const [document, setDocument] = useState<MyValue>([]);

  const sections = useMemo(() => {
    let section = '';

    return document.reduce((prev: { [key: string]: string[] }, curr) => {
      const elementType = curr?.type;
      const text: string = curr?.children?.[0]?.text as string;

      if (elementType === 'h1') {
        section = text;
        prev[section] = [];

        return prev;
      }

      if (elementType === 'h2' && prev?.[section]) {
        prev[section] = [...prev[section], text];

        return prev;
      }

      return prev;
    }, {} as { [key: string]: string[] });
  }, [document]);

  return (
    <View direction='row' paddingInline={6} paddingTop={16} width='100%'>
      <View.Item columns={2}>
        <View>
          <FileNavigation sections={sections} />
        </View>
      </View.Item>
      <View.Item columns={1}></View.Item>
      <View.Item columns={6}>
        <View>
          <Plate value={document} onChange={setDocument} />
        </View>
      </View.Item>
    </View>
  );
};

export default DocumentPage;
