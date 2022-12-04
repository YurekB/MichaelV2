import {
  Container,
  Head,
  Image,
  ImagesContainer,
  InfoCont,
  InfoText,
  MainImage,
  TempCont,
} from "./styles";
import { useEffect } from "react";
import main from "../../assets/amerland/main.jpg";
import one from "../../assets/amerland/1.jpg";
import two from "../../assets/amerland/2.jpg";
import three from "../../assets/amerland/3.jpg";
import four from "../../assets/amerland/4.jpg";

const Amerland = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");

    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>34 Amerland Road in Wandsworth, London</Head>
      <InfoCont>
        <TempCont>
          <MainImage src={main} />
          <InfoText>
            Single storey rear extension, internal layout alteration and
            roof/terrace conversion to three storey terraced house. Services
            included planning/building regulation approval, tendering, contract
            management.
          </InfoText>
        </TempCont>
      </InfoCont>

      <ImagesContainer>
        <Image src={one} />
        <Image src={four} />
        <Image src={three} />
        <Image src={two} />
      </ImagesContainer>
    </Container>
  );
};

export default Amerland;
