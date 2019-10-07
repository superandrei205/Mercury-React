import React from "react";

import { controlClassName } from "../../helper.js";
import "./Name.css";

function Name(props) {
  const { name, className } = props;

  return <h2 className={`name ${controlClassName(className)}`}>{name}</h2>;
}

export default Name;
