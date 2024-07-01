import styles from "./Inside.module.css";
import Nav from "../../Nav";

const Inside = ({ rightContent }) => {
  return (
    <section className={styles.insideContainer}>
      <Nav />
      {rightContent}
    </section>
  );
};

export default Inside;
