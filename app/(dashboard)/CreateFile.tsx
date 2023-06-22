'use client';

import React from 'react';
import {
  View,
  Text,
  useToggle,
  Modal,
  Dismissible,
  Actionable,
} from 'reshaped';
import { useQuery } from 'fqlx-client';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Block, DocumentInput, Query } from '@/fqlx-generated/typedefs';
import CreateDocument from '@/components/Icons/CreateDocument';
import TemplateType from './TemplateType';
import { TemplatetypeScratch } from './TemplatetypeScratch';

export default function CreateFile() {
  const {
    active: activeModal,
    activate: activateModal,
    deactivate: deactivateModal,
  } = useToggle(false);
  const query = useQuery<Query>();
  const router = useRouter();
  const { user } = useUser();
  const templates = query.Template.all().exec();

  const createDocumentFromScratch = async () => {
    const res = await query.Document.create({
      name: 'Untitled',
      owner: user?.id,
      blocks: [],
    } as unknown as DocumentInput).exec();

    if (res.id) {
      router.push(`/documents/${res.id}`);
    }
  };

  const handleCreateDocument = async (template: any) => {
    const blocksPromises: Promise<Block>[] = [];

    template.blocks.forEach((m: any) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = (await Promise.all(blocksPromises)) as Block[];

    let blocks: string[] = [];

    for (const resolvedBlock of resolvedBlocks) {
      const res = await query.Block.create({
        content: resolvedBlock.content,
      } as Block).exec();

      blocks.push(res.id);
    }

    if (blocks.length > 0) {
      const res = await query.Document.create({
        name: 'Untitled',
        owner: user?.id,
        blocks: blocks as unknown as Block[],
      } as unknown as DocumentInput).exec();

      if (res.id) {
        router.push(`/documents/${res.id}`);
      }
    }
  };

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
            <Actionable onClick={createDocumentFromScratch}>
              <TemplatetypeScratch />
            </Actionable>
            {templates.data.map((template) => (
              <Actionable
                key={template.id}
                onClick={() => handleCreateDocument(template)}
              >
                <TemplateType name={template.name} />
              </Actionable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
