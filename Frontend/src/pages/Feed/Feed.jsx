import styles from "./Feed.module.css";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import GetProjectsService from "../../service/projectService/getProjectsService";

const Feed = () => {
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
    <section className={styles.feedStyle}>
      <Nav />
      {projects.map((project) => {
        return <Card key={project.id} project={project} />;
      })}
    </section>
  );
};

export default Feed;
