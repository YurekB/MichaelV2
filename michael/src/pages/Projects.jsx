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
  Image2,
  Image3,
  InfoText,
  LSCont,
  ProjContainer,
  Testimonial,
  TestText,
} from "./styles";
import rectory from "../assets/rectory.jpg";
import artisan from "../assets/45.jpg";
import sandycroft from "../assets/sandycroft.jpg";
import img from "../assets";

const Projects = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("projects");
    // window.scrollTo(0, 0);
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
        <Heading>Leinster Square, Westminster</Heading>
        <InfoText>
          Conversion of existing empty Electrical Company vault into habitable
          space comprising a study room and shower set within Grade 2 Victorian
          Terraced house.
        </InfoText>
        <Image2 src={img.ls1} />
        <LSCont>
          <Image3 src={img.ls2} />
          <Image3 src={img.ls3} />
        </LSCont>
        <Image2 src={img.ls4} />
        <Testimonial>Client’s testimonial</Testimonial>
        <TestText>
          Michael helped me to convert an old Victorian vault area in my next
          office! Not the easiest of the projects given my building is grade II
          listed in central London. Michael has been attentive, measured in
          thinking of possible solutions and at the end we made it! creative,
          precise and pragmatic - I would definitely recommend him.
          <b> Gianluca M.</b>
        </TestText>
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
