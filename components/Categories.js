import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = ({heading}) => {
  return (
    <>
    {heading && <Text className="mx-4 font-bold">{heading}</Text>}
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" title="Pizza" />
      <CategoryCard imgUrl="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" title="Biryani"/>
      <CategoryCard imgUrl="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" title="Rolls"/>
      <CategoryCard imgUrl="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" title="Noodles"/>
      <CategoryCard imgUrl="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" title="Momos"/>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Categories;
