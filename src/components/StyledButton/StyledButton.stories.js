import React from "react";
import StyledButton from "./StyledButton";

export default {
  title: "Nuno/StyledButton",
  component: StyledButton,
};

export const Primary = () => (
  <StyledButton primary>Primary</StyledButton>
);
export const Success = () => (
  <StyledButton success>Success</StyledButton>
);
export const Danger = () => (
  <StyledButton danger>Danger</StyledButton>
);
export const SmallFont = () => (
  <StyledButton small>Small Font</StyledButton>
);
export const MediumFont = () => (
  <StyledButton medium>Medium Font</StyledButton>
);
export const LargeFont = () => (
  <StyledButton large>Large Font</StyledButton>
);
export const SuccessLargeFont = () => (
  <StyledButton success large>Success Large Font</StyledButton>
);
