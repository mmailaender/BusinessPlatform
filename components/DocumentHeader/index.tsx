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
} from "reshaped";
import ArrowLeft from "../Icons/ArrowLeft";
import DocsIcon from "../Icons/DocsIcon";

export default function CreateFile() {
  const CustomInput = () => {
    const { attributes } = useFormControl();

    return (
      <input
        {...attributes}
        type="text"
        defaultValue="New Business Plan"
        className="text-base font-bold truncate w-full"
      />
    );
  };

  return (
    <View direction="row" width="100%" padding={6}>
      <View.Item columns={4}>
        <View justify="start" align="start">
          <Button rounded size="small" icon={<ArrowLeft />}></Button>
        </View>
      </View.Item>
      <View.Item columns={4}>
        <View className="group" width="100%" align="center">
          <View
            direction="row"
            gap={2}
            align="center"
            justify="center"
            paddingInline={2}
            paddingBlock={2}
            className=" group-hover:bg-neutral-highlighted"
          >
            <Icon svg={<DocsIcon />} size={6} />
            <View width="100%">
              <CustomInput />
            </View>
          </View>
        </View>
      </View.Item>
    </View>
  );
}
