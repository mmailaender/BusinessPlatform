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
import { createDndPlugin } from '@udecode/plate-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Image } from '@styled-icons/material/Image';
import { Link } from '@styled-icons/material/Link';

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

export default function PlateEditor({ value, onChange }: PlateEditorProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <PlateProvider<MyValue> plugins={plugins} onChange={onChange}>
        <Toolbar>
          <BasicElementToolbarButtons />
          <ImageToolbarButton icon={<Image />} />
          <LinkToolbarButton icon={<Link />} />
          <TableToolbarButtons />
        </Toolbar>

        <Plate<MyValue> editableProps={editableProps} value={value}>
          <MarkBalloonToolbar />
        </Plate>
      </PlateProvider>
    </DndProvider>
  );
}
