import FRButton from "./common/Button";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { set } from "react-hook-form";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { useDashboardStore } from "../zustand/store";

const initialOffset = 200;
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  FadeOutDown,
  BounceInDown
} from 'react-native-reanimated';
const FloatingCart = () => {
  const offset = useSharedValue(initialOffset);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));
  const {item,name,cart} = useDashboardStore(state => state.user);
  useLayoutEffect(()=>{

    offset.value = withSpring(-offset.value)
  },[])

  return cart.length? (
   <Animated.View entering={BounceInDown} exiting={FadeOutDown} className="p-5 absolute bottom-0 left-0 w-full bg-none">

      <View
        className=" bg-white rounded-2xl p-4 shadow-md w-full flex flex-row items-center justify-between"
        style={styles.innerContainer}
      >
        <View className="absolute bottom-[48px] left-[50%] transform -translate-x-1/2 bg-white rounded-full p-1">
        <Entypo name="chevron-up" size={24} color="red" style={{marginTop:-7,marginLeft:-3,marginRight:-3}} />
        
        </View>
        <View className="flex flex-row">

        <Ionicons name="bag-handle" size={24} color="orange" style={{marginTop:-3,marginLeft:-3,marginRight:-3}} />
        <Text className="font-bold text-sm mx-2">Qty : {cart.length} </Text>
        </View>
        {/* Add your content inside the floating container */}
        <View className="w-auto">
          <FRButton title="Buy" className="bg-blue-500 w-[100px]"/>
        </View>
      </View>
        </Animated.View>
  ): null
};

const styles = {
 
  innerContainer: {
    elevation: 5, // Add elevation for shadow (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.3, // Shadow opacity (iOS)
    shadowRadius: 4, // Shadow radius (iOS)
    
  },
};
  
export default FloatingCart;
  