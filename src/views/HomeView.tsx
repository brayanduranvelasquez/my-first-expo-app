import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { View, Text, Image, ScrollView } from "react-native";

import DestinationCard from "../components/DestinationCard";
import MainIcon from "../components/MainIcon";
import Search from "../components/Search";

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView className="flex-1 container">
      <View className="flex flex-row justify-between align-middle mt-4 mx-5">
        <View>
          <Image
            resizeMode="contain"
            source={require("../assets/avatar.png")}
            className="w-12"
          />
        </View>

        <View className="flex align-middle justify-center">
          <Ionicons name="md-menu" size={26} color="black" />
        </View>
      </View>

      <View className="mx-5 mt-3 mb-1">
        <Text className="font-bold text-3xl">Places of interest</Text>
      </View>

      <View className="mx-5 my-4">
        <Search />
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex align-middle justify-start flex-row mx-5 my-1">
            <MainIcon
              title="Beaches"
              background="bg-red-300/75"
              border="border-red-200"
              icon={
                <FontAwesome5 name="umbrella-beach" size={24} color="white" />
              }
            />

            <MainIcon
              title="Cities"
              background="bg-blue-300/75"
              border="border-blue-200"
              icon={<FontAwesome5 name="city" size={24} color="white" />}
            />

            <MainIcon
              title="Healthy"
              background="bg-yellow-300/75"
              border="border-yellow-200"
              icon={<FontAwesome5 name="heart" size={24} color="white" />}
            />

            <MainIcon
              title="Therapy"
              background="bg-cyan-300/75"
              border="border-cyan-200"
              icon={<AntDesign name="message1" size={24} color="white" />}
            />
            <MainIcon
              title="Relaxing"
              background="bg-green-300/75"
              border="border-green-200"
              icon={<Ionicons name="happy" size={24} color="white" />}
            />
          </View>
        </ScrollView>
      </View>

      <View className="flex flex-row justify-between align-middle my-4 mx-5">
        <View>
          <Text className="font-bold text-2xl">Top destinations</Text>
        </View>

        <View className="flex align-middle justify-center">
          <Ionicons name="options-outline" size={26} color="black" />
        </View>
      </View>

      <View className="flex flex-row justify-center my-2 mx-5">
        <DestinationCard
          title="Beautiful Forest"
          subtitle="127km away"
          image={require("../assets/destinations/2.jpg")}
          rating={"4.2"}
          onPress={() => navigation.push("Destination")}
        />

        <DestinationCard
          title="Endless Howr"
          subtitle="400km away"
          image={require("../assets/destinations/1.jpg")}
          rating={"5.0"}
        />
      </View>

      <View className="flex flex-row justify-center my-2 mx-5 mb-8">
        <DestinationCard
          title="Endless Howr"
          subtitle="400km away"
          image={require("../assets/destinations/3.jpg")}
          rating={"5.0"}
        />

        <DestinationCard
          title="Endless Howr"
          subtitle="400km away"
          image={require("../assets/destinations/4.jpg")}
          rating={"5.0"}
        />
      </View>
    </ScrollView>
  );
}
