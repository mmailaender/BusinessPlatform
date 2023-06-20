'use client';

import { useMemo, useState } from 'react';
import { View } from 'reshaped';
import dynamic from 'next/dynamic';
import { MyValue } from '@/components/Plate/interfaces/plateTypes';
import ContentTemplate from '../../PrintTableOfContent';
import Watermark from '../../Watermark';
import PrintCover from '../../PrintCover';

const Plate = dynamic(() => import('@/components/Plate'), { ssr: false });
const FileNavigation = dynamic(() => import('@/app/(editor)/FileNavigation'), {
  ssr: false,
});

const DocumentPage = () => {
  const [document, setDocument] = useState<MyValue>([]);

  const sections = useMemo(() => {
    let section = '';

    return document.reduce(
      (prev: { [key: string]: { id: string; [key: string]: any } }, curr) => {
        const elementType = curr?.type;
        const text: string = curr?.children?.[0]?.text as string;
        const id = curr?.id || 'jagh2';

        if (elementType === 'h1') {
          section = text;
          prev[section] = { id, [section]: [] };

          return prev;
        }

        if (elementType === 'h2' && prev?.[section]) {
          prev[section][section] = [...prev[section][section], text];

          return prev;
        }

        return prev;
      },
      {} as { [key: string]: { id: string; [key: string]: any } }
    );
  }, [document]);

  return (
    <>
      <View className='hidden print:block'>
        <PrintCover />
      </View>
      <View className='hidden print:block fixed bottom-0'>
        <Watermark />
      </View>
      <View className='hidden print:block'>
        <ContentTemplate sections={sections} />
      </View>
      <View className='flex flex-row px-x6 pt-x16'>
        <View className='basis-2/12 print:hidden  min-w-0'>
          <View position='sticky' insetTop={20}>
            <FileNavigation sections={sections} />
          </View>
        </View>
        <View className='basis-1/12 print:hidden'></View>
        <View className='basis-6/12 print:basis-full print:px-x12 min-w-0'>
          <Plate value={document} onChange={setDocument} />
        </View>
      </View>
    </>
  );
};

export default DocumentPage;
