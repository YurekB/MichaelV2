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

const Artisan = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Artisan Road Northampton</Head>
        <InfoCont>
          <InfoText>
            Adaptation of existing office premisses into restaurant
          </InfoText>
        </InfoCont>

        <Image2 src={img.art1} />
      </Inner>
    </Container>
  );
};

export default Artisan;
