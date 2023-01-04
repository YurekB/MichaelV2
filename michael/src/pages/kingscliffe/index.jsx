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

const Kingscliffe = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Kingscliffe Gardens in Wandsworth, London</Head>
        <InfoCont>
          <InfoText>
            Contemporary single storey extension with ground floor new layout
            arrangement to create open plan kitchen/dining/living space with
            utility/storage room. Traditional bricks to the rear wall are
            supplemented by a pre-patinated copper roof with extensive
            glazing/skylights and exposed steel structure.
          </InfoText>
        </InfoCont>

        <Image2 src={img.k1} />
        <Image2 src={img.k2} />
        <Image2 src={img.k3} />
      </Inner>
    </Container>
  );
};

export default Kingscliffe;
