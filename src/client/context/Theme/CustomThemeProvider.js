import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, theme as antdTheme } from "antd";
import { darkTheme, lightTheme } from "../../styles/ThemeStyle.styled";
import { GlobalStyle } from "../../styles/global.styled";

export const ThemeContext = createContext();

function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setMode(saved);
  }, []);

  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  const currentTheme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm:
            mode === "dark"
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: currentTheme.colors.primary,
          },
        }}
      >
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;
