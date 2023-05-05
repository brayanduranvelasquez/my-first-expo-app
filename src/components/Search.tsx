import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="flex flex-row align-middle py-3 px-4 rounded-3xl bg-gray-200">
      <Ionicons name="search" size={24} color="gray" />
      <TextInput
        placeholder="Search for a destination..."
        className="mx-2 w-full"
      />
    </View>
  );
}
