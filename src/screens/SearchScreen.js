import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.searchScreen}>
      <Text>Search Screen!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    top: 20,
  },
});

export default SearchScreen;
