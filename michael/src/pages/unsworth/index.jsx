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

const Unsworth = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Unsworth Street, Radcliffe</Head>
        <InfoCont>
          <InfoText>
            Minor residential development consisting of traditional 16nos. of
            semi detached houses on derelict land (regeneration project) for
            private developers.
          </InfoText>
        </InfoCont>

        <Image2 src={img.r1} />
        <Image2 src={img.r2} />
      </Inner>
    </Container>
  );
};

export default Unsworth;
