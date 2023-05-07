import { Button, Container, View, Text } from "reshaped";

export default function Home() {
  return (
    <View width="100%" direction="row" gap={2}>
      <View.Item columns={4}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={4}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={4}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
      <View.Item columns={4}>
        <View height={40} width="100%" backgroundColor="primary"></View>
      </View.Item>
    </View>
  );
}
