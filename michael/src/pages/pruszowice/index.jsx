import {
  Container,
  Head,
  ImagesContainer,
  InfoCont,
  InfoText,
  MainImg,
  Right,
  RightImg,
  RightImg2,
  RightImg3,
} from "./styles";
import mainInfo from "../../assets/poland/mainIngo.JPG";
import one from "../../assets/poland/1.JPG";
import two from "../../assets/poland/2.JPG";
import three from "../../assets/poland/3.JPG";
import { useEffect } from "react";

const Pruszowice = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);
  return (
    <Container>
      <Head>Pruszowice, Poland</Head>
      <InfoCont>
        <InfoText>
          Group of five terraced houses for local developers on a small plot of
          land near Wroclaw.
        </InfoText>
      </InfoCont>
      <ImagesContainer>
        <MainImg src={mainInfo} />
        <Right>
          <RightImg src={one} />
          <RightImg2 src={two} />
          <RightImg3 src={three} />
        </Right>
      </ImagesContainer>
    </Container>
  );
};

export default Pruszowice;
