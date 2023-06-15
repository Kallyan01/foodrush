import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';

const CategoryCard = ({imgUrl,title}) => {
    return (
        <View className="flex items-center mr-2">
            <Image source={{
                uri: imgUrl
            }} className="h-20 w-20 rounded-full"/>
            <Text className="text-xs font-bold text-gray-600">{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryCard;
