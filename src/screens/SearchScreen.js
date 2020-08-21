import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.SearchScreen}>
      <SearchBar />
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
