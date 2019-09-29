import React from "react";

import './Input.css';
import './Input__email.css';
import './input__password.css';

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