import styles from "./Active.module.css";
import H2 from "../../components/Text/H2";
import P from "../../components/Text/P";
import Strong from "../../components/Text/Strong";

const Active = () => {
  return (
    <section className={styles.activeStyle}>
      <H2 text="Cadastro concluído!" />
      <Strong text="Seja bem-vindo(a) a nossa plataforma!" />
      <P text="Agora está tudo pronto. Clique no botão abaixo e realize seu primeiro login por aqui." />
    </section>
  );
};

export default Active;
