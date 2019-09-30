import React from "react";

function Error(props) {
  const { error } = props;
  return (
    <div className="signIn-form__error" style={{ display: `${error}` }}>
      E-mail or password is incorrect
    </div>
  );
}

export default Error;
