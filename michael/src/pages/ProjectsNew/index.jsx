import { Container, Head, Inner, Secondary } from "./styles";
import projectsArray from "../../data/projects";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import img from "../../assets";

const ProjectsNew = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("projects");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Secondary>
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
      </Secondary>
      <img src={img.ls3} />
    </Container>
  );
};

export default ProjectsNew;
