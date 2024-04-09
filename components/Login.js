import FRButton from "./common/Button";
import Field from "./form/Field";
import LottieView from "lottie-react-native";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { ViewBase } from "react-native";

import {
    View,
    TextInput,
    Button,
  } from "react-native";

  import {useForm} from 'react-hook-form'
function Login() {
  const SERVER_URL = process.env.SERVER_URL;
    const navigation = useNavigation();
    const {control,handleSubmit} = useForm({mode:'onChange'})

  const [loading,setLoading]=useState(false)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  const handleLogin=(user)=>{
    setLoading(true)
    navigation.navigate("Home");
    axios.post(`${SERVER_URL}/login`,user)
    .then((data)=>{
      setLoading(false)
      navigation.navigate("Home");
    })
    .catch(err=>{
      console.log(err)
    })
  }

  
  return (
    <View  className="mx-10">
            <View >
             
              <Field
            label="Email"
            control={control}
            type="email"
            name="email"
            placeholder="e.g. user@mail.com"
            fontSize="text-[13px]"
          />
            </View>
            <View>
              
            <Field
            label="Password"
            control={control}
            type="password"
            name="password"
            placeholder="Your password here"
            fontSize="text-[13px]"
          />
            </View>
            <View className="flex  space-x-2 p-2  overflow-hidden ">
            <FRButton
              
                buttonbg={'#ffb300'}
                onclick={handleSubmit(handleLogin)}
              >
{ loading ? 
                <View className="h-[20px] w-[20px] ">

                <LottieView
      source={require("../assets/animated-icons/loading.json")}
      style={{width: "100%", height: "100%"}}
      
      autoPlay
      loop
      />
      </View> : <Text className="text-[16px] font-[500] text-white">Login</Text>}
                </FRButton>
            </View>
           
                
          </View>
  )
}

export default Login