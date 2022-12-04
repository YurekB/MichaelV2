import { useEffect } from "react";
import Amerland from "./amerland";
import Cranbrook from "./cranbrook";
import Cuckoo from "./cuckoo";
import Pruszowice from "./pruszowice";
import {
  BackToTop,
  Head,
  Heading,
  Image,
  InfoText,
  ProjContainer,
} from "./styles";
import rectory from "../assets/rectory.jpg";
import artisan from "../assets/45.jpg";
import sandycroft from "../assets/sandycroft.jpg";

const Projects = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("projects");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="projects">
      <Head>Projects</Head>
      <BackToTop onClick={onClick}>Back to top</BackToTop>
      <ProjContainer>
        <Pruszowice activePage={activePage} setActivePage={setActivePage} />
      </ProjContainer>
      <ProjContainer>
        <Cranbrook activePage={activePage} setActivePage={setActivePage} />
      </ProjContainer>
      <ProjContainer>
        <Cuckoo activePage={activePage} setActivePage={setActivePage} />
      </ProjContainer>
      <ProjContainer>
        <Amerland activePage={activePage} setActivePage={setActivePage} />
      </ProjContainer>
      <ProjContainer>
        <Heading>Sheepfoot Lane, Prestwich</Heading>
        <InfoText>
          Loft conversion into habitable room including rear dormers and
          internal floor reconfiguration.
        </InfoText>
      </ProjContainer>
      <ProjContainer>
        <Heading>Leinster Square, Westminster</Heading>
        <InfoText>
          Loft conversion into habitable room including rear dormers and
          internal floor reconfiguration.
        </InfoText>
      </ProjContainer>
      <ProjContainer>
        <Heading>Rectory Lane, Prestwich</Heading>
        <InfoText>
          Hip to gable roof extension and loft conversion into habitable room
          including rear dormer
        </InfoText>
        <Image src={rectory} />
      </ProjContainer>
      <ProjContainer>
        <Heading>Artisan Road Northampton</Heading>
        <InfoText>
          Adaptation of existing office premisses into restaurant
        </InfoText>
        <Image src={artisan} />
      </ProjContainer>
      <ProjContainer>
        <Heading>Sandycroft Road, Deeside</Heading>
        <InfoText>
          Proposed 6 nos. of industrial units with ancillary parking and
          delivery access area at land lying on the south side of Factory Road,
          Sandycroft, Deeside
        </InfoText>
        <Image src={sandycroft} />
      </ProjContainer>
      <ProjContainer>
        <Heading>head</Heading>
        <InfoText>text</InfoText>
      </ProjContainer>
      <ProjContainer>
        <Heading>head</Heading>
        <InfoText>text</InfoText>
      </ProjContainer>
    </div>
  );
};

export default Projects;
