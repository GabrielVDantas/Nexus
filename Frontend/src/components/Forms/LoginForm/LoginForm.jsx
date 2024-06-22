import styles from "./LoginForm.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Anchor from "../../Button/Anchor";
import H2 from "../../Text/H2";
import P from "../../Text/P";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await LoginUserService.loginUserRequest({
    //     email,
    //     password,
    //   });
    //   if (response && response.status === 200) {
    //     navigate("/get-feed-projects");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <section className={styles.loginFormStyle}>
      <form onSubmit={submitForm}>
        <H2 text="Olá, seja bem-vindo(a) de volta!" />
        <P text="Entre agora mesmo em sua conta =)" />
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
        <Button text="Entrar em minha conta" />
        <Anchor to="/register-user" text="Ainda não tenho uma conta" />
      </form>
    </section>
  );
};

export default LoginForm;
