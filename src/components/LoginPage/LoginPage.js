import React, { useState } from "react";

import "./LoginPage.css";

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
    <form className="loginPage app__loginPage" onSubmit={onSubmit}>
      <Title />
      <Input
        className="loginPage__input_email"
        isError={hasError}
        type="email"
        placeholder="email"
        value={email}
        onChange={handleInputChange}
      />
      <Input
        className="loginPage__input_password"
        isError={hasError}
        type="password"
        placeholder="password"
        value={password}
        onChange={handleInputChange}
      />
      {hasError && <Error className="loginPage__error" />}
      <Button className="loginPage__button" text="Login" />
    </form>
  );
}

export default LoginPage;
