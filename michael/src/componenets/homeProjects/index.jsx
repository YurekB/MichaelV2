import {
  Container,
  Image,
  ProjectContainer,
  Image2,
  ProjectName,
} from "./styles";
import { Link } from "react-router-dom";
import poland from "../../assets/poland/main.JPG";
import cran from "../../assets/cranbrook/main.jpg";
import cuckoo from "../../assets/cuckoo/main.JPG";
import amerland from "../../assets/amerland/main.jpg";

const HomeProjects = () => {
  return (
    <Container>
      <ProjectContainer>
        <Link to="/projects/pruszowice">
          <Image src={poland} />
          <ProjectName>Pruszowice, Poland</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/projects/2">
          <Image2 src={cran} />
          <ProjectName>Cranbrook Road</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/projects/3">
          <Image2 src={cuckoo} />
          <ProjectName>Cuckoo Lane</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/projects/4">
          <Image2 src={amerland} />
          <ProjectName>Amerland Road</ProjectName>
        </Link>
      </ProjectContainer>
    </Container>
  );
};

export default HomeProjects;
