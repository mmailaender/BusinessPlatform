import React, { useMemo } from 'react';
import { TippyProps } from '@tippyjs/react';
import {
  BalloonToolbar,
  BalloonToolbarProps,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  MarkToolbarButton,
  WithPartial,
  LinkToolbarButton,
  ELEMENT_H1,
  someNode,
  usePlateSelection,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_PARAGRAPH,
  ListToolbarButton,
  ELEMENT_UL,
  ELEMENT_OL,
} from '@udecode/plate';
import { Transforms } from 'slate';
import { Select, View } from 'reshaped';
import ItalicIcon from '@/components/Icons/ItalicIcon';
import UnderlineIcon from '@/components/Icons/UnderlineIcon';
import StrikethroughIcon from '@/components/Icons/StrikethroughIcon';
import BoldIcon from '@/components/Icons/BoldIcon';
import TextStyle from '@/components/TextStyle';
import LinkIcon from '@/components/Icons/LinkIcon';
import TextIcon from '@/components/Icons/TextIcon';
import BulletlistIcon from '../Icons/BulletlistIcon';
import OrderlistIcon from '../Icons/OrderlistIcon';
import { useMyPlateEditorRef } from './interfaces/plateTypes';

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

export const MarkBalloonToolbar = (
  props: WithPartial<BalloonToolbarProps, 'children'>
) => {
  const { children, ...balloonToolbarProps } = props;

  const editor = useMyPlateEditorRef();
  const isSelected = usePlateSelection();

  const arrow = false;
  const theme = 'light';

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
    <BalloonToolbar theme={theme} arrow={arrow} {...balloonToolbarProps}>
      <View direction='row' align='center' divided gap={1}>
        <View width='160px' maxWidth='100%' paddingInline={2}>
          <Select
            id='selectToolbar'
            defaultValue={toolBarDropDownValue}
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
            icon={<BoldIcon />}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_ITALIC)}
            icon={<ItalicIcon />}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_UNDERLINE)}
            icon={<UnderlineIcon />}
            actionHandler='onMouseDown'
          />
          <MarkToolbarButton
            type={getPluginType(editor, MARK_STRIKETHROUGH)}
            icon={<StrikethroughIcon />}
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
        <View direction='row' align='center' paddingEnd={1}>
          <View direction='row' align='center'>
            <LinkToolbarButton
              icon={<TextStyle label='Link' icon={<LinkIcon />} />}
            />
          </View>
        </View>
      </View>
      {children}
    </BalloonToolbar>
  );
};
