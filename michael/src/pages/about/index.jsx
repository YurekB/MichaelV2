import { useEffect } from "react";
import {
  AboutPage,
  Button,
  ButtonContainer,
  Contact,
  Head,
  MainText,
  TextContainer,
  TopInfoSection,
  VectorContainer,
} from "./styles";
import { Link } from "react-router-dom";
import Vector from "../../componenets/Vector";

const About = ({ setActivePage, activePage }) => {
  useEffect(() => {
    setActivePage("about");
    window.scrollTo(0, 0);
  }, [setActivePage]);
  return (
    <AboutPage>
      <TopInfoSection>
        <Head>About</Head>
        <TextContainer>
          <MainText>
            We think of architecture not as a single practice, but as several
            interlocking ones. Landscapes are inseparable from structures,
            ecology is inseparable from building requirements, and improving
            human relationships is the ultimate goal of any project. Aesthetic
            movements come and go, but we have found these principles to be
            timeless.
          </MainText>
          <MainText>
            As partners, we strive for honesty and clarity. Our first job is to
            understand the client’s vision and needs, not to present our own. We
            value timeliness, direct communication and prototypes over
            presentations, as well as the occasional face-to-face meeting over a
            drink or a meal.
          </MainText>
          <MainText>
            Over the years, we have been fortunate to collaborate with some
            excellent clients on some wonderful projects, but we believe it is
            still too early to weigh in on the success of the work. A building
            exists in time and its usefulness is directly related to how well it
            continues to perform.
          </MainText>
          <MainText>
            We are proud of our Danish home and heritage, but do not consider
            ourselves exponents of Danish design. National style has no place in
            architecture, where a building must first and foremost be suited to
            local needs.
          </MainText>
        </TextContainer>
      </TopInfoSection>
      <VectorContainer>
        <Vector />
      </VectorContainer>
    </AboutPage>
  );
};

export default About;
