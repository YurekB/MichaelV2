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

const Ladysmith = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Ladysmith Road, Didsbury</Head>
        <InfoCont>
          <InfoText>
            Single storey rear extension and internal floor remodelling to
            terraced house in Didsbury.
          </InfoText>
        </InfoCont>
        <Image2 src={img.ld1} />
        <LSCont>
          <Image3 src={img.ld3} />
          <Image4 src={img.ld2} />
        </LSCont>

        <Testimonial>Client’s testimonial</Testimonial>
        <TestText>
          Great vision and a professional service.
          <b> Julian M.</b>
        </TestText>
      </Inner>
    </Container>
  );
};

export default Ladysmith;
