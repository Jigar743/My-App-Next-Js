import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/ThemeStyle.styled";

function CustomThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
