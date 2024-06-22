import styles from "./Text.module.css"

const H2 = (props) => {
  return <h2 className={styles.h2Style}>{props.text}</h2>
};

export default H2;
