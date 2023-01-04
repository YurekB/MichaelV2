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

const Mount = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Mount Pleasant, Waybridge</Head>
        <InfoCont>
          <InfoText>
            Loft conversion and floor remodelling to large Victorian detached
            house in Weybridge. Services included pre-planning consultation,
            planning approval, building control and full detailed construction
            package.
          </InfoText>
        </InfoCont>

        <Image2 src={img.m1} />
        <Image2 src={img.m3} />
        <Image2 src={img.m2} />
      </Inner>
    </Container>
  );
};

export default Mount;
