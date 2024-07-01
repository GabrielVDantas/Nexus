import { useEffect, useState } from "react";
import Inside from "../../components/Container/Inside/Inside";
import GetProjectsService from "../../service/projectService/getProjectsService";
import Card from "../../components/Card/Card";

const NewFeed = () => {
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
    <Inside
      rightContent={projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    />
  );
};

export default NewFeed;
