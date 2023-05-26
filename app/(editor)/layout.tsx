"use client";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import BinIcon from "@/components/Icons/BinIcon";
import DocsIcon from "@/components/Icons/DocsIcon";
import DuplicateIcon from "@/components/Icons/DuplicateIcon";
import MoreIcon from "@/components/Icons/MoreIcon";
import PrintIcon from "@/components/Icons/PrintIcon";
import RenameIcon from "@/components/Icons/RenameIcon";
import ShareIcon from "@/components/Icons/ShareIcon";
import {
  Button,
  View,
  ViewProps,
  Icon,
  useFormControl,
  DropdownMenu,
  TextField,
  TextFieldProps,
} from "reshaped";

export default function CreateFile({
  children,
}: {
  children: React.ReactNode;
}) {
  const CustomInput = () => {
    const { attributes } = useFormControl();

    return (
      <input
        {...attributes}
        type="text"
        defaultValue="New Business Plan"
        className="text-base font-bold truncate bg-none w-fit"
      />
    );
  };

  return (
    <View className="relative">
      <View
        position="fixed"
        insetTop={0}
        zIndex={1}
        className=" flex flex-row py-x4 px-x4 w-full border-b-[1px] border-neutral-faded bg-page print:hidden"
      >
        <View className="flex basis-4/12 ">
          <Button rounded size="medium" icon={<ArrowLeft />}></Button>
        </View>
        <View className="flex basis-4/12 justify-center w-x2">
          {" "}
          <View className="group">
            <View
              direction="row"
              borderRadius="small"
              align="center"
              justify="center"
              className="group-hover:bg-neutral-highlighted transition-all ease-in-out duration-200"
            >
              <TextField
                icon={<DocsIcon />}
                name="name"
                defaultValue="New Document"
                variant="headless"
              />
            </View>
          </View>
        </View>
        <div className="flex basis-4/12 justify-end gap-x-x3">
          <Button
            onClick={() => {
              window.print();
            }}
            rounded
            size="medium"
            icon={<PrintIcon />}
          >
            Print
          </Button>
          <Button rounded size="medium" icon={<ShareIcon />}>
            Share
          </Button>
          <DropdownMenu position="bottom-end">
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button
                  rounded
                  size="medium"
                  variant="ghost"
                  icon={<MoreIcon />}
                  attributes={attributes}
                ></Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Section>
                <DropdownMenu.Item startSlot={<RenameIcon />}>
                  Rename
                </DropdownMenu.Item>
                <DropdownMenu.Item startSlot={<DuplicateIcon />}>
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Item startSlot={<BinIcon />}>
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Section>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </View>
      {children}
    </View>
  );
}
