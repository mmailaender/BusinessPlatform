"use client";
import {
  Button,
  Container,
  View,
  Text,
  ViewProps,
  TextProps,
  Icon,
  IconProps,
} from "reshaped";

import CreateDocument from "@/components/Icons/CreateDocument";
import Template from "../Icons/Template";
import MoreIcon from "../Icons/MoreIcon";

export default function CreateFile() {
  return (
    <View width="100%" padding={6} className="">
      {/* File component */}
      <View gap={4}>
        <View
          borderColor="neutral-faded"
          aspectRatio={1 / 1}
          borderRadius="small"
          className="border-dashed transition ease-in-out duration-300 hover:bg-neutral-highlighted"
          justify="center"
          align="center"
          padding={{ xl: 16, l: 14, m: 10, s: 10 }}
        >
          <CreateDocument />
        </View>
        {/* Label */}
        <View align="center" paddingBottom={6}>
          <Text variant="body-2" weight="medium" align="center" color="primary">
            Create New Document
          </Text>
        </View>
      </View>
    </View>
  );
}

export function TemplateFile() {
  return (
    <View width="100%" padding={6}>
      {/* File component */}
      <View gap={4}>
        <View
          backgroundColor="neutral-faded"
          aspectRatio={1 / 1}
          borderRadius="small"
          justify="center"
          align="center"
          position="relative"
          padding={{ xl: 16, l: 14, m: 10, s: 10 }}
          className="transition ease-in-out duration-300 hover:bg-neutral-highlighted"
        >
          <View position="absolute" insetTop={2} insetEnd={2}>
            <Button
              rounded={true}
              elevated={true}
              icon={<MoreIcon />}
              color="white"
            ></Button>
          </View>
          <Template />
        </View>
        {/* Label */}
        <View align="center" paddingBottom={6} gap={1}>
          <Text variant="body-2" weight="medium" align="center">
            Financial Business Plan
          </Text>
          <Text variant="caption-1" align="center" color="neutral-faded">
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}
