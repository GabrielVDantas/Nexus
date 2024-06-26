import styles from "./Card.module.css"
import { useState } from "react";
import P from "../Text/P";
import H2 from "../Text/H2";
import Button from "../Button/Button";

const Card = ({ project }) => {
  const [moreInformation, setMoreInformation] = useState(false);

  return (
    <article className={styles.cardStyle}>
      <H2 text={project.name} />
      <P text={project.categories} />
      <img src={project.coverArt} />

      <Button
        text="Ver mais"
        onClick={() => setMoreInformation(!moreInformation)}
      >
        {moreInformation ? "Ver menos" : "Ver mais"}
      </Button>
      {moreInformation && (
        <div>
          <P text={project.description} />
          <P text={project.goal} />
          {project.screenshots.forEach((screenshot, index) => {
            <img key={index} src={screenshot} />
          })}
        </div>
      )}
    </article>
  );
};

export default Card;
