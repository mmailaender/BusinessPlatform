'use client';

import { useEffect, useState } from 'react';
import {
  Plate,
  PlateProvider,
  createDeserializeDocxPlugin,
  TEditableProps,
  createBlockquotePlugin,
  createExitBreakPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createFontColorPlugin,
  createLinkPlugin,
  createTablePlugin,
  createImagePlugin,
  ImageToolbarButton,
  createListPlugin,
  createTodoListPlugin,
  createNodeIdPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
  createAlignPlugin,
} from '@udecode/plate';
import { createDndPlugin } from '@udecode/plate-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './styles.css';
import {
  MyPlatePlugin,
  MyRootBlock,
  MyValue,
  createMyPlugins,
} from './interfaces/plateTypes';
import { BasicElementToolbarButtons } from './HeadingToolbar';
import { Toolbar } from './Toolbar';
import { plateUI } from './common/PlateUI';
import { MarkBalloonToolbar } from './MarkBalloonToolbar';
import { linkPlugin } from './plugins/linkPlugin';
import { TableToolbarButtons } from './toolbar/TableToolbarButtons';
import { softBreakPlugin } from './plugins/softPlugin';
import { exitBreakPlugin } from './plugins/exitBreakPlugin';
import TextStyle from '../TextStyle';
import { View, classNames } from 'reshaped';
import ImageIcon from '../Icons/ImageIcon';

const editableProps: TEditableProps<MyValue> = {
  placeholder: 'Type...',
  spellCheck: false,
  autoFocus: false,
};

const plugins: MyPlatePlugin[] = createMyPlugins(
  [
    createDeserializeDocxPlugin(),
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createResetNodePlugin(),
    createSoftBreakPlugin(softBreakPlugin),
    createExitBreakPlugin(exitBreakPlugin),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createLinkPlugin(linkPlugin),
    createTablePlugin(),
    createImagePlugin(),
    createListPlugin(),
    createTodoListPlugin(),
    createNodeIdPlugin(),
    createDndPlugin({ options: { enableScroller: true } }),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createAlignPlugin(),
  ],
  { components: plateUI }
);

export interface PlateEditorProps {
  value: MyValue;
  onChange(value: MyValue): void;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default function PlateEditor({ value, onChange }: PlateEditorProps) {
  const scrollPosition = useScrollPosition();
  const elementIds = value?.reduce((acc: MyRootBlock[], curr: MyRootBlock) => {
    return [...acc, curr?.id];
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateProvider<MyValue>
        key={JSON.stringify(elementIds)}
        plugins={plugins}
        onChange={onChange}
        initialValue={value?.length ? value : undefined}
      >
        <View
          position='sticky'
          insetTop={20}
          width='100%'
          zIndex={1}
          padding={0}
          className='print:hidden'
        >
          <Toolbar
            className={classNames(
              scrollPosition > 135 ? 'drop-shadow' : 'drop-shadow-none',
              'transition-shadow bg-page !rounded-md !border-0 !px-0 !py-0 !mx-0'
            )}
          >
            {/* <BasicElementToolbarButtons />
          <LinkToolbarButton
            icon={<TextStyle label="Link" icon={<LinkIcon />} />}
          /> */}
            <View direction='row' align='center' divided gap={1}>
              <BasicElementToolbarButtons />
              <TableToolbarButtons />
              <ImageToolbarButton
                icon={<TextStyle label='Image' icon={<ImageIcon />} />}
              />
            </View>
          </Toolbar>
        </View>

        <Plate<MyValue>
          editableProps={editableProps}
          value={value?.length ? value : undefined}
        >
          <MarkBalloonToolbar />
        </Plate>
      </PlateProvider>
    </DndProvider>
  );
}
