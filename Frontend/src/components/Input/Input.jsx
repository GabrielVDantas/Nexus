import styles from "./Input.module.css"

const Input = (props) => {
  return (
    <input
      className={styles.inputStyle}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      required={props.required}
      placeholder={props.placeholder}
      multiple={props.multiple}
    />
  );
};

export default Input;
