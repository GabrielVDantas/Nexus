import styles from './Text.module.css';

const Strong = (props) => {
  return <strong className={styles.strongStyle}>{props.text}</strong>
};

export default Strong;
