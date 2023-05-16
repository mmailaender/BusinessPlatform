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
} from '@udecode/plate';
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough';
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

const tooltip = (content: string) => ({
  content,
});

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef(useEventPlateId());

  return (
    <>
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
      <BlockToolbarButton
        tooltip={tooltip('Heading 4')}
        type={getPluginType(editor, ELEMENT_H4)}
        icon={<Looks4 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 5')}
        type={getPluginType(editor, ELEMENT_H5)}
        icon={<Looks5 />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Heading 6')}
        type={getPluginType(editor, ELEMENT_H6)}
        icon={<Looks6 />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Bold (⌘+B)')}
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Italic (⌘+I)')}
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Underline (⌘+U)')}
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Strikethrough (⌘+⇧+M)')}
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Superscript (⌘+,)')}
        type={getPluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
      />
      <MarkToolbarButton
        tooltip={tooltip('Subscript (⌘+.)')}
        type={getPluginType(editor, MARK_SUBSCRIPT)}
        clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
      />
      <BlockToolbarButton
        tooltip={tooltip('Block Quote (⌘+⇧+.)')}
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
    </>
  );
};