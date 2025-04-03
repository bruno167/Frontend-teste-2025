"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
