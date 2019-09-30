import React from "react";

function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      required
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export default Input;
