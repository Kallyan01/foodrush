import React from 'react';
import {View, StyleSheet,ImageBackground} from 'react-native';

const Background = ({children}) => {
    return (
        <View>
            <ImageBackground source="https://wallpaperaccess.com/full/4901583.jpg" />
            <View>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Background;
