import Background from "../components/Background";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity 
} from "react-native";

const EntryScreen = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <SafeAreaView>
      <Background>
        <View className="flex flex-col justify-end h-full">
          <View className="flex bg-white/60 border border-white/30 justify-evenly p-[2px] rounded-full items-center flex-row w-[70%] h-[40px] mx-auto">
            <TouchableOpacity className={` ${activeTab==='login' && `bg-[#ffb300]`}  h-full w-[48%] rounded-full color-black`} onPress={()=>setActiveTab('login')}>

          <Text className="text-center font-[500] text-[20px]"  >
            Login 
          </Text>
            </TouchableOpacity>
            <TouchableOpacity  className={`${activeTab==='register' && `bg-[#ffb300]`} h-full w-[48%] rounded-full color-black`} onPress={()=>setActiveTab('register')}>

          <Text className="text-center font-[500] text-[20px]" >
            Register 
          </Text>
            </TouchableOpacity>
            </View>
            <View className="bg-black/80 blur-sm h-3/4 rounded-tl-[100px] flex pt-[100px] space-y-5 mt-10">

          {activeTab==='login' ? <Login/>: <Register/>}
            </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};



export default EntryScreen;
