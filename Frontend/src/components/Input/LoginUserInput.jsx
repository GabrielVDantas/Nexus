import React from "react";
import Input from "./Input";

const LoginUserInput = ({email, setEmail, password, setPassword}) => {
  return (
    <>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
        type="email"
        placeholder="E-mail..."
        multiple={false}
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        type="password"
        placeholder="Senha..."
        multiple={false}
      />
    </>
  );
};

export default LoginUserInput;
