import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.SearchScreen}>
      <Text>Search Screen!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchScreen: {
    top: 20,
  },
});

export default SearchScreen;
