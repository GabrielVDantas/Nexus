import styles from './Text.module.css';

const P = (props) => {
  return <p className={styles.pStyle}>{props.text}</p>;
};

export default P;
