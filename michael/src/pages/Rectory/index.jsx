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

const Rectory = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Rectory Lane, Prestwich</Head>
        <InfoCont>
          <InfoText>
            Hip to gable roof extension and loft conversion into habitable room
            including rear dormer
          </InfoText>
        </InfoCont>

        <Image2 src={img.rec1} />
      </Inner>
    </Container>
  );
};

export default Rectory;
