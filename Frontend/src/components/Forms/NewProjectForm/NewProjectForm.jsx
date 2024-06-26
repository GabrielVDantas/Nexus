import styles from "./NewProjectForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Input/Input";
import H2 from "../../Text/H2";
import P from "../../Text/P";
import Button from "../../Button/Button";
import NewProjectService from "../../../service/projectService/newProjectService";
import NewProjectInput from "../../Input/NewProjectInput";

const NewProjectForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [coverArt, setCoverArt] = useState("");
  const [screenshots, setScreenshots] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await NewProjectService.newProjectService(
        name,
        description,
        goal,
        coverArt,
        screenshots
      );
      if (response && response.status === 201) {
        navigate("/feed-projects");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
    return (
      <section className={styles.newProjectFormStyle}>
        <form onSubmit={submitForm}>
          <H2 text="Insira as informações e crie um novo projeto!" />
          <P text="Seja criativo!" />
          <NewProjectInput 
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            goal={goal}
            setGoal={setGoal}
            setCoverArt={setCoverArt}
            setScreenshots={setScreenshots}
          />
          <Button text="Criar" />
        </form>
      </section>
    );
};
export default NewProjectForm;
