import { useEffect } from "react";
import img from "../../assets";
import { Container, Head, InfoCont, InfoText, Inner } from "./styles";

const Windermere = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("");
    window.scrollTo(0, 0);
  }, [setActivePage]);

  return (
    <Container>
      <Inner>
        <Head>Windermere Road, Ealing London</Head>
        <InfoCont>
          <InfoText>
            Single storey ground floor extension, internal floor remodelling and
            loft conversion to Victorian terraced house in Ealing.
          </InfoText>
        </InfoCont>
        <img src={img.w1} />
        <img src={img.w2} />
        <img src={img.w3} />
        <img src={img.w4} />
      </Inner>
    </Container>
  );
};

export default Windermere;
