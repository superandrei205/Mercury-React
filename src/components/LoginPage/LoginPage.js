import React, { Component } from "react";

import "./LoginPage.css";

import Title from "./Title/Title.js";
import Input from "./Input/Input.js";
import Error from "./Error/Error.js";
import Button from "./Button/Button.js";

function LoginPage(props) {
  const {
    handleSubmit,
    errorClassName,
    handleEmailChange,
    handlePasswordChange,
    errorBlock,
    display
  } = props;

  return (
    <form
      className="signIn-form signIn-form_center"
      onSubmit={handleSubmit}
      style={{ display }}
    >
      <Title />
      <Input
        className={`signIn-form__input signIn-form__input_email ${errorClassName}`}
        type="email"
        placeholder="email"
        onChange={handleEmailChange}
      />
      <Input
        className={`signIn-form__input signIn-form__input_password ${errorClassName}`}
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <Error error={errorBlock} />
      <Button className="signIn-form__button" text="Login" />
    </form>
  );
}

export default LoginPage;
