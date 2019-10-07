import React from "react";

import "./UserProfile.css";

import Photo from "../Photo/Photo.js";
import Name from "../Name/Name.js";
import Button from "../Button/Button.js";

function UserProfile(props) {
  const { handleLogout, photo, name } = props;

  return (
    <div className="userProfile">
      <Photo photo={photo} />
      <Name name={name} className="userProfile__name" />
      <Button onClick={handleLogout} className="userProfile__button">
        Logout
      </Button>
    </div>
  );
}

export default UserProfile;
