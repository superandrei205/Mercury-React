import React from "react";

import "./ProfilePage.css";
import "../Photo/Photo.css";
import "../Name/Name.css";
import "../Button/Button.css";

import Photo from "../Photo/Photo.js";
import Name from "../Name/Name.js";
import Button from "../Button/Button.js";

function ProfilePage(props) {
  const { removeProfile, photo, name } = props;

  return (
    <div className="profilePage app__profilePage">
      <Photo photod={photo} />
      <Name named={name} className="profilePage__name" />
      <Button
        onClick={removeProfile}
        className="profilePage__button"
        text="Logout"
      />
    </div>
  );
}

export default ProfilePage;
