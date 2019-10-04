import React from "react";

import { controlClassName } from "../../helper.js";
import "./Wrapper.css";

function Wrapper(props) {
  const { children, className } = props;
  return (
    <div className={`wrapper ${controlClassName(className)}`}>{children}</div>
  );
}

export default Wrapper;
