import CreateFile, { DocumentFile } from "@/components/File";
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
    <View direction="row">
      <View.Item columns={3}>
        <CreateFile />
      </View.Item>
      <View.Item columns={3}>
        <DocumentFile />
      </View.Item>
    </View>
  );
};

export default page;
