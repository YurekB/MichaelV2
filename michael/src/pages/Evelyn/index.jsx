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

const Evelyn = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Evelyn Close in Whitton, London</Head>
        <InfoCont>
          <InfoText>
            Extensive two storey rear and side extension and internal floor
            layout alteration to semi detached house in Whitton to convert two
            bedroom house into 4 bedrooms, bathroom, on-suite, large open plan
            kitchen/dining/living, studio, utility etc.
          </InfoText>
        </InfoCont>

        <Image2 src={img.e1} />
        <Image2 src={img.e2} />
      </Inner>
    </Container>
  );
};

export default Evelyn;
