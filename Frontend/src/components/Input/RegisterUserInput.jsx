// FormInputs.js
import React from 'react';
import Input from './Input';

const RegisterUserInput = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword
}) => {
  return (
    <>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
        type="text"
        placeholder="Nome..."
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
        type="email"
        placeholder="E-mail..."
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        type="password"
        placeholder="Senha..."
      />
      <Input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required={true}
        type="password"
        placeholder="Confirme a senha..."
      />
    </>
  );
};

export default RegisterUserInput;
