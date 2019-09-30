import React from "react";

function Button(props) {
  return (
    <button className="profile-form__button" type="submit">
      {props.text}
    </button>
  );
}

export default Button;
