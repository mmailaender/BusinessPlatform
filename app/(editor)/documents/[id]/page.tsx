import FileNavigation from "@/components/FileNavigation";
import Plate from "@/components/Plate";
import { View } from "reshaped";
import PrintCover from "./PrintCover";
import ContentTemplate from "./PrintTableOfContent";

const page = () => {
  return (
    <>
      <View className="hidden print:block">
        <PrintCover />
      </View>
      <View className="hidden print:block">
        <ContentTemplate />
      </View>
      <View className="flex flex-row px-x6 pt-x32">
        <View className="basis-2/12 print:hidden">
          <View position="sticky" insetTop={20}>
            <FileNavigation />
          </View>
        </View>
        <View className="basis-1/12 print:hidden"></View>
        <View className="basis-6/12 print:basis-full min-w-0">
          <Plate />
        </View>
      </View>
    </>
  );
};

export default page;
