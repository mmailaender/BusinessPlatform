"use client";
import CreateFile, { DocumentFile } from "@/components/File";
import TemplateType, { TemplatetypeScratch } from "@/components/TemplateType";

import {
  Button,
  View,
  Modal,
  ModalProps,
  Dismissible,
  DismissibleProps,
  useToggle,
  Text,
  TextProps,
} from "reshaped";

const page = () => {
  const { active, activate, deactivate } = useToggle(false);

  return (
    <>
      <View direction="row">
        <View.Item columns={3}>
          <CreateFile />
        </View.Item>
        <View.Item columns={3}>
          <DocumentFile />
        </View.Item>
      </View>
    </>
  );
};

export default page;
