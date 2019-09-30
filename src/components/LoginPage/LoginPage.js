import React, { Component } from "react";

import "./LoginPage.css";

import Title from "./Title/Title.js";
import Input from "./Input/Input.js";
import Error from "./Error/Error.js";
import Button from "./Button/Button.js";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form
        className="search-form search-column"
        onSubmit={this.props.handleSubmit}
        style={{ display: `${this.props.display}` }}
      >
        <Title />
        <Input
          className={`search-form__input search-form__input_email ${this.props.error}`}
          type="email"
          placeholder="email"
          onChange={this.props.handleEmailChange}
        />
        <Input
          className={`search-form__input search-form__input_password ${this.props.error}`}
          type="password"
          placeholder="password"
          onChange={this.props.handlePasswordChange}
        />
        <Error errorBlock={this.props.errorBlock} />
        <Button text={"Login"} />
      </form>
    );
  }
}

export default LoginPage;
