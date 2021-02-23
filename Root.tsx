import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ThemeProvider from "hooks/useDarkMode";

import Start from "./screens/Start";
import AppNavigation from "./screens/AppNavigation";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();

const App = () => (
  <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="App" component={AppNavigation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
