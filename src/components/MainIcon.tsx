import { View, Text } from "react-native";

type TProps = {
  icon: JSX.Element;
  background: string;
  border: string;
  title: string;
};

export default function MainIcon({ icon, background, border, title }: TProps) {
  return (
    <View className="mx-2">
      <View className={`${background} ${border} p-3 rounded-full border-4`}>
        {icon}
      </View>

      <View className="mt-2">
        <Text className="text-gray-400 text-center"> {title}</Text>
      </View>
    </View>
  );
}
