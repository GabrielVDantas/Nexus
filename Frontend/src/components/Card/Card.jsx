import { useEffect, useState } from "react";
import H3 from "../Text/H3";
import GetProjectsService from "../../service/projectService/getProjectsService";
import P from "../Text/P";

const Card = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getFeedProjects() {
      try {
        const response = await GetProjectsService.getFeedProjectsService();
        if (response && response.status === 200) {
          setProjects(response.data.projects);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getFeedProjects();
  }, []);

  return (
    <section>
      {projects.forEach((project) => (
        <div key={project.id}>
          <H3 text={project.name}/>
          <P text={project.description}/>
          <img src={project.coverArt}/>
        </div>
      ))}
    </section>
  )
};

export default Card;
