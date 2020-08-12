import React from "react";
import StyledButton from "./StyledButton";

export default {
  title: "Nuno/StyledButton",
  component: StyledButton,
  argTypes: {
    onClick: { action: "clicked" },
    onMouseOver: { action: "onMouseOver" },
  },
};

export const Primary = (args) => (
  <StyledButton
    primary
    {...args}
    onClick={() => console.log("CONSOLE LOG CLICKED")}
  >
    Primary
  </StyledButton>
);
export const Success = (args) => (
  <StyledButton success {...args}>
    Success
  </StyledButton>
);
export const Danger = (args) => (
  <StyledButton danger {...args}>
    Danger
  </StyledButton>
);
export const SmallFont = (args) => (
  <StyledButton small {...args}>
    Small Font
  </StyledButton>
);
export const MediumFont = (args) => (
  <StyledButton medium {...args}>
    Medium Font
  </StyledButton>
);
export const LargeFont = (args) => (
  <StyledButton large {...args}>
    Large Font
  </StyledButton>
);
export const SuccessLargeFont = (args) => (
  <StyledButton success large {...args}>
    Success Large Font
  </StyledButton>
);
