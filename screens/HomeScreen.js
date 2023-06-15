import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import FeaturedRow from "../components/FeaturedRow";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="bg-white pt-5 py-4">
        <View className="flex justify-between flex-row mx-4 items-center">
          <View className="flex flex-row  items-center space-x-2 ">
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              }}
              className="h-7 w-7 rounded-full"
            />
            <View>
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now
              </Text>
              <View className="flex flex-row items-center">
                <Text className=" font-bold text-s flex item-center">
                  Current Location
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
          <View>
            <FontAwesome5 name="user-alt" size={20} color="gray" />
          </View>
        </View>
        {/* search */}
        <View className="flex flex-row  items-center space-x-2 mt-3 px-4 relative">
          <View className="flex flex-row flex-1 space-x-2 p-2 bg-gray-200 items-center overflow-hidden">
            <Ionicons name="ios-search-outline" size={20} color="black" />
            <TextInput
              placeholder="Resturants and Cuisins"
              keyboardType="default"
              className="w-11/12"
            />
          </View>
          <MaterialCommunityIcons
            name="filter-plus-outline"
            size={20}
            color="black"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 150,
      }}
      >
        <View className="bg-gray-100">
          <Categories />
        </View>

        {/* Top Offers */}
        <View className="bg-gray-100 my-5">
          <FeaturedRow
            title="Offers near you !"
            description="asdasd asdad asdasd"
          />
        </View>
        {/* Featured */}
        <View className="bg-gray-100 my-5">
          <FeaturedRow title="Featured " description="asdasd asdad asdasd" />
        </View>
        {/* Top Places */}
        <View className="bg-gray-100 my-5">
          <FeaturedRow title="Top Places" description="asdasd asdad asdasd" />
        </View>

        {/* City list */}
        <View className="bg-gray-100">
          <Categories heading="Top Cities" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
