"use client";
import { View, Text, Image, ImageProps, Icon, IconProps } from "reshaped";
import React from "react";
import Document from "../Icons/Document";

export default function PrintCover() {
  return (
    <View
      className="w-full "
      height={376}
      justify="end"
      paddingBottom={40}
      paddingInline={20}
    >
      <View gap={64}>
        <Text variant="title-1"> Business Plan Title Example</Text>
        <View gap={20}>
          <View gap={3}>
            <Text variant="body-1">FOR COMPANY</Text>
            <Text variant="title-6" weight="regular">
              Musterfirma GmbH
            </Text>
          </View>
          <View gap={3}>
            <Text variant="body-1">CONSULTANT</Text>
            <Text variant="title-6" weight="regular">
              X-Group GmbH
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
