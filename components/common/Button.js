import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const FRButton = ({ onclick, iconName,title,children ,className }) =>{ 

return(
  <TouchableHighlight onPress={onclick} className=" bg-red-500 rounded-sm"  underlayColor="white">
    <View className={`gap-2 flex justify-center items-center flex-row p-[6px]  ${className}`}>
    {iconName && <Icon name={iconName} size={18} className="text-black" />}
    {title && <Text className="text-[16px] font-[500] text-white">{title}</Text>}
    {children && children}
    </View>
  </TouchableHighlight>

)}




export default FRButton;
