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
  Image4,
} from "./styles";

const Wilton = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Wilton Street, Whitefield</Head>
        <InfoCont>
          <InfoText>
            Hip to gable roof extension and loft conversion into habitable room
            including rear dormer
          </InfoText>
        </InfoCont>

        <Image2 src={img.ws1} />

        <Testimonial>Client’s testimonial</Testimonial>
        <TestText>
          Great experience, my wife and I had no prior experience with
          developing or designing an extension. Michael took on our ideas and
          needs, made sensible suggestions, was patient with our inexperience
          and worked with us to produce a fantastic design. He then navigated
          planning for us. Upfront with costs which were entirely reasonable.
          <b> Daniel D.</b>
        </TestText>
      </Inner>
    </Container>
  );
};

export default Wilton;
