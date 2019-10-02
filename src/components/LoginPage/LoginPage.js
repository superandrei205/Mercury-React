import React, { useState } from "react";

import "./LoginPage.css";
import "../Title/Title.css";
import "../Input/Input.css";
import "../Error/Error.css";
import "../Button/Button.css";

import Title from "../Title/Title.js";
import Input from "../Input/Input.js";
import Error from "../Error/Error.js";
import Button from "../Button/Button.js";

function LoginPage(props) {
  const { handleSubmit, hasError } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInputChange(event) {
    const { type, value } = event.target;

    if (type === "email") setEmail(value);

    if (type === "password") setPassword(value);
  }

  function onSubmit(event) {
    handleSubmit(event, { email, password });
  }

  return (
    <form className="signIn-form signIn-form_center" onSubmit={onSubmit}>
      <Title />
      <Input
        className={`signIn-form__input signIn-form__input_email ${
          hasError ? "signIn-form__input_error" : ""
        }`}
        type="email"
        placeholder="email"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        className={`signIn-form__input signIn-form__input_password ${
          hasError ? "signIn-form__input_error" : ""
        }`}
        type="password"
        placeholder="password"
        value={password}
        onChange={handleInputChange}
      />
      <Error
        className={`signIn-form__error ${
          hasError ? "show_block" : "hide_block"
        } `}
      />
      <Button className="signIn-form__button" text="Login" />
    </form>
  );
}

export default LoginPage;
