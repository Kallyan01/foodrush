import FRButton from "./common/Button";
import Field from "./form/Field";
import LottieView from "lottie-react-native";
import OtpValidation from "./OtpValidation";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Text } from "react-native";

import {
  View,
  TextInput,
  Button,
} from "react-native";

function Register() {
  const SERVER_URL = process.env.SERVER_URL;
  const navigation = useNavigation();
    const {control,handleSubmit} = useForm({mode:'onChange'})
  const [step,setStep] =useState({
    number: 1,
    info:{}
  })
  const [loading,setLoading]=useState(false)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleRegister=(data)=>{
    console.log(data)
    const {email,password} = data
    setLoading(true)
    axios.post(`${SERVER_URL}/sendotp`, {email,password})
    .then((data)=>{
      setLoading(false)
      setStep({
        number:2,
        info:{email,...data}
      })
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }

  
  return (
    <View  className="mx-10">
      {step.number===1?<View> 
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

            <View>
              
              <Field
              label="Confirm Password"
              control={control}
              type="password"
              name="cnf_password"
              placeholder="Re-enter Your password here"
              fontSize="text-[13px]"
            />
              </View>
             
           
            <View className="flex  space-x-2 p-2 overflow-hidden ">
             
              <FRButton
               onclick={handleSubmit(handleRegister)}
               
              buttonbg={'#FC2F13'}
               
              >
                { loading ? 
                <View className="h-[20px] w-[20px] ">

                <LottieView
      source={require("../assets/animated-icons/loading.json")}
      style={{width: "100%", height: "100%"}}
      
      autoPlay
      loop
      />
      </View> : <Text className="text-[16px] font-[500] text-white">Register</Text>}
                </FRButton>
               
               
            </View>
            </View>:
            <OtpValidation length={5} email={step.info?.email}/>
            }
          </View>
  )

}

export default Register