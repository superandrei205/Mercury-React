import React from "react";

import "../Button/Button.css";

function Button(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={`button ${className}`} type="submit">
      {props.text}
    </button>
  );
}

export default Button;
