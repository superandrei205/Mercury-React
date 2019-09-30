import React, { Component } from "react";

import "./ProfilePage.css";

import Photo from "./Photo/Photo.js";
import Name from "./Name/Name.js";
import Button from "../LoginPage/Button/Button.js";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form
        className="profile-form profile-form_center"
        onSubmit={this.props.removeProfile}
        style={{ display: `${this.props.display}` }}
      >
        <Photo photod={this.props.photo} />
        <Name named={this.props.name} />
        <Button className={"profile-form__button"} text="Logout" />
      </form>
    );
  }
}

export default ProfilePage;
