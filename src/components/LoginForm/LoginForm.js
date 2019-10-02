import React, { useState } from "react";

import "./LoginForm.css";

import Title from "../Title/Title.js";
import Input from "../Input/Input.js";
import Error from "../Error/Error.js";
import Button from "../Button/Button.js";

function LoginForm(props) {
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
    <form className="loginForm app__loginForm" onSubmit={onSubmit}>
      <Title />
      <Input
        className="loginForm__input_email"
        isError={hasError}
        type="email"
        placeholder="email"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        className="loginForm__input_password"
        isError={hasError}
        type="password"
        placeholder="password"
        value={password}
        onChange={handleInputChange}
      />
      {hasError && <Error className="loginForm__error" />}
      <Button className="loginForm__button" text="Login" />
    </form>
  );
}

export default LoginForm;
