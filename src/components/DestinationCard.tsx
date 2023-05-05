import { ImageSourcePropType } from "react-native/Libraries/Image/Image";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TProps = {
  rating: number | string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  onPress?: any;
};

export default function DestinationCard({
  rating,
  title,
  subtitle,
  image,
  onPress,
}: TProps) {
  return (
    <TouchableOpacity className="w-full flex-1 h-[210px]" onPress={onPress}>
      <View className="flex-1 m-1">
        <View className="w-full overflow-hidden h-[150px] rounded-[40px] object-fit">
          <Image resizeMode="cover" className="w-full h-full" source={image} />

          <View className="flex flex-row align-middle justify-center absolute right-4 top-3">
            <Text className="font-weight font-bold text-[17px] mr-[2px]">
              {rating}
            </Text>

            <Ionicons
              className="bg-color-red"
              name="star"
              size={21}
              color="#ded435"
            />
          </View>
        </View>

        <View className="mt-2">
          <Text className="font-bold text-lg">{title}</Text>
        </View>

        <View className="flex flex-row items-center">
          <Ionicons
            className="bg-color-red"
            name="location"
            size={21}
            color="#d1d5db"
          />

          <View>
            <Text className="font-bold text-lg text-gray-300">{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
