import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

const IndividualProject = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("none");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  const { project_id } = useParams();

  return <Container>proj</Container>;
};
export default IndividualProject;
