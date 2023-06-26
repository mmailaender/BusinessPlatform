"use client";

import { View, Text } from "reshaped";
import React from "react";
import Image from "next/image";

export default function PrintCover() {
  return (
    <View
      className="w-full "
      height={376}
      justify="end"
      paddingBottom={64}
      paddingInline={20}
    >
      <View width={80} height={80}>
        <Image
          alt="x-group logo"
          src="/X-GROUP-logo.png"
          width={300}
          height={103}
        />
      </View>
      <View>
        <View paddingBottom={24}>
          <Text variant="title-3"> Business Plan Title Example</Text>
        </View>
        <View gap={16}>
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
