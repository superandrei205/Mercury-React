import React from "react";

import './Button.css';

function Button(props) {
  return (
    <button className='search-form__button' type="submit">
      {props.text}
    </button>
  );
}

export default Button;