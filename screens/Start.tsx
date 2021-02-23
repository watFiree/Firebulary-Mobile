import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../components/Title";
import Layout from "components/Layout";
import Button from "components/Button";

const Start = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.header}>
        <Image source={require("/assets/logo.png")} style={styles.logo} />
        <Title>Firebulary</Title>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate("SignIn")}>Sign In</Button>
        <Button onPress={() => navigation.navigate("SignUp")}>Sign Up</Button>
      </View>
    </Layout>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 96,
    width: 96,
  },
  buttons: {
    width: "100%",
    height: "20%",
    marginTop: 128,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
