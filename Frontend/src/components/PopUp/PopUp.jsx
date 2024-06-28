import Button from "../Button/Button";
import styles from "./PopUp.module.css";
import { LuXCircle } from "react-icons/lu";

const PopUp = ({ isOpen, setOpenNewProject, content }) => {
  if (isOpen) {
    return (
      <section className={styles.popUpStyle}>
        <div>
          <Button
            onClick={() => setOpenNewProject(false)}
            text={<LuXCircle className={styles.iconStyle} />}
          />
          {content}
        </div>
      </section>
    );
  }
};

export default PopUp;
