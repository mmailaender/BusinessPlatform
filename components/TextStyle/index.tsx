"use client";
import {
  View,
  ViewProps,
  Button,
  ButtonProps,
  Text,
  TextProps,
} from "reshaped";

import PlusIcon from "../Icons/PlusIcon";
import DocsIcon from "../Icons/DocsIcon";

export default function TextStyle() {
  return (
    <View className="group w-fit" align="center">
      <View
        paddingInline={2}
        paddingBlock={1}
        backgroundColor="black"
        borderRadius="small"
        className=" w-fit opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transform transition-all duration-400"
      >
        <Text variant="body-3" weight="medium">
          Bold
        </Text>
      </View>
      <Button icon={<DocsIcon />} size="medium" variant="ghost"></Button>
    </View>
  );
}
