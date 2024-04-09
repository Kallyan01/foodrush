import * as Location from "expo-location";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import FloatingCart from "../components/FloatingCart";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userSliceZS } from "../zustand/slice/userSliceZS";
import { useDashboardStore } from "../zustand/store";

import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons
} from "@expo/vector-icons";


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {name} = userSliceZS(state=>state.user)


  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    });
    const lineOne = `${reverseGeocodedAddress[0].city}, ${reverseGeocodedAddress[0].postalCode}`
    setAddress(lineOne);

  };

  useLayoutEffect(() => {
    reverseGeocode()
  },[location])

  useLayoutEffect(() => {
   
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView className="relative  h-full" >
      <View className="bg-white pt-5 py-4">
        <View className="flex justify-between flex-row mx-4 items-center">
          <View className="flex flex-row  items-center space-x-2 ">
          <FontAwesome5 name="location-arrow" size={24} color="red" />
            <View>
              <Text className="font-bold text-gray-400 text-xs ">
                Deliver Now {name}
              </Text>
              <View className="flex flex-row items-center">
                <Text className=" font-bold text-s flex item-center">
                  {
                  address? address : "Loading..."
                  }
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
          <View className="flex flex-row flex-1 space-x-2 p-2 px-4 bg-gray-200 items-center overflow-hidden rounded-full">
           

            <EvilIcons name="search" size={20} color="black" style={{marginTop:-3,marginLeft:-3,marginRight:-3}}  />

            
            
            <TextInput
              placeholder="Resturants and Cuisins"
              keyboardType="default"
              className="w-11/12 text-xs px-2"
              
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
