import FileNavigation from "@/components/FileNavigation";
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

const page = () => {
  return (
    <>
      <View paddingInline={6} paddingTop={16} width="100%">
        <View.Item columns={2}>
          <View>
            <FileNavigation />
          </View>
        </View.Item>
      </View>
    </>
  );
};

export default page;
