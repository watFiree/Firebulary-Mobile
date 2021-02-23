import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button: React.FC<{
  onPress(): void;
  textColor?: string;
  backgroundColor?: string;
}> = ({
  children,
  onPress,
  textColor = "#1c1c1e",
  backgroundColor = "white",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: "48%",
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 21,
  },
});
