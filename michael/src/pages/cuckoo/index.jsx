import {
  Container,
  Head,
  Image,
  ImagesContainer,
  InfoCont,
  InfoText,
  MainImage,
  NewContainer,
  SecondContainer,
  Testimonial,
  TestText,
} from "./styles";
import { useEffect } from "react";
import main from "../../assets/cuckoo/3.JPG";
import one from "../../assets/cuckoo/1.JPG";
import two from "../../assets/cuckoo/2.JPG";
import three from "../../assets/cuckoo/main.JPG";
import four from "../../assets/cuckoo/4.JPG";
import eight from "../../assets/cuckoo/eight.jpg";
import seven from "../../assets/cuckoo/seven.jpg";

const Cuckoo = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");

    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>47 Cuckoo Lane, Prestwich</Head>
      <InfoCont>
        <InfoText>
          Hip to gable roof extension and loft conversion into habitable room
          including rear dormer, ground floor two storey rear extension, front
          porch and floor plans remodelling of existing semi detached house.
          Services included pre-application, full planning approval, building
          control approval and detailed construction drawings and specification.
        </InfoText>
      </InfoCont>
      <MainImage src={main} />
      <ImagesContainer>
        <Image src={one} />
        <Image src={four} />
        <Image src={three} />
        <Image src={two} />
        <Image src={seven} />
        <Image src={eight} />
      </ImagesContainer>

      <Testimonial>Client’s testimonial</Testimonial>
      <TestText>
        We used Michael Cupial to draw up plans for our single storey rear
        extension, loft conversion and front porch. Michael was able to bring
        some new perspectives and ideas to the extension that we hadn’t even
        thought of and he provided us with an excellent professional service. We
        were able to get the space we needed to stay in the house and we love
        the final result of our extension. If you need an architect who will
        think outside the box and come up with new ideas to help with the
        planning process then you have to call Michael.
        <b> Claus H.</b>
      </TestText>
    </Container>
  );
};

export default Cuckoo;
