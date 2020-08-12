import React from "react";
import Center from "../src/decorators/Center/Center";
import styled, { ThemeProvider } from "styled-components";
import '@storybook/addon-console';
import { withConsole } from "@storybook/addon-console";

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
  (story, context) => (withConsole()(story)(context))
];
