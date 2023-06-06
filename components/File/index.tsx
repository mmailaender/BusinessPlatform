"use client";
import {
  Button,
  View,
  Text,
  DropdownMenu,
  useToggle,
  Modal,
  Dismissible,
  Actionable,
  Card,
} from "reshaped";
import React, { useState } from "react";

import CreateDocument from "@/components/Icons/CreateDocument";
import Template from "../Icons/Template";
import Document from "../Icons/Document";
import MoreIcon from "../Icons/MoreIcon";
import ShareIcon from "../Icons/ShareIcon";
import PrintIcon from "../Icons/PrintIcon";
import RenameIcon from "../Icons/RenameIcon";
import DuplicateIcon from "../Icons/DuplicateIcon";
import BinIcon from "../Icons/BinIcon";
import TemplateType, { TemplatetypeScratch } from "../TemplateType";
import { useQuery } from "fqlx-client";
import {
  Block,
  Query,
  Template as TypeTemplate,
} from "@/fqlx-generated/typedefs";
import { useRouter } from "next/navigation";

export default function CreateFile() {
  const { active, activate, deactivate } = useToggle(false);

  return (
    <>
      <View
        width="100%"
        padding={6}
        className="group cursor-pointer"
        attributes={{ onClick: activate }}
      >
        {/* File component */}
        <View gap={4}>
          <View
            borderColor="neutral-faded"
            aspectRatio={1 / 1}
            borderRadius="small"
            className="border-dashed transition ease-in-out duration-300 group-hover:bg-neutral-highlighted"
            justify="center"
            align="center"
            padding={{ xl: 12, l: 14, m: 10, s: 10 }}
          >
            <CreateDocument />
          </View>
          {/* Label */}
          <View align="center" paddingBottom={6}>
            <Text
              variant="body-2"
              weight="medium"
              align="center"
              color="primary"
              className="group-hover:opacity-90"
            >
              Create New Document
            </Text>
          </View>
        </View>
      </View>

      <Modal active={active} onClose={deactivate} padding={5}>
        <View gap={3}>
          <Dismissible onClose={deactivate} closeAriaLabel="Close">
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
    </>
  );
}

type TemplateFileProp = {
  template: TypeTemplate;
};

