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
} from '@udecode/plate';

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
    createSoftBreakPlugin(),
    createExitBreakPlugin(),
    createUnderlinePlugin(),
  ],
  { components: plateUI }
);

export default () => (
  <PlateProvider<MyValue> plugins={plugins}>
    <Toolbar>
      <BasicElementToolbarButtons />
    </Toolbar>

    <Plate<MyValue> editableProps={editableProps}>
      <MarkBalloonToolbar />
    </Plate>
  </PlateProvider>
);
