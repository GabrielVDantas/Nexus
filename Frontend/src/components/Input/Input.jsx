import styles from "./Input.module.css"

const Input = ({value, onChange, type, required, placeholder, multiple}) => {
  return (
    <input
      className={styles.inputStyle}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      placeholder={placeholder}
      multiple={multiple}
    />
  );
};

export default Input;