export function TemplateFile({ template }: TemplateFileProp) {
  const query = useQuery<Query>();
  const router = useRouter();

  const handleTemplateDelete = async (id: string) => {
    const res = await query.Template.byId(id).delete().exec();
    console.log("response", res);
    localStorage.removeItem("fauna-react");
  };

  const handleCreateDuplicate = async () => {
    const blocksPromises: Promise<Block>[] = [];

    template.blocks.forEach((m) => {
      blocksPromises.push(query.Block.byId(m as unknown as string).exec());
    });

    const resolvedBlocks = (await Promise.all(blocksPromises)) as Block[];

    let blocks: string[] = [];

    for (const resolvedBlock of resolvedBlocks) {
      if (
        resolvedBlock.category === "Section" ||
        resolvedBlock.category === "SubSection"
      ) {
        const res = await query.Block.create({
          content: resolvedBlock.content,
        } as Block).exec();

        blocks.push(res.id);
      } else {
        blocks.push(resolvedBlock.id);
      }
    }

    if (blocks.length > 0) {
      const res = await query.Template.create({
        name: `${template.name} (Copy)`,
        blocks: blocks as unknown as Block[],
      }).exec();
      console.log("response", res);
    }
  };

  const handleTemplateSelect = () => {
    router.push(`/templates/${template.id}`);
  };

  return (
    <View width="100%" padding={6} className="group">
      {/* File component */}
      <View gap={4}>
        <View
          backgroundColor="neutral-faded"
          aspectRatio={1 / 1}
          borderRadius="small"
          justify="center"
          align="center"
          position="relative"
          padding={{ xl: 12, l: 14, m: 10, s: 10 }}
          className="transition ease-in-out duration-300 group-hover:bg-neutral-highlighted "
        >
          <View
            position="absolute"
            insetTop={2}
            insetEnd={2}
            className="transition ease-in-out duration-300 opacity-0 group-hover:opacity-100"
          >
            <DropdownMenu position="bottom-end">
              <DropdownMenu.Trigger>
                {(attributes) => (
                  <Button
                    rounded={true}
                    elevated={true}
                    icon={<MoreIcon />}
                    color="white"
                    attributes={attributes}
                  ></Button>
                )}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Section>
                  <DropdownMenu.Item startSlot={<PrintIcon />}>
                    Print
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
                <DropdownMenu.Section>
                  <DropdownMenu.Item
                    onClick={handleCreateDuplicate}
                    startSlot={<DuplicateIcon />}
                  >
                    Duplicate
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onClick={() => handleTemplateDelete(template.id)}
                    startSlot={<BinIcon />}
                  >
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
          <View
            className="w-full"
            aspectRatio={1 / 1}
            onClick={handleTemplateSelect}
          >
            <Template />
          </View>
        </View>
        {/* Label */}
        <View align="center" paddingBottom={6} gap={1}>
          <Text
            variant="body-2"
            weight="medium"
            align="center"
            className="group-hover:text-neutral-faded"
          >
            {template.name}
          </Text>
          <Text variant="caption-1" align="center" color="neutral-faded">
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}

export function DocumentFile() {
  return (
    <View width="100%" padding={6} className="group">
      {/* File component */}
      <View gap={4}>
        <View
          backgroundColor="neutral-faded"
          aspectRatio={1 / 1}
          borderRadius="small"
          justify="center"
          align="center"
          position="relative"
          padding={{ xl: 12, l: 14, m: 10, s: 10 }}
          className="transition ease-in-out duration-300 group-hover:bg-neutral-highlighted "
        >
          <View
            position="absolute"
            insetTop={2}
            insetEnd={2}
            className="transition ease-in-out duration-300 opacity-0 group-hover:opacity-100"
          >
            <DropdownMenu position="bottom-end">
              <DropdownMenu.Trigger>
                {(attributes) => (
                  <Button
                    rounded={true}
                    elevated={true}
                    icon={<MoreIcon />}
                    color="white"
                    attributes={attributes}
                  ></Button>
                )}
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Section>
                  <DropdownMenu.Item startSlot={<PrintIcon />}>
                    Print
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
                <DropdownMenu.Section>
                  <DropdownMenu.Item startSlot={<DuplicateIcon />}>
                    Duplicate
                  </DropdownMenu.Item>
                  <DropdownMenu.Item startSlot={<BinIcon />}>
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Section>
              </DropdownMenu.Content>
            </DropdownMenu>
          </View>
          <Document />
        </View>
        {/* Label */}
        <View align="center" paddingBottom={6} gap={1}>
          <Text
            variant="body-2"
            weight="medium"
            align="center"
            className="group-hover:text-neutral-faded"
          >
            Financial Business Plan
          </Text>
          <Text variant="caption-1" align="center" color="neutral-faded">
            Today
          </Text>
        </View>
      </View>
    </View>
  );
}

export function CreateTemplate() {
  const query = useQuery<Query>();
  const router = useRouter();

  const createTemplate = async () => {
    const res = await query.Template.create({
      name: "Untitled",
      blocks: [],
    }).exec();

    if (res?.id) {
      router.push(`/templates/${res.id}`);
    }
  };

  return (
    <>
      <View width="100%" padding={6} className="group cursor-pointer">
        {/* File component */}
        <Actionable onClick={createTemplate}>
          <View gap={4}>
            <View
              borderColor="neutral-faded"
              aspectRatio={1 / 1}
              borderRadius="small"
              className="border-dashed transition ease-in-out duration-300 group-hover:bg-neutral-highlighted"
              justify="center"
              align="center"
              padding={{ xl: 12, l: 14, m: 10, s: 10 }}
            >
              <CreateDocument />
            </View>
            {/* Label */}
            <View align="center" paddingBottom={6}>
              <Text
                variant="body-2"
                weight="medium"
                align="center"
                color="primary"
                className="group-hover:opacity-90"
              >
                Create New Template
              </Text>
            </View>
          </View>
        </Actionable>
      </View>
    </>
  );
}
