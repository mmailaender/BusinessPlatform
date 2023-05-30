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
} from '@udecode/plate';
import BoldIcon from '@/components/Icons/BoldIcon';
import ItalicIcon from '@/components/Icons/ItalicIcon';
import UnderlineIcon from '@/components/Icons/UnderlineIcon';
import StrikethroughIcon from '@/components/Icons/StrikethroughIcon';
import { View, Select } from 'reshaped';
import BulletlistIcon from '../Icons/BulletlistIcon';
import OrderlistIcon from '../Icons/OrderlistIcon';
import TextIcon from '@/components/Icons/TextIcon';
import { TippyProps } from '@tippyjs/react';
import { Transforms } from 'slate';
import TextStyle from '@/components/TextStyle';
import { markTooltip } from './MarkBalloonToolbar';

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

export const BasicElementToolbarButtons = () => {
  const editor = usePlateEditorRef(useEventPlateId());

  const arrow = false;
  const theme = 'light';

  const boldTooltip: TippyProps = { content: '', ...markTooltip };
  const italicTooltip: TippyProps = { content: '', ...markTooltip };
  const underlineTooltip: TippyProps = {
    content: '',
    ...markTooltip,
  };
  const strikethroughTooltip: TippyProps = { content: '', ...markTooltip };
  const linkTooltip: TippyProps = { content: '', ...markTooltip };

  const handleOption = (selectedOption: any) => {
    Transforms.setNodes(editor as any, { type: selectedOption.value } as any);
  };

  function tooltip(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <View direction='row' align='center' divided gap={1}>
      <View width='160px' maxWidth='100%' paddingInline={2}>
        <Select
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
          icon={<TextStyle label='Bold (⌘+B)' icon={<BoldIcon />} />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<TextStyle label='Italic (⌘+I)' icon={<ItalicIcon />} />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<TextStyle label='Underline (⌘+U)' icon={<UnderlineIcon />} />}
          actionHandler='onMouseDown'
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={
            <TextStyle label='Strikethrough' icon={<StrikethroughIcon />} />
          }
          actionHandler='onMouseDown'
        />
      </View>
      <View direction='row' align='center'>
        <ListToolbarButton
          type={getPluginType(editor, ELEMENT_UL)}
          icon={<TextStyle label='Bullet List' icon={<BulletlistIcon />} />}
        />
        <ListToolbarButton
          type={getPluginType(editor, ELEMENT_OL)}
          icon={<TextStyle label='Ordered List' icon={<OrderlistIcon />} />}
        />
      </View>
    </View>
  );
};
