import styles from "./Activate.module.css";
import H2 from "../../components/Text/H2";
import P from "../../components/Text/P";
import Strong from "../../components/Text/Strong";
import Anchor from "../../components/Button/Anchor";

const Activate = () => {
  return (
    <section className={styles.activateStyle}>
      <H2 text="Estamos quase lá!" />
      <Strong text="Só mais uma coisa:" />
      <P text="Acesse seu e-mail e clique no link de confirmação para finalizar seu cadastro. 
      Depois disso, clique no botão abaixo e realize seu primeiro login por aqui." />
      <Anchor text="Login" to="/login-user"/>
    </section>
  );
};

export default Activate;
