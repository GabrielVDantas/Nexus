import styles from "./Nav.module.css";
import { LuGlobe2 } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import Anchor from "../Button/Anchor";
import { useState } from "react";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";
import NewProjectForm from "../Forms/NewProjectForm/NewProjectForm";

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
          <Button
            onClick={() => {
              setOpenNewProject(true);
            }}
            text={<LuClipboardEdit className={styles.iconStyle} />}
          />
          <PopUp
            isOpen={openNewProject}
            setOpenNewProject={setOpenNewProject}
            content={<NewProjectForm />}
          />
        </li>
        <li>
          <Anchor to={"/profile-user"} text={<LuUserCircle className={styles.iconStyle} />} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
