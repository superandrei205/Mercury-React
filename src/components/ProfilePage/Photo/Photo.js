import React from "react";

import './Photo.css';

function Photo(props) {
  return (
    <div
      className="photo"
      style={{ backgroundImage: `url(${props.photod})` }}
    ></div>
  );
}

export default Photo;
