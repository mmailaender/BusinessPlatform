import FileNavigation from "@/components/FileNavigation";
import Plate from "@/component/Plate";
import { View } from "reshaped";

const page = () => {
  return (
    <>
      <View
        direction='row'
        paddingInline={6}
        paddingTop={16}
        width='100%'
      >
        <View.Item columns={2}>
          <View>
            <FileNavigation />
          </View>
        </View.Item>
        <View.Item columns={1}></View.Item>
        <View.Item columns={6}>
          <View>
            <Plate />
          </View>
        </View.Item>
        <View.Item columns={3}></View.Item>
      </View>
    </>
  );
};

export default page;
