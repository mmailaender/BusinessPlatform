'use client';
import {
  Button,
  TextField,
  TextFieldProps,
  View,
  Text,
  ViewProps,
  TextProps,
  Icon,
  IconProps,
  FormControl,
  useFormControl,
  FormControlProps,
  Divider,
  DividerProps,
  Accordion,
  AccordionProps,
  MenuItem,
  Placeholder,
  DropdownMenu,
  DropdownMenuProps,
  Tooltip,
} from 'reshaped';

import PlusIcon from '../Icons/PlusIcon';
import MoreIcon from '../Icons/MoreIcon';
import RenameIcon from '../Icons/RenameIcon';
import DuplicateIcon from '../Icons/DuplicateIcon';
import BinIcon from '../Icons/BinIcon';

const maxLength = 35;

export default function Section({ title, sectionId }: any) {
  const truncatedText =
    title?.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  const showTooltip = title?.length > maxLength;

  const handleScroll = (sectionId: string) => {
    const yOffset = -10;
    const element = document.getElementById(sectionId);
    if (element) {
      const scroll =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: scroll, behavior: 'smooth' });
    }
  };

  return (
    <View width='100%'>
      <MenuItem
        onClick={() => handleScroll(sectionId)}
        className='group'
        roundedCorners={true}
        endSlot={
          <DropdownMenu position='bottom-start'>
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button
                  icon={<MoreIcon />}
                  size='small'
                  variant='ghost'
                  rounded
                  attributes={attributes}
                  className='opacity-0 group-hover:opacity-100 transform transition-all duration-300'
                ></Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Section>
                <DropdownMenu.Item startSlot={<RenameIcon />}>
                  Rename
                </DropdownMenu.Item>
                <DropdownMenu.Item startSlot={<DuplicateIcon />}>
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Item startSlot={<BinIcon />}>
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Section>
            </DropdownMenu.Content>
          </DropdownMenu>
        }
      >
        {showTooltip && (
          <Tooltip text={title}>
            {(attributes) => (
              <Text attributes={attributes}>{truncatedText}</Text>
            )}
          </Tooltip>
        )}
        {!showTooltip && title}
      </MenuItem>
    </View>
  );
}
