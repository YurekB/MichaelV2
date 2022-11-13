import { useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualProject = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("none");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  const { project_id } = useParams();

  return <p>ind projects: {project_id}</p>;
};
export default IndividualProject;
