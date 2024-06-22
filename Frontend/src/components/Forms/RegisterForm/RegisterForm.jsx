import styles from "./RegisterForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "../../Text/H2";
import P from "../../Text/P";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Anchor from "../../Button/Anchor";
import RegisterUserService from "../../../service/userService/registerUserService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await RegisterUserService.registerUserService(
        username,
        email,
        password,
        confirmPassword
      );
      if (response && response.status === 201) {
        navigate("/login-user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.registerFormStyle}>
      <form onSubmit={submitForm}>
        <H2 text="Olá, seja bem-vindo(a) ao Nexus!" />
        <P text="Vamos criar uma conta!?" />
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
        <Button text="Criar conta" />
        <Anchor to="/login-user" text="Já tenho uma conta" />
      </form>
    </section>
  );
};

export default RegisterForm;
