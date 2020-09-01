import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "screens/SearchScreen.js";
import RestoShowScreen from "screens/RestoShowScreen.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search", headerShown: true }}
        />
        <Stack.Screen
          name="RestaurantShow"
          component={RestoShowScreen}
          options={{ title: "View Restaurant", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
