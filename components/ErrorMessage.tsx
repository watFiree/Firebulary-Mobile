import React from "react";
import { StyleSheet, Text } from "react-native";
import { useDarkMode } from "hooks/useDarkMode";

const ErrorMessage: React.FC = ({ children }) => {
  const { isDark } = useDarkMode();
  return (
    <Text style={[styles.error, { color: isDark ? "#d00000" : "#03071e" }]}>
      {children}
    </Text>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
