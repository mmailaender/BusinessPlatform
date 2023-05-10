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

export default function FileNavigation() {
  return (
    <View width="100%">
      {/* Headline with add button */}
      <View
        direction="row"
        width="100%"
        className="justify-between"
        align="center"
        paddingBottom={6}
        paddingStart={4}
      >
        <Text variant="body-3" weight="medium" color="neutral-faded">
          Sections
        </Text>
        <DropdownMenu position="bottom">
          <DropdownMenu.Trigger>
            {(attributes) => (
              <Button
                size="small"
                variant="outline"
                rounded
                icon={<PlusIcon />}
                attributes={attributes}
              ></Button>
            )}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Add Sectoion</DropdownMenu.Item>
            <DropdownMenu.Item>Add Subsection</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </View>

      {/* Sections */}
      <View width="100%" paddingEnd={2}>
        <Accordion defaultActive={false}>
          <Accordion.Trigger>
            <View paddingBottom={2}>
              <MenuItem roundedCorners={true}>Section 1</MenuItem>
            </View>
          </Accordion.Trigger>
          <Accordion.Content>
            {/* List of subsection */}
            <View gap={1} paddingBottom={3}>
              <View
                direction="row"
                align="center"
                gap={3}
                paddingStart={4}
                width="100%"
              >
                <View height={10} align="start">
                  <Divider vertical />
                </View>
                {/* subsection list */}
                <View.Item grow>
                  <MenuItem selected={true} roundedCorners={true}>
                    Hint with very long title
                  </MenuItem>
                </View.Item>
              </View>

              <View
                direction="row"
                align="center"
                gap={3}
                paddingStart={4}
                width="100%"
              >
                <View height={10}>
                  <Divider vertical />
                </View>
                {/* subsection list */}
                <View.Item grow>
                  <MenuItem roundedCorners={true}>Hint</MenuItem>
                </View.Item>
              </View>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>

      <View width="100%" paddingEnd={2}>
        <Accordion defaultActive={false}>
          <Accordion.Trigger>
            <View paddingBottom={2}>
              <MenuItem roundedCorners={true}>
                Section about something else
              </MenuItem>
            </View>
          </Accordion.Trigger>
          <Accordion.Content>
            {/* List of subsection */}
            <View gap={1} paddingBottom={3}>
              <View
                direction="row"
                align="center"
                gap={3}
                paddingStart={4}
                width="100%"
              >
                <View height={10}>
                  <Divider vertical />
                </View>
                {/* subsection list */}
                <View.Item grow>
                  <MenuItem selected={true} roundedCorners={true}>
                    Hint
                  </MenuItem>
                </View.Item>
              </View>

              <View
                direction="row"
                align="center"
                gap={3}
                paddingStart={4}
                width="100%"
              >
                <View height={10}>
                  <Divider vertical />
                </View>
                {/* subsection list */}
                <View.Item grow>
                  <MenuItem roundedCorners={true}>Hint</MenuItem>
                </View.Item>
              </View>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>
    </View>
  );
}
