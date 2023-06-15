import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FeaturedCard from "./FeaturedCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <>
      <View className="flex flex-row justify-between w-full px-4">
        <Text className="text-xl font-bold">{title}</Text>
        <AntDesign name="arrowright" size={24} color="gray" />
      </View>
      <Text className="px-4 text-gray-500 text-xs">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Arsalan" imgUrl="https://b.zmtcdn.com/data/pictures/3/18947213/5644c2bc05d67b1419c8ab0b0263a054_o2_featured_v2.jpg?output-format=webp" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>
      <FeaturedCard title="Bawarchi" imgUrl="https://m.economictimes.com/thumb/msid-93017808,width-1200,height-900,resizemode-4,imgsize-94014/restaurant.jpg" rating="4.5" genre="Indian" description="A nice Indian place" dishes={["tikkamasala","Beriyani"]} address="BRP Stn Rd"/>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default FeaturedRow;
