import React from "react";

import "./Photo.css";

function Photo(props) {
  const { photo } = props;

  return (
    <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
  );
}

export default Photo;
