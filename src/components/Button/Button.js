import React from "react";

import { controlClassName } from "../../helper.js";
import "./Button.css";

function Button(props) {
  const { className, onClick, children } = props;
  return (
    <button
      onClick={onClick}
      className={`button ${controlClassName(className)}`}
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
