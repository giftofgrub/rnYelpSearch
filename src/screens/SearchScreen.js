import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "components/SearchBar";
import ResultsList from "components/ResultsList";
import useRestaurants from "hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  return (
    <View style={styles.SearchScreen}>
      <SearchBar term={term} onTermSubmit={searchApi} onTermChange={setTerm} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Just Right" />
      <ResultsList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchScreen: {},
});

export default SearchScreen;
