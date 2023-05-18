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
  TextField,
  TextFieldProps,
  View,
  Text,
  ViewProps,
  TextProps,
  Icon,
  IconProps,
  FormControl,
  useFormControl,
  FormControlProps,
  Divider,
  DropdownMenu,
  DropdownMenuProps,
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
              justify="center"
              gap={2}
              paddingInline={2}
              paddingBlock={2}
              className="w-fit transition ease-in-out duration-300 group-hover:bg-neutral-highlighted"
            >
              <Icon svg={<DocsIcon />} size={6} />
              <View>
                <CustomInput />
              </View>
            </View>
          </View>
        </View>
        <View className="flex basis-4/12 justify-end !gap-x-x3">
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
        </View>
      </View>
      {children}
    </View>
  );
}
