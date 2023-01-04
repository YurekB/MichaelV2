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

const Chretien = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Chretien Road, Northenden</Head>
        <InfoCont>
          <InfoText>
            Two storey rear extension to semi detached house in Northenden
            including basement, raised platform deck and lower subterranean
            deck.
          </InfoText>
        </InfoCont>

        <Image2 src={img.cr1} />
      </Inner>
    </Container>
  );
};

export default Chretien;
