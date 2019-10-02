import React from "react";

import "./ProfilePage.css";
import "../Photo/Photo.css";
import "../Name/Name.css";
import "../Button/Button";

import Photo from "../Photo/Photo.js";
import Name from "../Name/Name.js";
import Button from "../Button/Button.js";

function ProfilePage(props) {
  const { removeProfile, photo, name } = props;

  return (
    <form className="profile-form profile-form_center" onSubmit={removeProfile}>
      <Photo photod={photo} />
      <Name named={name} />
      <Button className="profile-form__button" text="Logout" />
    </form>
  );
}

export default ProfilePage;
