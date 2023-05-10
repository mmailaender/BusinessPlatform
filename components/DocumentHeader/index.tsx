"use client";
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
import ArrowLeft from "../Icons/ArrowLeft";
import DocsIcon from "../Icons/DocsIcon";
import MoreIcon from "../Icons/MoreIcon";
import PrintIcon from "../Icons/PrintIcon";
import ShareIcon from "../Icons/ShareIcon";
import DuplicateIcon from "../Icons/DuplicateIcon";
import BinIcon from "../Icons/BinIcon";
import RenameIcon from "../Icons/RenameIcon";

export default function CreateFile() {
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
    <View width="100%">
      <View direction="row" paddingInline={6} paddingBlock={4}>
        {/* Back Button */}
        <View.Item columns={4}>
          <View justify="start" align="start">
            <Button rounded size="medium" icon={<ArrowLeft />}></Button>
          </View>
        </View.Item>

        {/* File name & Type */}
        <View.Item columns={4}>
          <View align="center">
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
        </View.Item>
        <View.Item columns={4}>
          <View justify="end" align="center" gap={3} direction="row">
            <Button rounded size="medium" icon={<PrintIcon />}>
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
        </View.Item>
      </View>
      <Divider />
    </View>
  );
}
