import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IndexPage from "./index.js";
import Store from "./redux/store.js";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <View style={styles.container}>
          <IndexPage />
          <StatusBar style="auto" />
        </View> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={IndexPage}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
