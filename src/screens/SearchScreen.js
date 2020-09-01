import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "components/SearchBar";
import RestosList from "components/RestosList";
import useRestaurants from "hooks/useRestaurants";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestosByPrice = (price) => {
    // price: '$', '$$', '$$$'
    return restaurants.filter((resto) => {
      return resto.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermSubmit={searchApi} onTermChange={setTerm} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestosList
          navigation={navigation}
          restos={filterRestosByPrice("$")}
          title="Cost Effective"
        />
        <RestosList
          navigation={navigation}
          restos={filterRestosByPrice("$$")}
          title="Just Right"
        />
        <RestosList
          navigation={navigation}
          restos={filterRestosByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // SearchScreen: {
  //   flex: 1,
  // },
});

export default SearchScreen;
