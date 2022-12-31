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
import cuckoo from "../../assets/cuckoo/3.JPG";
import amerland from "../../assets/amerland/main.jpg";

const HomeProjects = () => {
  return (
    <Container>
      <ProjectContainer>
        <Link to="/pruszowice">
          <Image src={poland} />
          <ProjectName>Pruszowice, Poland</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/cranbrook">
          <Image2 src={cran} />
          <ProjectName>Cranbrook Road</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/cuckoo">
          <Image2 src={cuckoo} />
          <ProjectName>Cuckoo Lane</ProjectName>
        </Link>
      </ProjectContainer>
      <ProjectContainer>
        <Link to="/amerland">
          <Image2 src={amerland} />
          <ProjectName>Amerland Road</ProjectName>
        </Link>
      </ProjectContainer>
    </Container>
  );
};

export default HomeProjects;
