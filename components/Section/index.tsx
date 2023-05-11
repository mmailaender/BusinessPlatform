"use client";
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
} from "reshaped";

import PlusIcon from "../Icons/PlusIcon";
import MoreIcon from "../Icons/MoreIcon";
import RenameIcon from "../Icons/RenameIcon";
import DuplicateIcon from "../Icons/DuplicateIcon";
import BinIcon from "../Icons/BinIcon";

export default function Section() {
  return (
    <View width="100%">
      <MenuItem
        className="group"
        roundedCorners={true}
        endSlot={
          <DropdownMenu position="bottom-end">
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button
                  icon={<MoreIcon />}
                  size="small"
                  variant="ghost"
                  rounded
                  attributes={attributes}
                  className="opacity-0 group-hover:opacity-100 transform transition-all duration-300"
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
        Section 1
      </MenuItem>
    </View>
  );
}
