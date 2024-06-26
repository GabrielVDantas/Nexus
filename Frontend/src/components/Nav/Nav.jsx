import styles from "./Nav.module.css";
import { LuGlobe2 } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import Anchor from "../Button/Anchor";
import { useState } from "react";
import Button from "../Button/Button";

const Nav = () => {
  const [openNewProject, setOpenNewProject] = useState(false);

  return (
    <nav className={styles.navStyle}>
      <ul>
        <li>
          <Anchor
            to="/feed-projects"
            text={<LuGlobe2 className={styles.iconStyle} />}
          />
        </li>
        <li>
          <Button text={<LuClipboardEdit className={styles.iconStyle} />}/>
          <Anchor
            to="/new-project"
            text={<LuClipboardEdit className={styles.iconStyle} />}
          />
        </li>
        <li>
          <LuUserCircle className={styles.iconStyle} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
