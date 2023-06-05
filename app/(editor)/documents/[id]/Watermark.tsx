"use client";
import { View, Text, Icon, Link, Divider } from "reshaped";
import React from "react";
import Image from "next/image";
import ExternalLink from "@/components/Icons/ExternalLink";
import XGroup from "@/components/Icons/XGroup";

export default function Watermark() {
  return (
    <View justify="end" paddingStart={19}>
      <View
        className="w-full border border-neutral-faded "
        direction="row"
        align="center"
        gap={3}
        paddingStart={3}
        paddingBlock={3}
        paddingEnd={6}
        borderRadius="medium"
      >
        <View direction="row" align="center" gap={3}>
          <Icon svg={<XGroup />} size={8} className="opacity-40" />
          <Link
            color="inherit"
            variant="plain"
            href="https://www.instagram.com/"
          >
            Create your Business Plan with Compademy
          </Link>
        </View>
      </View>
    </View>
  );
}
