import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import { EXPO_IOS_GOOGLE_AUTH_KEY, EXPO_ANDROID_GOOGLE_AUTH_KEY } from "@env";
import firebase, { auth } from "../fb";

import ErrorMessage from "./ErrorMessage";

const GoogleButton = () => {
  const [error, setError] = useState("");
  const handleSignInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: EXPO_IOS_GOOGLE_AUTH_KEY,
        androidClientId: EXPO_ANDROID_GOOGLE_AUTH_KEY,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );

        return auth.signInWithCredential(credential);
      }

      return setError("404:Could not get credentials");
    } catch (err) {
      return setError(err.code + err.message);
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={handleSignInWithGoogle}>
        <Image source={require("assets/google_logo.png")} style={styles.icon} />
        <Text style={styles.text}>Continue with Google</Text>
      </TouchableOpacity>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  wrapper: {
    width: "75%",
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#ced4da",
    borderColor: "#212529",
  },
  icon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    marginBottom: 3,
    color: "#212529",
  },
});
