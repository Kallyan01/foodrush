import FRButton from "./common/Button";
import LottieView from "lottie-react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";

const OtpValidation = ({length = 4, email=''}) => {
  const SERVER_URL = process.env.SERVER_URL;
  const navigation = useNavigation();
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
onOtpSubmit = async (otp) => {
   console.log(otp)
    if (otp.length === length) 
    axios.post(`${SERVER_URL}/verify`, {email,otp})
    .then((data)=>{
      setLoading(false)
      navigation.navigate("Home");
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
    })
    else console.log("Invalid OTP");
}
  const handleChange = (index, e) => {
 
    const value = e;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // // submit trigger
    // const combinedOtp = newOtp.join("");
    // if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelection(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
 
    if (
      e.nativeEvent.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View className="">
    <Text className="text-center text-2xl font-semibold text-white">Enter OTP</Text>
    <Text className="text-center text-[10px] text-white">Enter the OTP sent to {email}</Text>
    <View className="flex flex-row mx-auto">
      {otp.map((value, index) => {
        return (
          <TextInput
            key={index}
            type="number"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChangeText={(e) => handleChange(index, e)}
            onFocus={() => handleClick(index)}
            onKeyPress={(e) => handleKeyDown(index, e)}
            className="bg-white mx-1 border border-gray-300  text-center text-2xl font-semibold "
            style={{
                height : 240/length,
                width : 240/length
            }}
          />
          );
      })}
    </View>
    <View className="mt-10">
   <Button onPress={()=>onOtpSubmit(otp.join(""))} title="Submit" iconName="check" className="bg-red-500 rounded-sm" />
    </View>
          </View>
  );
};

export default OtpValidation;


