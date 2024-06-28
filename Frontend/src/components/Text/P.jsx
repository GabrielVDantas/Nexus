import styles from "./Text.module.css";

const P = ({ text }) => {
  return <p className={styles.pStyle}>{text}</p>
};

export default P;
