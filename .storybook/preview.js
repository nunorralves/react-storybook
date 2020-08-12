import React from "react";
import Center from "../src/decorators/Center/Center";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: 'blue',
    success: 'green',
    danger: 'red'
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },

};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
