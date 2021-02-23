import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Layout from "components/Layout";
import Form from "components/SignUserForm";
import Title from "components/Title";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Title style={styles.title}>Sign Up</Title>
      <Form type="signup" />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.redirect}>Already have an account ? Sign In</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default SignUp;

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
