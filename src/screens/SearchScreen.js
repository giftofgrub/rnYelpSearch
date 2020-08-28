import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "components/SearchBar";
import RestosList from "components/RestosList";
import useRestaurants from "hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestosByPrice = (price) => {
    // price: '$', '$$', '$$$'
    return restaurants.filter((resto) => {
      return resto.price === price;
    });
  };

  return (
    <View style={styles.SearchScreen}>
      <SearchBar term={term} onTermSubmit={searchApi} onTermChange={setTerm} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
      <RestosList restos={filterRestosByPrice("$")} title="Cost Effective" />
      <RestosList restos={filterRestosByPrice("$$")} title="Just Right" />
      <RestosList restos={filterRestosByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchScreen: {},
});

export default SearchScreen;
