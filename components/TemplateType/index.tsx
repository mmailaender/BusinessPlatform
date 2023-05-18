"use client";
import {
  Button,
  Container,
  View,
  Text,
  ViewProps,
  TextProps,
  Icon,
  IconProps,
  DropdownMenu,
  DropdownMenuProps,
} from "reshaped";

import CreateDocument from "@/components/Icons/CreateDocument";
import Template from "../Icons/Template";
import Document from "../Icons/Document";
import MoreIcon from "../Icons/MoreIcon";
import DocsIcon from "../Icons/DocsIcon";
import ShareIcon from "../Icons/ShareIcon";
import PrintIcon from "../Icons/PrintIcon";
import RenameIcon from "../Icons/RenameIcon";
import DuplicateIcon from "../Icons/DuplicateIcon";
import BinIcon from "../Icons/BinIcon";

export default function TemplateType() {
  return (
    <View
      width="100%"
      className="flex flex-row group bg-page items-center"
      gap={4}
    >
      <View
        aspectRatio={1 / 1}
        borderRadius="small"
        width={16}
        padding={3}
        className="bg-neutral-faded transition-all duration-300 group-hover:bg-neutral-highlighted"
      >
        <Template />
      </View>
      <Text
        variant="body-1"
        className="text-neutral transition-all duration-300 group-hover:text-primary"
      >
        Template Name
      </Text>
    </View>
  );
}

export function TemplatetypeScratch() {
  return (
    <View
      width="100%"
      className="flex flex-row group bg-page items-center"
      gap={4}
    >
      <View
        aspectRatio={1 / 1}
        borderRadius="small"
        width={16}
        padding={3}
        className="bg-neutral-faded transition-all duration-300 group-hover:bg-neutral-highlighted"
      >
        <Document />
      </View>
      <Text
        variant="body-1"
        className="text-neutral transition-all duration-300 group-hover:text-primary"
      >
        From Scratch
      </Text>
    </View>
  );
}
