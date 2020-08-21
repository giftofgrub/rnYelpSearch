import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "components/SearchBar";
import yelp from "api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "San Jose",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  return (
    <View style={styles.SearchScreen}>
      <SearchBar term={term} onTermSubmit={searchApi} onTermChange={setTerm} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchScreen: {},
});

export default SearchScreen;
