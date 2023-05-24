import React from 'react';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { TippyProps } from '@tippyjs/react';
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
  TComboboxItem,
} from '@udecode/plate';
import { useMyPlateEditorRef } from './interfaces/plateTypes';
import { Select, View, ViewProps, SelectProps } from 'reshaped';
import TextStyle from '@/components/TextStyle';
import ItalicIcon from '@/components/Icons/ItalicIcon';
import UnderlineIcon from '@/components/Icons/UnderlineIcon';
import BoldIcon from '@/components/Icons/BoldIcon';
import StrikethroughIcon from '@/components/Icons/StrikethroughIcon';
import LinkIcon from '@/components/Icons/LinkIcon';
import TextIcon from '@/components/Icons/TextIcon';
import TableIcon from '@/components/Icons/TableIcon';
import { Transforms } from 'slate';

export const markTooltip: TippyProps = {
  arrow: true,
  delay: 0,
  duration: [200, 0],
  hideOnClick: false,
  // offset: [0, 17],
  placement: 'top',
};

const options = [
  {
    value: 'p',
    label: 'p',
  },
  {
    value: 'h1',
    label: 'h1',
  },
  {
    value: 'h2',
    label: 'h2',
  },
  {
    value: 'h3',
    label: 'h3',
  },
];

export const MarkBalloonToolbar = (
  props: WithPartial<BalloonToolbarProps, 'children'>
) => {
  const { children, ...balloonToolbarProps } = props;

  const editor = useMyPlateEditorRef();

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

  return (
    <BalloonToolbar theme={theme} arrow={arrow} {...balloonToolbarProps}>
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
        <View direction='row' align='center' gap={1}>
          <MarkToolbarButton
            type={getPluginType(editor, MARK_BOLD)}
            icon={<TextStyle label='Bold (⌘+B)' icon={<BoldIcon />} />}
            tooltip={boldTooltip}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_ITALIC)}
            icon={<TextStyle label='Italic (⌘+I)' icon={<ItalicIcon />} />}
            tooltip={italicTooltip}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_UNDERLINE)}
            icon={
              <TextStyle label='Underline (⌘+U)' icon={<UnderlineIcon />} />
            }
            tooltip={underlineTooltip}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            tooltip={strikethroughTooltip}
            type={getPluginType(editor, MARK_STRIKETHROUGH)}
            icon={
              <TextStyle label='Strikethrough' icon={<StrikethroughIcon />} />
            }
            actionHandler='onMouseDown'
          />
        </View>
        <View direction='row' align='center'>
          <LinkToolbarButton
            icon={<TextStyle label='Link' icon={<LinkIcon />} />}
          />
        </View>
      </View>
      {children}
    </BalloonToolbar>
  );
};
