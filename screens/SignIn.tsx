import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "components/Layout";
import Form from "components/SignUserForm";
import Title from "components/Title";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Title style={styles.title}>Sign In</Title>
      <Form type="signin" />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.redirect}>Dont' have an account ? Sign Up</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    marginBottom: 32,
  },
  redirect: {
    color: "black",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
