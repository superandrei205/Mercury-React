import React from "react";

function Button(props) {
  const { className, onClick } = props;
  return (
    <button onClick={onClick} className={`button ${className}`} type="submit">
      {props.text}
    </button>
  );
}

export default Button;
