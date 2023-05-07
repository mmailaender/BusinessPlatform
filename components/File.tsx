import { View, ViewProps, Text, TextProps } from "reshaped/bundle";
import "reshaped/themes/reshaped/theme.css";

const File = () => {
  return (
    <View>
      {/* File Icon */}
      <View
        backgroundColor="primary"
        borderColor="neutral-faded"
        aspectRatio={1 / 1}
        borderRadius="medium"
      ></View>
    </View>
  );
};

export default File;
