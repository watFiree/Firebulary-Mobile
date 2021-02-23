import React, { useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../fb";

import Button from "./Button";
import GoogleButton from "./GoogleButton";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

const SignUserForm: React.FC<{ type: "signin" | "signup" }> = ({ type }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((snapshot) => {
      if (snapshot) {
        // if user exists and is saved
        return navigation.navigate("App");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <GoogleButton />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = "Please enter email !";
          }
          if (!values.password) {
            errors.password = "Please enter password !";
          } else if (values.password.length < 6) {
            errors.password = "Please enter longer password !";
          }
          return errors;
        }}
        onSubmit={({ email, password }, { setErrors }) => {
          if (type === "signin") {
            auth
              .signInWithEmailAndPassword(email.trim(), password.trim())
              .catch((err) => setErrors({ password: err.message }));
            return;
          }
          auth
            .createUserWithEmailAndPassword(email.trim(), password.trim())
            .catch((err) => setErrors({ password: err.message }));
          return;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <Input
              placeholder="Enter your email here"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
            <Input
              placeholder="Enter your password here"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : null}
            <Button
              onPress={handleSubmit}
              backgroundColor="#212529"
              textColor="#f8f9fa"
            >
              {type === "signin" ? "Sign In" : "Sign Up"}
            </Button>
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignUserForm;

const styles = StyleSheet.create({
  form: {
    height: "40%",
    width: "75%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "100%",
    height: 32,
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
});
