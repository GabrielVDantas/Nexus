import styles from "./Welcome.module.css"
import P from "../Text/P";
import H2 from "../Text/H2";
import Strong from "../Text/Strong";
import Anchor from "../Button/Anchor";

const Welcome = () => {
  return (
    <section className={styles.welcomeStyle}>
      <H2 text="Seja bem-vindo(a) ao Nexus" />
      <Strong text="Venha jogar aventuras conosco!" />
      <P
        text="Procurando um lugar amigável, divertido e principalmente animado? Aqui
          no Nexus você encontra tudo isso, em nossa comunidade de jogos todos
          tem espaço para crescer e desenvolver os melhores games do mercado!"
      />
      <div className={styles.welcomeAnchorStyle}>
        <Anchor text="Login" />
        <Anchor text="Cadastro" to="/register-user"/>
      </div>
    </section>
  );
};

export default Welcome;
