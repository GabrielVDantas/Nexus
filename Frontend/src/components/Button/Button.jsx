import styles from "./Button.module.css"

const Button = (props) => {
  return <button className={styles.buttonStyle} >{props.text}</button>
};

export default Button;
