import { View, Text, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DestinationView() {
  return (
    <ScrollView className="container p-5">
      <View className="flex flex-row w-full">
        <View className="flex-1 w-full h-[350px] rounded-[30px] overflow-hidden">
          <Image
            resizeMode="cover"
            source={require("../assets/destinations/2.jpg")}
            className="w-full h-full"
          />
        </View>
      </View>

      <View className="my-3 mt-4">
        <Text className="text-3xl font-bold">Beautiful Forest</Text>
      </View>

      <View className="flex flex-row">
        <View className="flex-1 flex-row items-center justify-center bg-gray-200 w-full m-1 p-3 rounded-full">
          <Ionicons
            className="bg-color-red"
            name="location"
            size={21}
            color="#9ca3af"
          />
          <Text className="text-gray-500 ml-1">Germany</Text>
        </View>

        <View className="flex-1  flex-row items-center justify-center bg-gray-200 w-full m-1 p-3 rounded-full">
          <Ionicons
            className="bg-color-red"
            name="map"
            size={21}
            color="#9ca3af"
          />
          <Text className="text-gray-500 ml-1">127km away</Text>
        </View>
      </View>

      <View className="mt-3 mb-9">
        <View>
          <Text className="font-bold text-xl">Description</Text>
        </View>

        <View className="mt-3">
          <Text className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil
            est accusantium aut voluptatibus voluptatem excepturi quia, saepe
            blanditiis praesentium voluptate in repudiandae et mollitia
            cupiditate, quae ratione. Quisquam, repellendus?
          </Text>
        </View>

        <View className="mt-3">
          <Text className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil
            est accusantium aut voluptatibus voluptatem excepturi quia, saepe
            blanditiis praesentium voluptate in repudiandae et mollitia
            cupiditate, quae ratione. Quisquam, repellendus?
          </Text>
        </View>

        <View className="mt-3">
          <Text className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil
            est accusantium aut voluptatibus voluptatem excepturi quia, saepe
            blanditiis praesentium voluptate in repudiandae et mollitia
            cupiditate, quae ratione. Quisquam, repellendus?
          </Text>
        </View>

        <View className="mt-3">
          <Text className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil
            est accusantium aut voluptatibus voluptatem excepturi quia, saepe
            blanditiis praesentium voluptate in repudiandae et mollitia
            cupiditate, quae ratione. Quisquam, repellendus?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
