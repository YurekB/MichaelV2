import { Container, Head, Inner } from "./styles";
import projectsArray from "../../data/projects";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProjectsNew = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("projects");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Head>Projects</Head>

      <Inner>
        {projectsArray.map((proj) => {
          return (
            <Link to={proj.link}>
              <p>
                {"> "}
                {proj.name}
              </p>
            </Link>
          );
        })}
      </Inner>
    </Container>
  );
};

export default ProjectsNew;
