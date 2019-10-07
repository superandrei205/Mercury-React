import React from "react";

import { controlClassName } from "../../helper.js";
import "./Input.css";

function Input(props) {
  const { className, type, placeholder, onChange, value, isError } = props;

  return (
    <input
      className={`input ${controlClassName(className)} ${isError &&
        "input_error"}`}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
