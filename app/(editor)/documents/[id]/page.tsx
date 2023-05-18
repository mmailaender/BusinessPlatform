import FileNavigation from "@/components/FileNavigation";
import Plate from "@/components/Plate";
import { View } from "reshaped";

const page = () => {
  return (
    <View className="flex flex-row px-x6 pt-[64px]">
      <View className="sticky inset-y-x8 basis-2/12 print:hidden">
        <FileNavigation />
      </View>
      <View className="basis-1/12 print:hidden"></View>
      <View className="basis-6/12">
        <Plate />
      </View>
    </View>
  );
};

export default page;
