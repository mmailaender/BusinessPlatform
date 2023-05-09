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
} from "reshaped";
import ArrowLeft from "../Icons/ArrowLeft";
import DocsIcon from "../Icons/DocsIcon";
import MoreIcon from "../Icons/MoreIcon";
import PrintIcon from "../Icons/PrintIcon";
import ShareIcon from "../Icons/ShareIcon";

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
      <View direction="row" padding={6}>
        {/* Back Button */}
        <View.Item columns={4}>
          <View justify="start" align="start">
            <Button rounded size="medium" icon={<ArrowLeft />}></Button>
          </View>
        </View.Item>

        {/* File name & Type */}
        <View.Item columns={4}>
          <View className="group" width="100%" align="center">
            <View
              direction="row"
              borderRadius="small"
              gap={2}
              paddingInline={2}
              paddingBlock={2}
              className="transition ease-in-out duration-300 group-hover:bg-neutral-highlighted"
            >
              <Icon svg={<DocsIcon />} size={6} />
              <View>
                <CustomInput />
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
            <Button
              rounded
              size="medium"
              variant="ghost"
              icon={<MoreIcon />}
            ></Button>
          </View>
        </View.Item>
      </View>
      <Divider />
    </View>
  );
}
