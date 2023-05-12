"use client";
import {
  Button,
  View,
  Text,
  ViewProps,
  TextProps,
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
import Section from "../Section";

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
              <Section />
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
                  <Section />
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
                  <Section />
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
              <Section />
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
                  <Section />
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
                  <Section />
                </View.Item>
              </View>
            </View>
          </Accordion.Content>
        </Accordion>
      </View>
    </View>
  );
}
