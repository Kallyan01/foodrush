import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
const FeaturedCard = ({
  title,
  imgUrl,
  rating,
  genre,
  description,
  dishes,
  address,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={()=>console.log("clicked")}>
    <View className="bg-white pb-4 rounded-xl overflow-hidden mr-3" >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-44 w-56"
        
      />
      <View className="px-2">
        <View>
          <Text className="text-xl font-semibold text-gray-600 ">{title}</Text>
          <View className="flex items-center flex-row space-x-1">
            <AntDesign name="star" size={15} color="#FFBF00" />
            <Text className="text-xs text-gray-500">
              {rating} . {genre}
            </Text>
          </View>
        </View>

        <View className="flex items-center flex-row space-x-1">
          <EvilIcons name="location" size={15} color="black" />
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default FeaturedCard;
