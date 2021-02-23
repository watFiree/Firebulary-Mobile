import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { auth } from "../fb";

import Layout from "components/Layout";
import Title from "components/Title";
import Button from "components/Button";
import { useDarkMode } from "../hooks/useDarkMode";

const Settings = () => {
  const { isDark, setTheme } = useDarkMode();
  return (
    <Layout>
      <Title style={{ marginVertical: 24 }}>Settings</Title>
      <Text style={styles.userInfo}>
        You are logged as{" "}
        <Text style={{ fontWeight: "bold" }}>{auth.currentUser?.email}</Text>
      </Text>
      <View style={styles.buttons}>
        <Button
          onPress={() => setTheme(isDark === true ? "light" : "dark")}
          backgroundColor={isDark ? "#edf6f9" : "#1c1c1e"}
          textColor={isDark ? "#1c1c1e" : "white"}
        >
          {isDark ? "Lighten" : "Darken"}
        </Button>
        <Button
          onPress={() => auth.signOut()}
          backgroundColor="#a4161a"
          textColor="white"
        >
          Log Out
        </Button>
      </View>
    </Layout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  userInfo: {
    marginBottom: 12,
    fontSize: 16,
  },
  buttons: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
