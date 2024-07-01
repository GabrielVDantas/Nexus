import H2 from "../Text/H2";
import P from "../Text/P"
import Strong from "../Text/Strong";
import Button from "../Button/Button";
import Card from "../Card/Card";

const About = ({ userData }) => {

  return (
    <section>
      <H2 text="Seus dados" />
      <Strong text={userData.username} />
      <P text={userData.email} />
      <div>
        <Button text="Atualizar conta" />
        <Button text="Deletar conta" />
      </div>
      <H2 text="Projetos" />
      {/* <div>
        {userData.projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div> */}
    </section>
  );
};

export default About;
