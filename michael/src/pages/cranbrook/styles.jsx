import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const InfoCont = styled.div`
  text-align: center;
  margin-bottom: 4%;
`;

export const InfoText = styled.p`
  font-weight: 300;
  max-width: 80%;
  margin: auto;
`;

export const ImagesContainer = styled.div`
  margin: 0 4% 0 4%;
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 850px) {
    width: 92%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 35%;
    @media (max-width: 750px) {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 840px;
  /* object-fit: cover; */
  margin-bottom: 5%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Image2 = styled(Image)`
  width: 100%;
  height: 400px;

  margin-bottom: 40px;
  @media (max-width: 750px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: auto;
    height: auto;
  }
`;

export const Testimonial = styled.h3`
  text-align: center;
  font-size: 25px;
`;

export const TestText = styled.p`
  font-weight: 300;
  margin: 0 4% 0 4%;
`;
