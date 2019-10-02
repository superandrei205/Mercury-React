import React from "react";

import "../Name/Name.css";

function Name(props) {
  const { named, className } = props;

  return <h2 className={`name ${className}`}>{named}</h2>;
}

export default Name;
