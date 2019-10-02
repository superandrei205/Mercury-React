import React from "react";

function Name(props) {
  const { named, className } = props;

  return <h2 className={`name ${className}`}>{named}</h2>;
}

export default Name;
