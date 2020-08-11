import React from "react";
import Center from "../src/decorators/Center/Center";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];
