'use client';

import { Button, View, Text, Divider, Accordion, DropdownMenu } from 'reshaped';
import PlusIcon from '@/components/Icons/PlusIcon';
import Section from '@/components/Section';

interface FileNavigationProps {
  sections: { [sectionName: string]: { id: string; [key: string]: any } };
}

export default function FileNavigation({ sections }: FileNavigationProps) {
  return (
    <View width='100%'>
      {/* Headline with add button */}
      <View
        direction='row'
        width='100%'
        align='center'
        paddingBottom={6}
        paddingStart={4}
        paddingTop={2}
      >
        <View.Item grow>
          <Text variant='body-3' weight='medium' color='neutral-faded'>
            Sections
          </Text>
        </View.Item>
      </View>

      {/* Sections */}
      {Object.keys(sections).map((sectionName) => {
        const section = sections[sectionName];
        const subsections = section[sectionName];

        return (
          <View width='100%' key={section.id} paddingEnd={2}>
            <Accordion defaultActive={false}>
              <Accordion.Trigger>
                <View paddingBottom={2}>
                  <Section sectionId={section.id} title={sectionName} />
                </View>
              </Accordion.Trigger>
              <Accordion.Content>
                {/* List of subsection */}
                {subsections.map((subsection: any, index: any) => (
                  <View gap={1} key={index} paddingBottom={3}>
                    <View
                      direction='row'
                      align='center'
                      gap={3}
                      paddingStart={4}
                      width='100%'
                    >
                      <View height={10} align='start'>
                        <Divider vertical />
                      </View>
                      {/* Subsection */}
                      <View.Item grow>
                        <Section
                          sectionId={subsection.id}
                          title={subsection.h2}
                        />
                      </View.Item>
                    </View>
                  </View>
                ))}
              </Accordion.Content>
            </Accordion>
          </View>
        );
      })}
    </View>
  );
}
