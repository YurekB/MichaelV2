import { useEffect } from "react";
import {
  AboutPage,
  Button,
  ButtonContainer,
  Contact,
  Head,
  MainText,
  MainTextHeader,
  MidContainer,
  MidContainerRight,
  TextContainer,
  TextContainer2,
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
            We are based in Prestwich and offer a range of contemporary,
            creative and personal architectural services. Using our extensive
            expertise we will guide you through all aspects of building design,
            construction and project management.
          </MainText>
          <MainText>
            We are specialising in new build housing, domestic works,
            extensions, loft conversions, whole house refurbishment and
            remodelling.
          </MainText>
          <MainText>
            Contact us if you are planning to extend or alter your home, build a
            new home or if you want to go green and make your home energy
            efficient or if you simply need to ‘draw and explore’ your ideas.
          </MainText>
        </TextContainer>
      </TopInfoSection>
      <MidContainer>
        <Head>Services we offer</Head>
        <MidContainerRight>
          <TextContainer2>
            <MainTextHeader>Site investigation/consultation</MainTextHeader>
            <MainText>
              One-off site visit up to two hours to determine feasibility of
              your project, advice on services required and implication on
              particular design.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>
              Feasibility Study and Outline proposal
            </MainTextHeader>
            <MainText>
              Before full commitment to the project we can offer an initial
              feasibility study to assess viability of your proposed
              requirements.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>Planning/Local Authority approvals</MainTextHeader>
            <MainText>
              Production and submission of documentation for Local Authority
              planning approval including pre- planning consultation and during
              application process liaison.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>Building Control approvals</MainTextHeader>
            <MainText>
              Design/production and submission of construction drawings and
              specification for Building Control approval.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>Tender Documentation</MainTextHeader>
            <MainText>
              Production of suitably detailed documentation for your contractor
              to price.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>
              Detailed Construction Drawings/Specification
            </MainTextHeader>
            <MainText>
              With more complex projects we offer detailed construction drawings
              and specifications including full coordination with the design
              team/consultants and your suppliers.
            </MainText>
          </TextContainer2>

          <TextContainer2>
            <MainTextHeader>Party Wall agreements</MainTextHeader>
            <MainText>
              We provide party wall services inspecting the proposed works and
              possible effects on neighbouring properties, before, after and
              sometimes during construction, in order to report and hopefully
              mitigate damage to the neighbouring properties.
            </MainText>
          </TextContainer2>
          <TextContainer2>
            <MainTextHeader>Free design costs estimate</MainTextHeader>
          </TextContainer2>
        </MidContainerRight>
      </MidContainer>
      <VectorContainer>
        <Vector />
      </VectorContainer>
    </AboutPage>
  );
};

export default About;
