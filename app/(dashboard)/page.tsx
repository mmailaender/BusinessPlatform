"use client";
import CreateFile, { DocumentFile } from "@/components/File";

import { View } from "reshaped";

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
