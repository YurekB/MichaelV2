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

const Garricks = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Garrick’s Ait in Hampton, London</Head>
        <InfoCont>
          <InfoText>
            Single storey extension to house on Thames River Island Extension
            was designed to preserve and enhance river elevation.
          </InfoText>
        </InfoCont>

        <Image2 src={img.g1} />
        <Image2 src={img.g2} />
      </Inner>
    </Container>
  );
};

export default Garricks;
