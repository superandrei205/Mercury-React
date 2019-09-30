import React from "react";

function Button(props) {
  return (
    <button className={props.className} type="submit">
      {props.text}
    </button>
  );
}

export default Button;
