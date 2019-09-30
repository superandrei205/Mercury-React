import React from "react";

function Button(props) {
  const { className } = props;
  return (
    <button className={className} type="submit">
      {props.text}
    </button>
  );
}

export default Button;
