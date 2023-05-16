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
} from '@udecode/plate';
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
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createLinkPlugin(linkPlugin),
  ],
  { components: plateUI }
);

export default function PlateEditor() {
  return (
    <PlateProvider<MyValue> plugins={plugins}>
      <Toolbar>
        <BasicElementToolbarButtons />
        <LinkToolbarButton icon={<Link />} />
      </Toolbar>

      <Plate<MyValue> editableProps={editableProps}>
        <MarkBalloonToolbar />
      </Plate>
    </PlateProvider>
  );
}
