"use client";

import { View, Icon, Link } from "reshaped";
import React from "react";
import XGroup from "@/components/Icons/XGroup";

export default function Watermark() {
  return (
    <View justify="end" paddingStart={2} align="end">
      <View
        className="w-full border border-neutral-faded "
        direction="row"
        align="center"
        gap={3}
        paddingStart={1}
        paddingBlock={1}
        paddingEnd={3}
        borderRadius="medium"
        backgroundColor="white"
      >
        <View direction="row" align="center" gap={2}>
          <Icon svg={<XGroup />} size={4} className="opacity-40" />
          <Link
            color="inherit"
            variant="plain"
            href="https://www.instagram.com/"
          >
            Created with Compademy
          </Link>
        </View>
      </View>
    </View>
  );
}
