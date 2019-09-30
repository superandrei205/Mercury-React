import React, { Component } from "react";

import "./App.css";

import LoginPage from "./LoginPage/LoginPage.js";
import ProfilePage from "./ProfilePage/ProfilePage.js";

const METHOD = "POST";
const API_URL = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const HEADERS = new Headers({ "Content-Type": "application/json" });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photo: "",
      email: "",
      password: "",
      errorBlock: "none",
      displayLogin: "flex",
      displayProfile: "none",
      error: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.showErrorBlock = this.showErrorBlock.bind(this);
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

  showErrorBlock(err) {
    if (err) {
      this.setState({
        errorBlock: "block"
      });
    }
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
        this.setState({ error: "signIn-form__input_error" });
        this.showErrorBlock(this.state.error);
        return;
      }

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
      error: "",
      errorBlock: "none"
    });
    document.cookie = "profile=null";
  }

  render() {
    return (
      <div className="app_center">
        <div className="app__logo"></div>
        <LoginPage
          display={this.state.displayLogin}
          handleSubmit={this.handleSubmit}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          error={this.state.error}
          errorBlock={this.state.errorBlock}
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

export default App;
