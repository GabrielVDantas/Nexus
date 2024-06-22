import styles from "./Button.module.css"
import { Link as RouterLink } from "react-router-dom";

const Anchor = (props) => {
  return <RouterLink className={styles.buttonStyle} to={props.to}>{props.text}</RouterLink>
};

export default Anchor;
