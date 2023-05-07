"use client";
import { Button, Container, View, Text } from "reshaped";
import File from "@/components/File";

export default function Home() {
  return (
    <View width="100%" direction="row" gap={1}>
      <View.Item columns={3}>
        <View width="100%" padding={6}>
          <File />
        </View>
      </View.Item>
      <View.Item columns={3}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={3}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={3}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
    </View>
  );
}
