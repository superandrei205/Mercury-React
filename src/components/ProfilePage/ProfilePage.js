import React from "react";

import "./ProfilePage.css";

import Photo from "../Photo/Photo.js";
import Name from "../Name/Name.js";
import Button from "../Button/Button.js";

function ProfilePage(props) {
  const { logout, photo, name } = props;

  return (
    <div className="profilePage app__profilePage">
      <Photo photod={photo} />
      <Name named={name} className="profilePage__name" />
      <Button onClick={logout} className="profilePage__button" text="Logout" />
    </div>
  );
}

export default ProfilePage;
