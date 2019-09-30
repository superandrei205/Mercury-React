import React from "react";

function Name(props) {
  const { named } = props;
  return (
    <h2 className="profile-form__name profile-form__name_text">{named}</h2>
  );
}

export default Name;
