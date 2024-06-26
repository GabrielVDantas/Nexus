import styles from "./Button.module.css"

const Button = ({onClick, text}) => {
  return <button className={styles.buttonStyle} onClick={onClick} >{text}</button>
};

export default Button;
