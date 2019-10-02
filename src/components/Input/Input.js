import React from "react";

import "./Input.css";

function Input(props) {
  const { className, type, placeholder, onChange, value, isError } = props;

  return (
    <input
      className={`input ${className} ${isError && "input_error"}`}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
