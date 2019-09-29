import React, { Component } from "react";

import Title from "./Title.js";
import Input from "./Input.js";
import Error from "./Error.js";
import Button from "./Button.js";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form
        className="form column"
        onSubmit={this.props.handleSubmit}
        style={{ display: `${this.props.display}` }}
      >
        <Title />
        <Input
          className={`input email ${this.props.error}`}
          type="email"
          placeholder="email"
          onChange={this.props.handleEmailChange}
        />
        <Input
          className={`input password ${this.props.error}`}
          type="password"
          placeholder="password"
          onChange={this.props.handlePasswordChange}
        />
        <Error />
        <Button text={"Login"} />
      </form>
    );
  }
}

export default LoginPage;
