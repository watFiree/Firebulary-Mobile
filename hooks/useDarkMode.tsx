import React, { useState, useEffect, useContext } from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { light, dark } from "../utils/themeColors";

const ThemeContext = React.createContext({
  isDark: false,
  colors: light,
  setTheme: (_: "light" | "dark") => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const scheme = useColorScheme();
  const [isDark, setIsDark] = useState(scheme === "dark");
  useEffect(() => {
    setIsDark(scheme === "dark");
  }, [scheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? dark : light,
    setTheme: (theme: "light" | "dark") => setIsDark(theme === "dark"),
  };

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={defaultTheme}>
        {children}
      </ThemeContext.Provider>
    </AppearanceProvider>
  );
};

export default ThemeProvider;

export const useDarkMode = () => useContext(ThemeContext);
