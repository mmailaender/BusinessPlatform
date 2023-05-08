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
import { TemplateFile } from "@/components/File/index";

export default function Home() {
  return (
    <View width="100%" direction="row" gap={1} paddingTop={4}>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <TemplateFile />
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={{ xl: 3, l: 3, m: 4, s: 6 }}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
    </View>
  );
}
