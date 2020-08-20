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
    label='Primary'
    {...args}
    onClick={() =>
      console.log("CONSOLE LOG CLICKED", process.env.STORYBOOK_THEME)
    }
  />
);
Primary.args = {
  primary: true,
  label: "Primary",
};
export const Success = (args) => (
  <StyledButton success label='Success' {...args} />
);
export const Danger = (args) => (
  <StyledButton danger label='Danger' {...args} />
);
export const SmallFont = (args) => (
  <StyledButton small label='Small Font' {...args} />
);
export const MediumFont = (args) => (
  <StyledButton medium label='Medium Font' {...args} />
);
export const LargeFont = (args) => (
  <StyledButton large label='Large Font' {...args} />
);
export const SuccessLargeFont = (args) => (
  <StyledButton success large label='Success Large Font' {...args} />
);
