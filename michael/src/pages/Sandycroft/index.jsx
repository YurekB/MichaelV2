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

const Sandycroft = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Sandycroft Road, Deeside</Head>
        <InfoCont>
          <InfoText>
            6 nos. of industrial units with ancillary parking and delivery
            access area at land lying on the south side of Factory Road,
            Sandycroft, Deeside
          </InfoText>
        </InfoCont>

        <Image2 src={img.s1} />
      </Inner>
    </Container>
  );
};

export default Sandycroft;
