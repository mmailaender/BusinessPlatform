'use client';
import { View, Text, Image, ImageProps, Icon, IconProps } from 'reshaped';
import React from 'react';
import Document from '@/components/Icons/Document';
import ContentLine, { SecondaryContentLine } from '@/components/ContentLine';

interface PrintTableOfContentProps {
  sections: { [sectionName: string]: { id: string; [key: string]: any } };
}

export default function PrintTableOfContent({
  sections,
}: PrintTableOfContentProps) {
  return (
    <View className='w-full ' height={360} paddingInline={20} paddingTop={24}>
      <View gap={20}>
        <Text variant='title-4'>Content</Text>

        <View gap={2}>
          {Object.keys(sections).map(
            (sectionName: string, sectionIndex: number) => {
              return (
                <React.Fragment key={sectionIndex}>
                  <ContentLine title={sectionName} />

                  {sections[sectionName][sectionName].map(
                    (subsection: string, index: number) => (
                      <SecondaryContentLine key={index} subTitle={subsection} />
                    )
                  )}
                </React.Fragment>
              );
            }
          )}
        </View>
      </View>
    </View>
  );
}
