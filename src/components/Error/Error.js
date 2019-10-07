import React from "react";

import { controlClassName } from "../../helper.js";
import "./Error.css";

function Error(props) {
  const { className } = props;

  return (
    <div className={`error ${controlClassName(className)}`}>
      E-mail or password is incorrect
    </div>
  );
}

export default Error;
