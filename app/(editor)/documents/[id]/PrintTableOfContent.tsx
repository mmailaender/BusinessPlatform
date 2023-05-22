"use client";
import { View, Text, Image, ImageProps, Icon, IconProps } from "reshaped";
import React from "react";
import Document from "@/components/Icons/Document";
import ContentLine, { SecondaryContentLine } from "@/components/ContentLine";

export default function PrintTableOfContent() {
  return (
    <View className="w-full " height={360} paddingInline={20} paddingTop={24}>
      <View gap={20}>
        <Text variant="title-4"> Content</Text>
        <View gap={2}>
          <ContentLine />
          <SecondaryContentLine />
          <SecondaryContentLine />
          <ContentLine />
          <SecondaryContentLine />
          <SecondaryContentLine />
          <SecondaryContentLine />
          <SecondaryContentLine />
          <SecondaryContentLine />
        </View>
      </View>
    </View>
  );
}
