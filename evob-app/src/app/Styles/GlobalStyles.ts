"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.inter};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    line-height: ${({ theme }) => theme.lineHeights.body};

    background: ${({ theme }) => theme.colors.base.lightBg};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
  }
`;