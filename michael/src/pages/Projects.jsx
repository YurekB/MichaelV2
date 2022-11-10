import { useEffect } from "react";

const Projects = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("projects");
  }, [setActivePage]);
  return (
    <div className="projects">
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
