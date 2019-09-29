import React from "react";

import './Name.css';

function Name(props) {
  return <h2 className="profile-form__name profile-form__name_text">{props.named}</h2>;
}

export default Name;
