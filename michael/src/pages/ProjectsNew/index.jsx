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
              <div>
                <Link to={proj.link}>
                  <img src={proj.img} />
                  <p>{proj.name}</p>
                </Link>
              </div>
            );
          })}
        </Inner>
      </Secondary>
    </Container>
  );
};

export default ProjectsNew;
