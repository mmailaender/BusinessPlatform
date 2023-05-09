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
} from "reshaped";
import CreateFile from "@/components/File/index";
import DocumentHeader from "@/components/DocumentHeader/index";
import { TemplateFile, DocumentFile } from "@/components/File/index";

export default function Home() {
  return (
    <View width="100%" direction="row" gap={1} paddingTop={4}>
      <DocumentHeader />
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <TemplateFile />
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <DocumentFile />
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <TemplateFile />
      </View.Item>
    </View>
  );
}
