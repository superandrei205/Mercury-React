import React from "react";

function Photo(props) {
  return (
    <div
      className="profile-form__photo"
      style={{ backgroundImage: `url(${props.photod})` }}
    ></div>
  );
}

export default Photo;
