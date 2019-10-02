import React from "react";

function Error(props) {
  const { className } = props;

  return <div className={className}>E-mail or password is incorrect</div>;
}

export default Error;
