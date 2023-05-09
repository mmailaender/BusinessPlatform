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
  Accordion,
  AccordionProps,
  MenuItem,
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
        paddingBottom={4}
      >
        <Text variant="body-2" weight="medium">
          Sections
        </Text>
        <Button
          size="small"
          variant="outline"
          rounded
          icon={<PlusIcon />}
        ></Button>
      </View>

      <Accordion defaultActive={false}>
        <Accordion.Trigger>
          <View borderRadius="small" overflow="hidden" paddingBottom={1}>
            <MenuItem>Section 1</MenuItem>
          </View>
        </Accordion.Trigger>
        <Accordion.Content>
          <View>
            <View backgroundColor="neutral-faded" height={10} />
          </View>
        </Accordion.Content>
      </Accordion>
    </View>
  );
}
