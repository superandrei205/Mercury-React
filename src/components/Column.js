import React, { Component } from "react";

import './Column.css';

import LoginPage from "./LoginPage/LoginPage.js";
import ProfilePage from "./ProfilePage/ProfilePage.js";

const METHOD = "POST";
const API_URL = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const HEADERS = new Headers({ "Content-Type": "application/json" });

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      email: "",
      password: "",
      displayLogin: "flex",
      displayProfile: "none",
      error: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.setProfile = this.setProfile.bind(this);
    this.renderName = this.renderName.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
  }

  handleEmailChange(event) {
    if (this.state.error) {
      this.setState({
        error: ""
      });
    }
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    if (this.state.error) {
      this.setState({
        error: ""
      });
    }
    this.setState({ password: event.target.value });
  }

  login(data = {}) {
    return fetch(API_URL, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  setProfile(name, profile) {
    if (name && profile) document.cookie = `${name}=${profile}`;
  }

  renderName(data) {
    this.setState({ name: data.name });
    this.setState({ photo: data.photoUrl });
    this.setState({ displayLogin: "none", displayProfile: "flex" });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.login({
      email: this.state.email,
      password: this.state.password
    }).then(data => {
      if (data.error) {
        console.error(data.error);
        document.querySelector(".search-form__error").style.display = "block";
        this.setState({ error: "search-form__input_error" });
        return;
      }

      document.querySelector(".search-form__error").style.display = "none";
      this.setProfile("profile", JSON.stringify(data));
      this.renderName(data);
      console.log(data);
    });
  }

  removeProfile(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      name: "",
      photo: "",
      displayLogin: "flex",
      displayProfile: "none",
      email: "",
      password: "",
      error: ""
    });
    document.cookie = "profile=null";
  }

  render() {
    return (
      <div className="column">
        <div className="logo"></div>
        <LoginPage
          display={this.state.displayLogin}
          handleSubmit={this.handleSubmit}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          error={this.state.error}
        />
        <ProfilePage
          display={this.state.displayProfile}
          name={this.state.name}
          photo={this.state.photo}
          removeProfile={this.removeProfile}
        />
      </div>
    );
  }
}

export default Column;
