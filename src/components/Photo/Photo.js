import React from "react";

import "../Photo/Photo.css";

function Photo(props) {
  const { photod } = props;

  return (
    <div className="photo" style={{ backgroundImage: `url(${photod})` }}></div>
  );
}

export default Photo;
