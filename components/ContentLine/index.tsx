"use client";
import { View, Text, Image, ImageProps, Icon, IconProps } from "reshaped";
import React from "react";
import Document from "../Icons/Document";

export default function ContentLine() {
  return (
    <View gap={2}>
      <View className=" flex flex-row justify-between">
        <Text variant="body-2" weight="medium">
          Content title aka Section
        </Text>
        <Text variant="body-2" weight="medium">
          01
        </Text>
      </View>
    </View>
  );
}
