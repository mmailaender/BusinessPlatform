'use client';
import ArrowLeft from '@/components/Icons/ArrowLeft';
import BinIcon from '@/components/Icons/BinIcon';
import DocsIcon from '@/components/Icons/DocsIcon';
import DuplicateIcon from '@/components/Icons/DuplicateIcon';
import MoreIcon from '@/components/Icons/MoreIcon';
import PrintIcon from '@/components/Icons/PrintIcon';
import { useRouter, useParams, usePathname } from 'next/navigation';
import {
  Button,
  View,
  useFormControl,
  DropdownMenu,
  TextField,
} from 'reshaped';
import { debounce } from 'radash';
import { useQuery } from 'fqlx-client';
import {
  Block,
  DocumentInput,
  Query,
  TemplateInput,
} from '@/fqlx-generated/typedefs';
import { useEffect, useState, useCallback } from 'react';
import useTemplate from '@/hooks/useTemplate';

export default function CreateFile({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const param = useParams();
  const path = usePathname();
  const isTemplate = path.includes('templates');
  const query = useQuery<Query>();
  const [fileName, setFileName] = useState('New Document');
  const {
    deleteTemplate,
    fetchTemplateName,
    updateTemplateName,
    duplicateTemplate,
  } = useTemplate();

  const CustomInput = () => {
    const { attributes } = useFormControl();

    return (
      <input
        {...attributes}
        type='text'
        defaultValue='New Business Plan'
        className='text-base font-bold truncate bg-none w-fit'
      />
    );
  };

  useEffect(() => {
    if (isTemplate) {
      fetchTemplateName(param.id).then((name) => setFileName(name as string));
    } else {
      query.Document.byId(param.id)
        .exec()
        .then((data) => setFileName(data.name));
    }
  }, []);

  const updateFileNameToFqlx = debounce({ delay: 1000 }, (value: string) => {
    if (isTemplate) {
      updateTemplateName(param.id, value);
    } else {
      query.Document.byId(param.id)
        .update({
          name: value,
        } as DocumentInput)
        .exec();
    }
  });

  const handleFileNameChange = useCallback((event: { value: string }) => {
    setFileName(event.value);
    updateFileNameToFqlx(event.value);
  }, []);

  const handleDelete = async () => {
    if (isTemplate) {
      deleteTemplate(param.id);
      router.push('../templates');
    } else {
      const res = await query.Document.byId(param.id).delete().exec();
      console.log('response', res);
      router.push('../');
    }
  };

  const handleCreateDuplicate = async () => {
    if (isTemplate) {
      const template = await query.Template.byId(param.id).exec();
      duplicateTemplate(template);
    } else {
      console.log('Document');
    }
  };

  return (
    <View className='relative'>
      <View
        position='fixed'
        insetTop={0}
        zIndex={1}
        className=' flex flex-row py-x4 px-x4 w-full border-b-[1px] border-neutral-faded bg-page print:hidden'
      >
        <View className='flex basis-4/12 '>
          <Button
            rounded
            size='medium'
            icon={<ArrowLeft />}
            onClick={router.back}
          />
        </View>
        <View className='flex basis-4/12 justify-center w-x2'>
          {' '}
          <View className='group'>
            <View
              direction='row'
              borderRadius='small'
              align='center'
              justify='center'
              className='group-hover:bg-neutral-highlighted transition-all ease-in-out duration-200'
            >
              <TextField
                icon={<DocsIcon />}
                name='name'
                value={fileName}
                variant='headless'
                onChange={handleFileNameChange}
              />
            </View>
          </View>
        </View>
        <div className='flex basis-4/12 justify-end gap-x-x3'>
          <Button
            onClick={() => {
              window.print();
            }}
            rounded
            size='medium'
            icon={<PrintIcon />}
          >
            Print
          </Button>
          {/* <Button rounded size='medium' icon={<ShareIcon />}>
            Share
          </Button> */}
          <DropdownMenu position='bottom-end'>
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button
                  rounded
                  size='medium'
                  variant='ghost'
                  icon={<MoreIcon />}
                  attributes={attributes}
                ></Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Section>
                <DropdownMenu.Item
                  startSlot={<DuplicateIcon />}
                  onClick={handleCreateDuplicate}
                >
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  startSlot={<BinIcon />}
                  onClick={handleDelete}
                >
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Section>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </View>
      {children}
    </View>
  );
}
