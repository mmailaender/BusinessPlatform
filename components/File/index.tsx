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

export default function CreateFile() {
  return (
    <View width="100%" padding={6}>
      {/* File component */}
      <View gap={4}>
        <View
          borderColor="neutral-faded"
          aspectRatio={1 / 1}
          borderRadius="small"
          className="border-dashed"
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
