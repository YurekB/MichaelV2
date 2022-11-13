import { useEffect } from "react";

const Projects = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("projects");
    window.scrollTo(0, 0);
  }, [setActivePage]);
  return (
    <div className="projects">
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
