import React, { useLayoutEffect,useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [user,setUser]= useState({
    email:'',
    password:''
  })
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
   const handleInputChange = (event, key) => {
    const { text } = event.nativeEvent;
    setUser({ ...user, [key]: text });
  };
  console.log(user)

  const handleLogin=()=>{
    navigation.navigate("Home");
    console.log(user)
    axios.post('http://192.168.44.237:5000/login',user)
    .then((data)=>{
      navigation.navigate("Home");
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <SafeAreaView>
      <Background>
        <View className="flex flex-col justify-end h-full">
          <Text className="text-center font-[700] text-[40px] mb-[10px]">
            Login
          </Text>
          <View className="bg-slate-400 h-3/4 rounded-tl-[100px] flex pt-[100px] space-y-5 mt-10">
            <View className="flex  space-x-2 p-2 mx-10 bg-gray-200 overflow-hidden rounded-lg">
              {/* <Ionicons name="ios-search-outline" size={20} color="black" /> */}
              <TextInput
                placeholder="Email"
                keyboardType="default"
                className="w-11/12 "
                value={user.email}
                onChange={(e)=>handleInputChange(e,'email')}
              />
            </View>
            <View className="flex  space-x-2 p-2 mx-10 bg-gray-200 overflow-hidden rounded-lg">
              {/* <Ionicons name="ios-search-outline" size={20} color="black" /> */}
              <TextInput
                textContentType="password"
                placeholder="Password"
                keyboardType="default"
                className="w-11/12 "
                value={user.password}
                onChange={(e)=>handleInputChange(e,'password')}
              />
            </View>
            <View className="flex  space-x-2 p-2 mx-10  overflow-hidden rounded-lg">
              <Button
                title="Login"
                color="#ffb300"
                accessibilityLabel="Learn more about this purple button"
                className="w-11/12"
                onPress={handleLogin}
              />
            </View>
            <View className="flex  space-x-2 p-2 mx-10  overflow-hidden rounded-lg">
              <Button
                title="Register"
                color="#FC2F13"
              
                accessibilityLabel="Learn more about this purple button"
                className="w-11/12 text-black"
                
              />
            </View>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
