"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { View } from "reshaped";
import dynamic from "next/dynamic";
import { debounce } from "radash";
import { useQuery } from "fqlx-client";
import {
  getPointFromLocation,
  focusEditor,
  isEditorFocused,
} from "@udecode/plate";
import { MyValue } from "@/components/Plate/interfaces/plateTypes";
import { editorRef } from "@/components/Plate/HeadingToolbar";
import { Block, DocumentInput, Query } from "@/fqlx-generated/typedefs";
import PrintCover from "../../PrintCover";
import ContentTemplate from "../../PrintTableOfContent";
import Watermark from "../../Watermark";
import { getDocumentSections } from "./utils/getSections";
import { documentsBlocks } from "./utils/getMappedBlocksDocument";

const Plate = dynamic(() => import("@/components/Plate"), { ssr: false });
const FileNavigation = dynamic(() => import("@/app/(editor)/FileNavigation"), {
  ssr: false,
});

interface PageProps {
  params: {
    id: string;
  };
}

const DocumentPage = ({ params }: PageProps) => {
  const [document, setDocument] = useState<MyValue>([]);
  const [blocksId, setBlocksId] = useState<Block[]>([]);

  const query = useQuery<Query>();
  const DocumentId = params.id;

  const sections = useMemo(() => {
    return getDocumentSections(document);
  }, [document]);

  const addDocumentBlocksToFqlx = debounce(
    { delay: 2000 },
    useCallback(
      async (value: MyValue) => {
        const mappedBlocks = documentsBlocks(value);

        let blocksIdClone = [...blocksId];

        const blockPromises: Promise<Block>[] = [];

        mappedBlocks.forEach((singleBlock: any) => {
          const block = Object.values(singleBlock)[0] as unknown as {
            [key: string]: any;
          };

          const blockId: string = blocksIdClone.find(
            (bId) => bId == block?.content?.[0]?.id
          ) as unknown as string;

          if (blockId) {
            const res = query.Block.byId(blockId)
              .update({
                content: JSON.stringify(block.content),
              } as Block)
              .exec();

            blockPromises.push(res);
          } else {
            const res = query.Block.create({
              ...block,
              content: JSON.stringify(block.content),
            } as Block).exec();

            blockPromises.push(res);
          }

          blocksIdClone = blocksIdClone.filter(
            (bId) => bId !== block?.content?.[0]?.id
          );
        });

        const resolvedBlocks = await Promise.all(blockPromises);
        const documentArray: any[] = [];

        const resolvedBlocksId = resolvedBlocks.map((block) => {
          const blockData = JSON.parse(block.content as string);

          documentArray.push(
            { ...blockData[0], id: block.id },
            ...blockData.slice(1)
          );

          return block.id;
        });

        setDocument(documentArray);
        setBlocksId(resolvedBlocksId as unknown as Block[]);
        const focus = isEditorFocused(editorRef);

        try {
          if (JSON.stringify(documentArray) !== JSON.stringify(document)) {
            const pos = getPointFromLocation(editorRef);
            await query.Document.byId(DocumentId)
              .update({
                blocks: resolvedBlocksId as unknown as Block[],
              } as DocumentInput)
              .exec();

            if (focus) focusEditor(editorRef, pos);
          }
        } catch (e) {
          console.log({ e });
        }
      },
      [blocksId, editorRef]
    )
  );

  const handleDocumentChange = useCallback(
    (value: MyValue) => {
      addDocumentBlocksToFqlx(value);
    },
    [document]
  );

  const fetchDocument = async () => {
    const DocumentRes = await query.Document.byId(DocumentId).exec();
    const document: any[] = [];

    const blocksPromises: Promise<Block>[] = [];
    if (DocumentRes.blocks) {
      DocumentRes.blocks.forEach((m) => {
        return blocksPromises.push(
          query.Block.byId(m as unknown as string).exec()
        );
      });

      const resolvedBlocks = await Promise.all(blocksPromises);

      resolvedBlocks.forEach((block) => {
        const blockData = JSON.parse(block.content as string);
        document.push({ ...blockData[0], id: block.id }, ...blockData.slice(1));
      });

      setDocument(document);
      setBlocksId(DocumentRes.blocks);
    }
  };

  useEffect(() => {
    fetchDocument();
  }, []);

  return (
    <>
      <View className="hidden print:block">
        <PrintCover />
      </View>
      <div className="hidden print:block fixed bottom-0 right-0 z-10">
        <Watermark />
      </div>
      <View className="hidden print:block">
        <ContentTemplate sections={sections} />
      </View>
      <View className="flex flex-row px-x6 pt-x16">
        <View className="basis-2/12 print:hidden  min-w-0">
          <View position="sticky" insetTop={20}>
            <FileNavigation sections={sections} />
          </View>
        </View>
        <View className="basis-1/12 print:hidden"></View>
        <View className="basis-6/12 print:basis-full print:px-x12 min-w-0">
          <Plate value={document} onChange={handleDocumentChange} />
        </View>
      </View>
    </>
  );
};

export default DocumentPage;
