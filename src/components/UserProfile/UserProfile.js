import React from "react";

import "./UserProfile.css";

import Photo from "../Photo/Photo.js";
import Name from "../Name/Name.js";
import Button from "../Button/Button.js";

function UserProfile(props) {
  const { logout, photo, name } = props;

  return (
    <div className="userProfile app__userProfile">
      <Photo photod={photo} />
      <Name named={name} className="userProfile__name" />
      <Button onClick={logout} className="userProfile__button" text="Logout" />
    </div>
  );
}

export default UserProfile;
