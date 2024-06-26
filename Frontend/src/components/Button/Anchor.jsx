import styles from "./Button.module.css"
import { Link as RouterLink } from "react-router-dom";

const Anchor = ({to, text}) => {
  return <RouterLink className={styles.buttonStyle} to={to}>{text}</RouterLink>
};

export default Anchor;
