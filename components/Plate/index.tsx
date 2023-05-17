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
  ListToolbarButton,
} from '@udecode/plate';
import { Image } from '@styled-icons/material/Image';
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted';
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
  ],
  { components: plateUI }
);

export interface PlateEditorProps {
  value: MyValue;
  onChange(value: MyValue): void;
}

export default function PlateEditor({ value, onChange }: PlateEditorProps) {
  return (
    <PlateProvider<MyValue> plugins={plugins} onChange={onChange}>
      <Toolbar>
        <BasicElementToolbarButtons />
        <ImageToolbarButton icon={<Image />} />
        <LinkToolbarButton icon={<Link />} />
        <ListToolbarButton type='bullet' icon={<FormatListBulleted />} />

        <TableToolbarButtons />
      </Toolbar>

      <Plate<MyValue> editableProps={editableProps} value={value}>
        <MarkBalloonToolbar />
      </Plate>
    </PlateProvider>
  );
}
