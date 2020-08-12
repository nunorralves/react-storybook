import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  // font-size: 16px;
  border-radius: 5px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  ${(props) => {
    if (props.primary)
      return `background-color: ${props.theme.colors.primary};`;
    if (props.success)
      return `background-color: ${props.theme.colors.success};`;
    if (props.danger) return `background-color: ${props.theme.colors.danger};`;
    return `{background-color: lightgray;`;
  }}

  ${(props) => {
    if (props.small) return `font-size: ${props.theme.fontSizes.small};`;
    if (props.medium) return `font-size: ${props.theme.fontSizes.medium};`;
    if (props.large) return `font-size: ${props.theme.fontSizes.large};`;
    return `{font-size: 16px;`;
  }}
`;

function StyledButton(props) {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
}

export default StyledButton;
