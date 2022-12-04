import {
  Container,
  Head,
  Image,
  ImagesContainer,
  InfoCont,
  InfoText,
  MainImage,
} from "./styles";
import { useEffect } from "react";
import main from "../../assets/cuckoo/3.JPG";
import one from "../../assets/cuckoo/1.JPG";
import two from "../../assets/cuckoo/2.JPG";
import three from "../../assets/cuckoo/main.JPG";
import four from "../../assets/cuckoo/4.JPG";

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
      </ImagesContainer>
    </Container>
  );
};

export default Cuckoo;
