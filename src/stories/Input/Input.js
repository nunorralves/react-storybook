import React from "react";
import "./Input.css";

function Input(props) {
  const { size = "medium", ...otherProps } = props;
  return <input className={`input ${size}`} {...otherProps} />;
}

export default Input;
