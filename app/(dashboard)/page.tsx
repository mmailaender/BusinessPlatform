"use client";
import CreateFile, { DocumentFile } from "@/components/File";
import TemplateTypeScratch, {
  TemplatetypeScratch,
} from "@/components/TemplateType";
import TemplateFromScratch, {
  TemplateTypeTest,
} from "@/components/TemplateType";
import TemplateType from "@/components/TemplateType";
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
        <Button onClick={activate}>Edit profile</Button>
        <Modal active={active} onClose={deactivate} padding={5}>
          <View gap={3}>
            <Dismissible onClose={deactivate}>
              <Modal.Title>
                <Text variant="body-1" weight="bold">
                  Create Business Plan based on:
                </Text>
              </Modal.Title>
            </Dismissible>

            <View gap={3} paddingTop={6} className="overflow-y-auto h-[300px]">
              <TemplatetypeScratch />
              <TemplateType />
              <TemplateType />
              <TemplateType />
              <TemplateType />
              <TemplateType />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default page;
