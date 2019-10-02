import React from "react";

function Photo(props) {
  const { photod } = props;

  return (
    <div className="photo" style={{ backgroundImage: `url(${photod})` }}></div>
  );
}

export default Photo;
