"use client";
import { View, Text, Image, ImageProps, Icon, IconProps } from "reshaped";
import React from "react";
import Document from "../Icons/Document";
import ContentLine from "../ContentLine";

export default function ContentTemplate() {
  return (
    <View className="w-full " height={360} paddingInline={20} paddingTop={24}>
      <View gap={20}>
        <Text variant="title-4"> Content</Text>
        <View gap={2}>
          <ContentLine />
          <ContentLine />
        </View>
      </View>
    </View>
  );
}
