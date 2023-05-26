import {
  BlockToolbarButton,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  getPluginType,
  useEventPlateId,
  usePlateEditorRef,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton,
  ELEMENT_LINK,
  ELEMENT_OL,
  ELEMENT_UL,
  ListToolbarButton,
  BalloonToolbar,
  BalloonToolbarProps,
  ELEMENT_TABLE,
  WithPartial,
  LinkToolbarButton,
  TComboboxItem,
  HeadingToolbar,
} from "@udecode/plate";
import { FormatStrikethrough } from "@styled-icons/material/FormatStrikethrough";
import { FormatUnderlined } from "@styled-icons/material/FormatUnderlined";
import { FormatBold } from "@styled-icons/material/FormatBold";
import { FormatItalic } from "@styled-icons/material/FormatItalic";
import { FormatQuote } from "@styled-icons/material/FormatQuote";
import { Subscript } from "@styled-icons/material/Subscript";
import { Superscript } from "@styled-icons/material/Superscript";
import { Looks3 } from "@styled-icons/material/Looks3";
import { Looks4 } from "@styled-icons/material/Looks4";
import { Looks5 } from "@styled-icons/material/Looks5";
import { Looks6 } from "@styled-icons/material/Looks6";
import { LooksOne } from "@styled-icons/material/LooksOne";
import { LooksTwo } from "@styled-icons/material/LooksTwo";
import TextStyle from "@/components/TextStyle";
import BoldIcon from "@/components/Icons/BoldIcon";
import ItalicIcon from "@/components/Icons/ItalicIcon";
import UnderlineIcon from "@/components/Icons/UnderlineIcon";
import StrikethroughIcon from "@/components/Icons/StrikethroughIcon";
import LinkIcon from "@/components/Icons/LinkIcon";
import { FormatListBulleted } from "@styled-icons/material/FormatListBulleted";
import { FormatListNumbered } from "@styled-icons/material/FormatListNumbered";
import { View, Select } from "reshaped";
import BulletlistIcon from "../Icons/BulletlistIcon";
import OrderlistIcon from "../Icons/OrderlistIcon";
import TextIcon from "@/components/Icons/TextIcon";
import { TippyProps } from "@tippyjs/react";
import { Transforms } from "slate";
import { useMyPlateEditorRef } from "./interfaces/plateTypes";

const tooltip = (content: string) => ({
  content,
});

export const markTooltip: TippyProps = {
  arrow: true,
  delay: 0,
  duration: [200, 0],
  hideOnClick: false,
  // offset: [0, 17],
  placement: "top",
};

const options = [
  {
    value: "h1",
    label: "Heading 1",
  },
  {
    value: "h2",
    label: "Heading 2",
  },
  {
    value: "h3",
    label: "Heading 3",
  },
  {
    value: "p",
    label: "Paragraph",
  },
];

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef(useEventPlateId());

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

  const handleOption = (selectedOption: any) => {
    Transforms.setNodes(editor as any, { type: selectedOption.value } as any);
  };

  function tooltip(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <View direction="row" align="center" divided gap={1}>
      <View width="160px" maxWidth="100%" paddingInline={2}>
        <Select
          onChange={handleOption}
          options={options}
          name="sort"
          icon={<TextIcon />}
          variant="headless"
        />
      </View>
      {/* <BlockToolbarButton
        tooltip={tooltip("Heading 1")}
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        tooltip={tooltip("Heading 2")}
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        tooltip={tooltip("Heading 3")}
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      /> */}

      <View direction="row" align="center" gap={1}>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<TextStyle label="Bold (⌘+B)" icon={<BoldIcon />} />}
          actionHandler="onMouseDown"
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<TextStyle label="Italic (⌘+I)" icon={<ItalicIcon />} />}
          actionHandler="onMouseDown"
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<TextStyle label="Underline (⌘+U)" icon={<UnderlineIcon />} />}
          actionHandler="onMouseDown"
        />
        <MarkToolbarButton
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
    </View>
  );
};
