import React, { useState } from "react";
import { useController } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";

import Icon from  'react-native-vector-icons/MaterialCommunityIcons';
const Field = ({
  label,
  icon,
  iconSize,
  type = 'text',
  control,
  size,
  labelSize,
  labelColor,
  name,
  register,
  fontSize,
  noAutofill = true,
  isActive,
  error,
  className,
  hideIcon = false,
  ...props
}) => {
  const {field} = useController({
    name,
    control,
    defaultValue: '',
  rules: { required: true },
  })

  // Define Tailwind CSS classes based on the props
  const inputClasses = ` rounded-md px-2 py-2 
                         ${
                           props.disabled &&
                           'cursor-not-allowed select-none pointer-events-none opacity-50'
                         } select-none outline-none w-full bg-transparent ${
    size === 'sm' ? 'text-sm' : 'text-base'
  } ${fontSize || 'text-base'}`;

  const labelClasses = `${labelColor || 'text-light'} ${labelSize || 'text-md'}`;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  const getType = (givenType, showOrHide) => {
    if (givenType === 'password') return showOrHide ? "" : {"secureTextEntry":true}
    return {"secureTextEntry":false};
  };

  return (
    <View
      className={`h-auto text-light mb-3 w-full ${className} ${props.disabled && 'opacity-70'} `}
    >
       <View className="items-left mb-[5px]">
              <Text className="text-[12px] text-white">{label}</Text>
            </View>
      <View className="mb-0 ">
        {/* {label && <label className={labelClasses} dangerouslySetInnerHTML={{ __html: label }} />} */}

        <View
          className={` relative bg-white rounded flex border ${
            error ? `border-red` : `border-light/10 hover:border-primary focus:border-primary`
          }  `}
        >
          {/* {icon && (
            <View className="relative inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none">
              <Icon size={iconSize} icon={icon} />
            </View>
          )} */}
          
           

          <TextInput
            {...getType(type, show)}
            className={inputClasses}
            value={field.value}
            onChangeText={field.onChange}
            autoComplete="one-time-code"
            {...props}
          />

          {type === 'password' && !hideIcon && (
            <View className="absolute inset-y-0  right-0 cursor-pointer flex justify-center items-center">
              <Icon.Button
                size={iconSize}
                color="#3b5998"
                name={show ? 'eye-off' : 'eye'}
                title={show? 'Hide': 'Show'}
                className="flex justify-center items-center bg-white text-black"
                onPress={handleClick}
             />
             
            </View>
          )}
        </View>
      </View>
      {/* <p className="text-red text-s font-sm mt-[.2rem]">{error?.message}</p> */}
    </View>
  );
};

export default Field;
