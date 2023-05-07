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
import File from "@/components/File/index";
import CreateDocument from "@/components/Icons/CreateDocument";

export default function Home() {
  return (
    <View width="100%" direction="row" gap={1}>
      <View.Item columns={3}>
        <View width="100%" padding={6}>
          {/* File component */}
          <View gap={3}>
            <View
              borderColor="neutral-faded"
              aspectRatio={1 / 1}
              borderRadius="small"
              className="border-dashed"
              width="100%"
              maxWidth="400px"
              justify="center"
              align="center"
              height="100%"
            >
              <Icon svg={<CreateDocument />} size={40} />
            </View>
            {/* Label */}
            <View align="center" paddingBottom={6}>
              <Text
                variant="body-2"
                weight="bold"
                align="center"
                color="primary"
              >
                Create New Document
              </Text>
            </View>
          </View>
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
