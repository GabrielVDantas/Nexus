import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetProjectsService from "../../service/projectService/getProjectsService";
import P from "../Text/P";
import Button from "../Button/Button";
import Span from "../Text/Span";

const CardExtended = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({ screenshots: [] });

  useEffect(() => {
    async function getMoreInformation() {
      const response = await GetProjectsService.getProjectInformationService(projectId);
      if (response && response.status === 200) {
        setProject(response.data.project);
      }
    }
    getMoreInformation();
  }, []);
  return (
    <section>
      <article key={project.id}>
        <Span text={project.name} />
        <P text={project.description} />
        <P text={project.goal} />
        {project.screenshots.forEach((screenshot, index) => (
          <div key={index}>
            <img src={screenshot}/>
          </div>
        ))}
        <div>
          <Button text="Doar" onClick={() => projectDonation()} />
          <Button text="Sobre o desenvolvedor" onClick={() => getUserProfile()} />
        </div>
      </article>
    </section>
  );
};

export default CardExtended;
