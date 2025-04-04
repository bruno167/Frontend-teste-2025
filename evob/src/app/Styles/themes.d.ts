import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: {
        lightBg: string;
        purple: string;
        yellow: string;
        green: string;
        red: string;
        black: string;
        white: string;
        gray: string;
        darkGray: string;
      };
      semantic: {
        primary: string;
        secondary: string;
        highlight: string;
        background: string;
      };
      text: {
        default: string;
        light: string;
        muted: string;
        charcoalGray: string;
        slateGray: string;
      };
      button: {
        primary: string;
        secondary: string;
        hover: string;
        border: string;
      };
      status: {
        label: string;
        highlight: string;
      };
    };
    fonts: {
      inter: string;
      robotoCondensed: string;
      quattrocento: string;
    };
    fontWeights: {
      body: number;
      heading: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    logoSizes: {
      mobile: { width: number; height: number };
      desktop: { width: number; height: number };
    };
    iconSizes: {
      mobile: { width: number; height: number };
      desktop: { width: number; height: number };
    };
  }
}
