'use client';

import { View } from 'reshaped';
import PrintCover from './PrintCover';
import ContentTemplate from './PrintTableOfContent';

import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

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
    <>
      <View className='hidden print:block'>
        <PrintCover />
      </View>
      <View className='hidden print:block'>
        <ContentTemplate />
      </View>
      <View className='flex flex-row px-x6 pt-x32'>
        <View className='basis-2/12 print:hidden'>
          <View
            position='sticky'
            insetTop={20}
          >
            <FileNavigation sections={sections} />
          </View>
        </View>
        <View className='basis-1/12 print:hidden'></View>
        <View className='basis-6/12 print:basis-full min-w-0'>
          <Plate
            value={document}
            onChange={setDocument}
          />
        </View>
      </View>
    </>
  );
};

export default DocumentPage;
