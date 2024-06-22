import styles from "./Text.module.css"

const H3 = (props) => {
  return <h3 className={styles.h3Style}>{props.text}</h3>
};

export default H3;
