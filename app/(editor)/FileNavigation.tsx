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
        <DropdownMenu position='bottom'>
          <DropdownMenu.Trigger>
            {(attributes) => (
              <Button
                size='small'
                variant='outline'
                rounded
                icon={<PlusIcon />}
                attributes={attributes}
              ></Button>
            )}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Add Sectoion</DropdownMenu.Item>
            <DropdownMenu.Item>Add Subsection</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </View>

      {/* Sections */}
      {Object.keys(sections).map(
        (sectionName: string, sectionIndex: number) => {
          return (
            <View width='100%' key={sectionIndex} paddingEnd={2}>
              <Accordion defaultActive={false}>
                <Accordion.Trigger>
                  <View paddingBottom={2}>
                    <Section
                      sectionId={sections[sectionName].id}
                      title={sectionName}
                    />
                  </View>
                </Accordion.Trigger>
                <Accordion.Content>
                  {/* List of subsection */}
                  {sections[sectionName][sectionName].map(
                    (subsection: string, index: number) => (
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
                          {/* subsection list */}
                          <View.Item grow>
                            <Section title={subsection} />
                          </View.Item>
                        </View>
                      </View>
                    )
                  )}
                </Accordion.Content>
              </Accordion>
            </View>
          );
        }
      )}
    </View>
  );
}