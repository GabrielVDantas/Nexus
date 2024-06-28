import styles from "./Input.module.css"

const Input = ({value, onChange, type, required, placeholder, multiple, name}) => {
  return (
    <input
      className={styles.inputStyle}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      placeholder={placeholder}
      multiple={multiple}
      name={name}
    />
  );
};

export default Input;
