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
import FileNavigation from "@/components/FileNavigation";

export default function Home() {
  return (
    <View
      width="100%"
      direction="row"
      gap={1}
      paddingTop={4}
      position="relative"
    >
      <DocumentHeader />
      {/* File page section */}
      <View width="100%" paddingInline={6} paddingTop={16}>
        <View.Item columns={2}>
          <FileNavigation />
        </View.Item>
      </View>

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
