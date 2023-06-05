"use client";
import CreateFile, { DocumentFile } from "@/components/File";

import { View, useToast, Button, Tabs } from "reshaped";

const page = () => {
  const toast = useToast();
  return (
    <View direction="row">
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <CreateFile />
      </View.Item>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <DocumentFile />
      </View.Item>
      <View.Item columns={{ xl: 2, l: 3, m: 4, s: 6 }}>
        <Button
          onClick={() =>
            toast.show({ text: "Account created", position: "bottom" })
          }
        >
          Create an account
        </Button>
      </View.Item>
    </View>
  );
};

export default page;
