import React from "react";
import "./Button.css";

function Button(props) {
  const { variant = "primary", children, ...otherProps } = props;
  return (
    <button className={`button ${variant}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
