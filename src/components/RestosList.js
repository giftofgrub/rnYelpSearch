import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const RestosList = ({ title, restos }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restos}
        keyExtractor={(resto) => resto.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestosList;
