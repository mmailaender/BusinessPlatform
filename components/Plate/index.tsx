'use client';

import {
  Plate,
  PlateProvider,
  TEditableProps,
  createBlockquotePlugin,
  createExitBreakPlugin,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
  createBasicElementsPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createFontColorPlugin,
  LinkToolbarButton,
  createLinkPlugin,
  createTablePlugin,
  createImagePlugin,
  ImageToolbarButton,
  createListPlugin,
  createTodoListPlugin,
  createNodeIdPlugin,
} from '@udecode/plate';
import { Link } from '@styled-icons/material/Link';
import { createDndPlugin } from '@udecode/plate-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Image } from '@styled-icons/material/Image';

import './styles.css';
import {
  MyPlatePlugin,
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
import LinkIcon from '../Icons/LinkIcon';
import TextStyle from '../TextStyle';
import { View, classNames } from 'reshaped';

const editableProps: TEditableProps<MyValue> = {
  placeholder: 'Type...',
  spellCheck: false,
  autoFocus: false,
};

const plugins: MyPlatePlugin[] = createMyPlugins(
  [
    createParagraphPlugin(),
    createBasicElementsPlugin(),
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
  ],
  { components: plateUI }
);

export interface PlateEditorProps {
  value: MyValue;
  onChange(value: MyValue): void;
}

import { useEffect, useState } from 'react';

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

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateProvider<MyValue>
        plugins={plugins}
        onChange={onChange}
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
            <BasicElementToolbarButtons />
            <TableToolbarButtons />
            <ImageToolbarButton icon={<Image />} />
          </Toolbar>
        </View>

        <Plate<MyValue>
          editableProps={editableProps}
          value={value}
        >
          <MarkBalloonToolbar />
        </Plate>
      </PlateProvider>
    </DndProvider>
  );
}
