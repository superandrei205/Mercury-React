import React from "react";

function Error(props) {
  const { className } = props;

  return (
    <div className={`error ${className}`}>E-mail or password is incorrect</div>
  );
}

export default Error;
