import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

import { useDarkMode } from "../hooks/useDarkMode";

const Layout: React.FC<{ style?: Object }> = ({ children, style }) => {
  const { colors } = useDarkMode();
  return (
    <LinearGradient
      style={[styles.global, style]}
      colors={colors.background}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.2, y: 0 }}
      locations={[0.2, 0.9]}
    >
      {children}
    </LinearGradient>
  );
};

export default Layout;

const styles = StyleSheet.create({
  global: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
