import React from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
