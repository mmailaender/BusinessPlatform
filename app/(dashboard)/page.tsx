"use client";
import CreateFile, { DocumentFile } from "@/components/File";

import { View } from "reshaped";

const page = () => {
  return (
    <View direction="row">
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <DocumentFile />
      </View.Item>
    </View>
  );
};

export default page;
