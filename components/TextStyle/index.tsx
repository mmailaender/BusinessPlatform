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
import { string } from "slate";

export type Props = {
  label: string;
  icon: object;
};

export default function TextStyle({ label, icon }) {
  return (
    <View className="group w-fit" align="center" position="a">
      <View
        paddingInline={2}
        paddingBlock={1}
        backgroundColor="black"
        borderRadius="small"
        position="absolute"
        insetTop={-8}
        className="w-fit opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transform transition-all duration-400"
      >
        <Text variant="body-3" weight="medium">
          {label}
        </Text>
      </View>
      <Button icon={icon} size="medium" variant="ghost"></Button>
    </View>
  );
}
