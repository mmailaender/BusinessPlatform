'use client';

import React from 'react';
import { View, Text, useToggle, Modal, Dismissible } from 'reshaped';
import CreateDocument from '@/components/Icons/CreateDocument';
import TemplateType from './TemplateType';
import { TemplatetypeScratch } from './TemplatetypeScratch';

export default function CreateFile() {
  const {
    active: activeModal,
    activate: activateModal,
    deactivate: deactivateModal,
  } = useToggle(false);

  return (
    <>
      <View
        width='100%'
        padding={6}
        className='group cursor-pointer'
        attributes={{ onClick: activateModal }}
      >
        {/* File component */}
        <View gap={4}>
          <View
            borderColor='neutral-faded'
            aspectRatio={1 / 1}
            borderRadius='small'
            className='border-dashed transition ease-in-out duration-300 group-hover:bg-neutral-highlighted'
            justify='center'
            align='center'
            padding={{ xl: 12, l: 14, m: 10, s: 10 }}
          >
            <CreateDocument />
          </View>
          {/* Label */}
          <View align='center' paddingBottom={6}>
            <Text
              variant='body-2'
              weight='medium'
              align='center'
              color='primary'
              className='group-hover:opacity-90'
            >
              Create New Document
            </Text>
          </View>
        </View>
      </View>

      <Modal active={activeModal} onClose={deactivateModal} padding={5}>
        <View gap={3}>
          <Dismissible onClose={deactivateModal} closeAriaLabel='Close'>
            <Modal.Title>
              <Text variant='body-1' weight='bold'>
                Create Business Plan based on:
              </Text>
            </Modal.Title>
          </Dismissible>

          <View gap={3} paddingTop={6} className='overflow-y-auto h-[300px]'>
            <TemplatetypeScratch />
            <TemplateType />
            <TemplateType />
            <TemplateType />
            <TemplateType />
            <TemplateType />
          </View>
        </View>
      </Modal>
    </>
  );
}
