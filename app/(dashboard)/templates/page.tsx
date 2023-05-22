"use client";
import CreateFile, {
  CreateTemplate,
  DocumentFile,
  TemplateFile,
} from "@/components/File";

import { View } from "reshaped";

const page = () => {
  return (
    <View direction="row">
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateTemplate />
      </View.Item>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <TemplateFile />
      </View.Item>
    </View>
  );
};

export default page;
