import React from "react";
import { FormatBold } from "@styled-icons/material/FormatBold";
import { FormatItalic } from "@styled-icons/material/FormatItalic";
import { FormatUnderlined } from "@styled-icons/material/FormatUnderlined";
import { TippyProps } from "@tippyjs/react";
import {
  BalloonToolbar,
  BalloonToolbarProps,
  ELEMENT_LINK,
  getPluginType,
  ELEMENT_TABLE,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  MarkToolbarButton,
  WithPartial,
  LinkToolbarButton,
  ListToolbarButton,
  ELEMENT_UL,
  ELEMENT_OL,
} from "@udecode/plate";
import { useMyPlateEditorRef } from "./interfaces/plateTypes";
import { Select, View, ViewProps, SelectProps } from "reshaped";
import TextStyle from "@/components/TextStyle";
import ItalicIcon from "@/components/Icons/ItalicIcon";
import UnderlineIcon from "@/components/Icons/UnderlineIcon";
import BoldIcon from "@/components/Icons/BoldIcon";
import StrikethroughIcon from "@/components/Icons/StrikethroughIcon";
import LinkIcon from "@/components/Icons/LinkIcon";
import TextIcon from "@/components/Icons/TextIcon";
import TableIcon from "@/components/Icons/TableIcon";
import BulletlistIcon from "../Icons/BulletlistIcon";
import OrderlistIcon from "../Icons/OrderlistIcon";

export const markTooltip: TippyProps = {
  arrow: true,
  delay: 0,
  duration: [200, 0],
  hideOnClick: false,
  // offset: [0, 17],
  placement: "top",
};

export const MarkBalloonToolbar = (
  props: WithPartial<BalloonToolbarProps, "children">
) => {
  const { children, ...balloonToolbarProps } = props;

  const editor = useMyPlateEditorRef();

  const arrow = false;
  const theme = "light";

  const boldTooltip: TippyProps = { content: "", ...markTooltip };
  const italicTooltip: TippyProps = { content: "", ...markTooltip };
  const underlineTooltip: TippyProps = {
    content: "",
    ...markTooltip,
  };
  const strikethroughTooltip: TippyProps = { content: "", ...markTooltip };
  const linkTooltip: TippyProps = { content: "", ...markTooltip };

  function tooltip(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <BalloonToolbar theme={theme} arrow={arrow} {...balloonToolbarProps}>
      <View direction="row" align="center" divided gap={1}>
        <View width="160px" maxWidth="100%" paddingInline={2}>
          <Select
            options={[
              { label: "Following", value: "1" },
              { label: "Popular", value: "2" },
              { label: "New & Noteworthy", value: "3" },
            ]}
            name="sort"
            icon={<TextIcon />}
            variant="headless"
          />
        </View>
        <View direction="row" align="center" gap={1}>
          <MarkToolbarButton
            type={getPluginType(editor, MARK_BOLD)}
            icon={<TextStyle label="Bold (⌘+B)" icon={<BoldIcon />} />}
            tooltip={boldTooltip}
            actionHandler="onMouseDown"
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_ITALIC)}
            icon={<TextStyle label="Italic (⌘+I)" icon={<ItalicIcon />} />}
            tooltip={italicTooltip}
            actionHandler="onMouseDown"
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_UNDERLINE)}
            icon={
              <TextStyle label="Underline (⌘+U)" icon={<UnderlineIcon />} />
            }
            tooltip={underlineTooltip}
            actionHandler="onMouseDown"
          />
          <MarkToolbarButton
            tooltip={strikethroughTooltip}
            type={getPluginType(editor, MARK_STRIKETHROUGH)}
            icon={
              <TextStyle label="Strikethrough" icon={<StrikethroughIcon />} />
            }
            actionHandler="onMouseDown"
          />
        </View>
        <View direction="row" align="center">
          <ListToolbarButton
            type={getPluginType(editor, ELEMENT_UL)}
            icon={<TextStyle label="Bullet List" icon={<BulletlistIcon />} />}
          />
          <ListToolbarButton
            type={getPluginType(editor, ELEMENT_OL)}
            icon={<TextStyle label="Ordered List" icon={<OrderlistIcon />} />}
          />
        </View>
        <View direction="row" align="center" paddingEnd={1}>
          <LinkToolbarButton
            icon={<TextStyle label="Link" icon={<LinkIcon />} />}
          />
        </View>
      </View>
      {children}
    </BalloonToolbar>
  );
};
