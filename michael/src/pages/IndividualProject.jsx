import { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsArray from "../data/data";

const IndividualProject = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("none");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  const { project_id } = useParams();
  const project = projectsArray[project_id];
  const { name, location, img, info } = project;

  return (
    <div className="individual-project">
      <h2>{name}</h2>
      <img src={img} />
      <h3>{location}</h3>
      <p>{info}</p>
    </div>
  );
};
export default IndividualProject;
