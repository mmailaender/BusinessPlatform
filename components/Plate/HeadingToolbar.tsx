import { useMemo } from 'react';
import {
  getPluginType,
  useEventPlateId,
  usePlateEditorRef,
  MARK_STRIKETHROUGH,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton,
  ELEMENT_OL,
  ELEMENT_UL,
  ListToolbarButton,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_PARAGRAPH,
  someNode,
  usePlateSelection,
  ColorPickerToolbarDropdown,
  MARK_BG_COLOR,
  MARK_COLOR,
  AlignToolbarButton,
} from '@udecode/plate';
import {
  FormatColorText,
  Check,
  FontDownload,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatItalic,
  FormatBold,
  FormatUnderlined,
  FormatStrikethrough,
  FormatListNumbered,
  FormatListBulleted,
} from '@styled-icons/material';
import { View, Select } from 'reshaped';
import { Transforms } from 'slate';
import TextIcon from '@/components/Icons/TextIcon';

const options = [
  {
    value: 'h1',
    label: 'Heading 1',
  },
  {
    value: 'h2',
    label: 'Heading 2',
  },
  {
    value: 'h3',
    label: 'Heading 3',
  },
  {
    value: 'p',
    label: 'Paragraph',
  },
];

export let editorRef: any;

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef(useEventPlateId());
  editorRef = editor;
  const isSelected = usePlateSelection();

  function tooltip(arg0: string) {
    throw new Error('Function not implemented.');
  }
  const handleOption = (selected: any) => {
    Transforms.setNodes(editor as any, { type: selected.value } as any);
  };

  const toolBarDropDownValue = useMemo(() => {
    if (
      someNode(editor, {
        match: { type: getPluginType(editor, ELEMENT_H1) },
      })
    ) {
      return ELEMENT_H1;
    }
    if (
      someNode(editor, {
        match: { type: getPluginType(editor, ELEMENT_H2) },
      })
    ) {
      return ELEMENT_H2;
    }
    if (
      someNode(editor, {
        match: { type: getPluginType(editor, ELEMENT_H3) },
      })
    ) {
      return ELEMENT_H3;
    }
    return ELEMENT_PARAGRAPH;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <View direction='row' align='center' divided gap={1}>
      <View width='160px' maxWidth='100%' paddingInline={2}>
        <Select
          value={toolBarDropDownValue}
          onChange={handleOption}
          options={options}
          name='sort'
          icon={<TextIcon />}
          variant='headless'
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

      <View direction='row' align='center' gap={1}>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<FormatBold />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<FormatItalic />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<FormatUnderlined />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<FormatStrikethrough />}
          actionHandler='onMouseDown'
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_COLOR}
          icon={<FormatColorText />}
          selectedIcon={<Check />}
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_BG_COLOR}
          icon={<FontDownload />}
          selectedIcon={<Check />}
        />
        <AlignToolbarButton value='left' icon={<FormatAlignLeft />} />
        <AlignToolbarButton value='center' icon={<FormatAlignCenter />} />
        <AlignToolbarButton value='right' icon={<FormatAlignRight />} />
        <AlignToolbarButton value='justify' icon={<FormatAlignJustify />} />
      </View>
      <View direction='row' align='center'>
        <ListToolbarButton
          type={getPluginType(editor, ELEMENT_UL)}
          icon={<FormatListBulleted />}
          actionHandler='onMouseDown'
        />
        <ListToolbarButton
          type={getPluginType(editor, ELEMENT_OL)}
          icon={<FormatListNumbered />}
          actionHandler='onMouseDown'
        />
      </View>
    </View>
  );
};
