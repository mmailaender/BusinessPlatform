"use client";

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
} from "@udecode/plate";
import { Link } from "@styled-icons/material/Link";

import "./styles.css";
import {
  MyPlatePlugin,
  MyValue,
  createMyPlugins,
} from "./interfaces/plateTypes";
import { BasicElementToolbarButtons } from "./HeadingToolbar";
import { Toolbar } from "./Toolbar";
import { plateUI } from "./common/PlateUI";
import { MarkBalloonToolbar } from "./MarkBalloonToolbar";
import { linkPlugin } from "./plugins/linkPlugin";
import { TableToolbarButtons } from "./toolbar/TableToolbarButtons";
import { softBreakPlugin } from "./plugins/softPlugin";
import { exitBreakPlugin } from "./plugins/exitBreakPlugin";
import LinkIcon from "../Icons/LinkIcon";
import TextStyle from "../TextStyle";

const editableProps: TEditableProps<MyValue> = {
  placeholder: "Type...",
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
  ],
  { components: plateUI }
);

export default function PlateEditor() {
  return (
    <PlateProvider<MyValue> plugins={plugins}>
      <Toolbar>
        <BasicElementToolbarButtons />
        <LinkToolbarButton
          icon={<TextStyle label="Link" icon={<LinkIcon />} />}
        />
        <TableToolbarButtons />
      </Toolbar>

      <Plate<MyValue> editableProps={editableProps}>
        <MarkBalloonToolbar />
      </Plate>
    </PlateProvider>
  );
}
