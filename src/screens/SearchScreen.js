import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.SearchScreen}>
      <SearchBar
        onTermSubmit={() => console.log("submit!!!")}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>Search Screen </Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchScreen: {},
});

export default SearchScreen;
