import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dictionary from "./Dictionary";
import Layout from "components/Layout";
import Title from "components/Title";
import Button from "components/Button";
import AddWordForm from "components/AddWordForm";

const Home = () => {
  const nav = useNavigation();
  return (
    <Layout>
      <Title style={{ fontSize: 48, marginVertical: 24 }}>Create term</Title>
      <AddWordForm />
      <Button onPress={() => nav.navigate("Dictionary")}>Dictionary</Button>
    </Layout>
  );
};

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Dictionary"
      component={Dictionary}
      options={{
        headerStyle: { backgroundColor: "#44403C" },
        headerTitleStyle: {
          color: "#E7E5E4",
        },
        headerTintColor: "#E7E5E4",
      }}
    />
  </HomeStack.Navigator>
);
