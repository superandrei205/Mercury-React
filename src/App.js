import React, { Component } from "react";

import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import Wrapper from "./components/Wrapper/Wrapper.js";

const METHOD = "POST";
const API_URL = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
const HEADERS = new Headers({ "Content-Type": "application/json" });

const DEFAULT_STATE = {
  page: "login",
  name: "",
  photo: "",
  hasError: false
};

class App extends Component {
  state = DEFAULT_STATE;

  login = (data = {}) => {
    return fetch(API_URL, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(data)
    }).then(response => response.json());
  };

  setProfile = (name, profile) => {
    if (name && profile) document.cookie = `${name}=${profile}`;
  };

  setToProfile = data => {
    this.setState({
      ...DEFAULT_STATE,
      name: data.name,
      photo: data.photoUrl,
      page: "profile"
    });
  };

  handleSubmit = (event, params) => {
    event.preventDefault();
    event.stopPropagation();

    this.login({
      email: params.email,
      password: params.password
    }).then(data => {
      if (data.error) {
        this.setState({ hasError: true });
        return;
      }

      this.setProfile("profile", JSON.stringify(data));
      this.setToProfile(data);
    });
  };

  handleLogout = event => {
    event.preventDefault();
    event.stopPropagation();

    this.setState(DEFAULT_STATE);

    document.cookie = "profile=null";
  };

  render() {
    const { page, hasError, name, photo } = this.state;

    return (
      <div className="app">
        <div className="logo app__logo" />
        {page === "login" && (
          <Wrapper>
            <LoginForm handleSubmit={this.handleSubmit} hasError={hasError} />
          </Wrapper>
        )}
        {page === "profile" && (
          <Wrapper>
            <UserProfile
              name={name}
              photo={photo}
              handleLogout={this.handleLogout}
            />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default App;
