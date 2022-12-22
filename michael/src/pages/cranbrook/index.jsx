import {
  Container,
  Head,
  Image,
  ImagesContainer,
  InfoCont,
  InfoText,
  Testimonial,
  TestText,
} from "./styles";
import one from "../../assets/cranbrook/1.jpg";
import two from "../../assets/cranbrook/2.jpg";
import three from "../../assets/cranbrook/3.jpg";
import four from "../../assets/cranbrook/4.jpg";
import five from "../../assets/cranbrook/5.jpg";
import six from "../../assets/cranbrook/6.jpg";

import { useEffect } from "react";

const Cranbrook = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");

    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>30 Cranbrook Road in Chiswick, London</Head>
      <InfoCont>
        <InfoText>
          Single storey extension and internal alteration to floor layout to
          create one open floor plan at ground floor (kitchen/dining/living)
          with full width sliding/folding door at the rear elevation and fully
          glazed roof to side extension. Services included production of
          building regs / construction information, Lighting Layout, Party Wall
          Awards, SAP Assessment
        </InfoText>
      </InfoCont>
      <ImagesContainer>
        <Image src={one} />
        <Image src={two} />
        <Image src={three} />
        <Image src={four} />
      </ImagesContainer>

      <Testimonial>Client’s testimonial</Testimonial>
      <TestText>
        Michael did a great job on the design for the renovation of my 3 bedroom
        terraced house. His designs were well presented and were done quickly
        and he was very patient and accommodating in making any requested
        changes. The work involved a side return extension to the kitchen and
        opening out of the whole ground floor as well as remodelling upstairs
        from 3 bedrooms to 2 plus en-suite closet and second bathroom. He had
        some great ideas and was always a pleasure to deal with. Michael also
        took full responsibility for negotiating the required party wall
        agreements and liaising with the structural engineer and with local
        authority requirements. He did a lighting and electrical plan for the
        whole building. I found him patient, flexible, calm and very reasonably
        priced. I am very happy with the work he did. <b>Clare F.</b>
      </TestText>
    </Container>
  );
};

export default Cranbrook;
