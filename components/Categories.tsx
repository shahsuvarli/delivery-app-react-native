import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";

const Categories = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{ padding: 15 }}>
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={category.img} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
  },
});
