import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Anchor from "../../Button/Anchor";
import H2 from "../../Text/H2";
import P from "../../Text/P";
import LoginUserService from "../../../service/userService/loginUserService";
import LoginUserInput from "../../Input/LoginUserInput";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUserService.loginUserService(email, password);
      if (response && response.status === 200) {
        navigate("/feed-projects");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.loginFormStyle}>
      <form onSubmit={submitForm}>
        <H2 text="Olá, seja bem-vindo(a) de volta!" />
        <P text="Entre agora mesmo em sua conta =)" />
        <LoginUserInput
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Button text="Entrar" />
        <Anchor to="/register-user" text="Ainda não tenho uma conta" />
      </form>
    </section>
  );
};

export default LoginForm;
