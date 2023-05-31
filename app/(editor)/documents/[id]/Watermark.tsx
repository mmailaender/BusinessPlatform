"use client";
import { View, Text, Icon, Link, Divider } from "reshaped";
import React from "react";
import Image from "next/image";
import ExternalLink from "@/components/Icons/ExternalLink";

export default function Watermark() {
  return (
    <View
      className="w-full border-t-[2px] border-neutral-faded "
      justify="end"
      paddingInline={20}
    >
      <View
        direction="row"
        align="center"
        gap={1}
        paddingTop={4}
        width="900px"
        maxWidth="100%"
      >
        <Icon svg={<ExternalLink />} size={8} />
        <Link color="inherit" variant="plain" href="https://www.instagram.com/">
          Create your Business Plan with Compademy
        </Link>
        <Link icon={<ExternalLink />} />
      </View>
    </View>
  );
}
