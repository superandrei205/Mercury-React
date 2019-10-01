import React from "react";

function Input(props) {
  const { className, type, placeholder, onChange, value } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
