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
} from '@udecode/plate';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatQuote } from '@styled-icons/material/FormatQuote';
import { Subscript } from '@styled-icons/material/Subscript';
import { Superscript } from '@styled-icons/material/Superscript';
import { Looks3 } from '@styled-icons/material/Looks3';
import { Looks4 } from '@styled-icons/material/Looks4';
import { Looks5 } from '@styled-icons/material/Looks5';
import { Looks6 } from '@styled-icons/material/Looks6';
import { LooksOne } from '@styled-icons/material/LooksOne';
import { LooksTwo } from '@styled-icons/material/LooksTwo';
import TextStyle from '@/components/TextStyle';
import BoldIcon from '@/components/Icons/BoldIcon';
import ItalicIcon from '@/components/Icons/ItalicIcon';
import UnderlineIcon from '@/components/Icons/UnderlineIcon';
import LinkIcon from '@/components/Icons/LinkIcon';
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted';
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered';
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough';
import { View } from 'reshaped';
import { TippyProps } from '@tippyjs/react';
import { markTooltip } from './MarkBalloonToolbar';

const tooltip = (content: string) => ({
  content,
});

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef(useEventPlateId());

  const boldTooltip: TippyProps = { content: '', ...markTooltip };
  const italicTooltip: TippyProps = { content: '', ...markTooltip };
  const underlineTooltip: TippyProps = {
    content: '',
    ...markTooltip,
  };
  const strikethroughTooltip: TippyProps = { content: '', ...markTooltip };

  return (
    <View direction='row' align='center' gap={1}>
      <BlockToolbarButton
        tooltip={tooltip('Heading 1')}
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<LooksOne />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 2')}
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<LooksTwo />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 3')}
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<Looks3 />}
      />

      {/* <BlockToolbarButton
        tooltip={tooltip("Heading 4")}
        type={getPluginType(editor, ELEMENT_H4)}
        icon={<Looks4 />}
      />
      <BlockToolbarButton
        tooltip={tooltip("Heading 5")}
        type={getPluginType(editor, ELEMENT_H5)}
        icon={<Looks5 />}
      />
      <BlockToolbarButton
        tooltip={tooltip("Heading 6")}
        type={getPluginType(editor, ELEMENT_H6)}
        icon={<Looks6 />}
      /> */}

      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={boldTooltip}
        actionHandler='onMouseDown'
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={italicTooltip}
        actionHandler='onMouseDown'
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={underlineTooltip}
        actionHandler='onMouseDown'
      />
      <MarkToolbarButton
        tooltip={strikethroughTooltip}
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />

      {/* <MarkToolbarButton
        tooltip={tooltip("Superscript (⌘+,)")}
        type={getPluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
      />
      <MarkToolbarButton
        tooltip={tooltip("Subscript (⌘+.)")}
        type={getPluginType(editor, MARK_SUBSCRIPT)}
        clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
      />
      <BlockToolbarButton
        tooltip={tooltip("Block Quote (⌘+⇧+.)")}
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      /> */}

      <ListToolbarButton
        tooltip={tooltip('Bullet List')}
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        tooltip={tooltip('Ordered List')}
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </View>
  );
};
