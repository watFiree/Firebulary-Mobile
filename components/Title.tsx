import React from "react";
import { Text, StyleSheet } from "react-native";

const Title: React.FC<{ style?: Object }> = ({ children, style }) => (
  <Text style={[styles.title, style]}>{children}</Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 48,
    color: "#1c1c1e",
  },
});
