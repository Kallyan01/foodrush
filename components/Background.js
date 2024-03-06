import React from 'react';
import {View, StyleSheet,Image,ImageBackground,Text} from 'react-native';

const Background = ({children}) => {
    return (
        <View>
            <ImageBackground source={{uri:"https://wallpaperaccess.com/full/4901583.jpg"}}  resizeMode="cover" className="absolute top-0 left-0 h-full w-full "/>
            <View>
              
                {children}
            </View>
        </View>
    );
}



export default Background;
