import React from "react";
import RestoDetail from "components/RestoDetail";
import { View, Text, StyleSheet, FlatList } from "react-native";
const RestosList = ({ title, restos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restos}
        keyExtractor={(resto) => resto.id}
        renderItem={({ item }) => {
          return <RestoDetail resto={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default RestosList;
