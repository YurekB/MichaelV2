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

const Lillie = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>35 Lillie Road in Fulham, London</Head>
        <InfoCont>
          <InfoText>
            Two storey extension of existing first floor flat above driveway
            into three floors maisonette.
          </InfoText>
        </InfoCont>

        <Image2 src={img.l1} />
      </Inner>
    </Container>
  );
};

export default Lillie;
