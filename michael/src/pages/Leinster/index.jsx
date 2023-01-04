import { useEffect } from "react";
import img from "../../assets";
import {
  Container,
  Head,
  InfoCont,
  InfoText,
  Inner,
  Image2,
  Image3,
  LSCont,
  TestText,
  Testimonial,
} from "./styles";

const Leinster = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Leinster Square, Westminster</Head>
        <InfoCont>
          <InfoText>
            Conversion of existing empty Electrical Company vault into habitable
            space comprising a study room and shower set within Grade 2
            Victorian Terraced house.
          </InfoText>
        </InfoCont>
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
      </Inner>
    </Container>
  );
};

export default Leinster;
