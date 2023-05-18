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
import { View, classNames } from "reshaped";

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

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default function PlateEditor() {
  const scrollPosition = useScrollPosition();

  return (
    <PlateProvider<MyValue> plugins={plugins}>
      <View position="sticky" insetTop={20} width="100%" zIndex={1} padding={0}>
        <Toolbar
          className={classNames(
            scrollPosition > 135 ? "drop-shadow" : "drop-shadow-none",
            "transition-shadow bg-page !rounded-md !border-0 !px-0 !py-0 !mx-0"
          )}
        >
          {/* <BasicElementToolbarButtons />
          <LinkToolbarButton
            icon={<TextStyle label="Link" icon={<LinkIcon />} />}
          /> */}
          <TableToolbarButtons />
        </Toolbar>
      </View>

      <Plate<MyValue> editableProps={editableProps}>
        <MarkBalloonToolbar />
      </Plate>
    </PlateProvider>
  );
}
