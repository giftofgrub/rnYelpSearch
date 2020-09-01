import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
const RestoDetail = ({ resto }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: resto.image_url }} />
      <Text style={styles.name}>{resto.name}</Text>
      <Text>
        {resto.rating} Stars, {resto.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 12,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default RestoDetail;
