import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 150px;
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
  margin-bottom: 4%;
`;

export const InfoText = styled.p`
  font-weight: 300;
  max-width: 80%;
  margin: auto;
`;

export const ImagesContainer = styled.div`
  margin: 3% 4% 0 4%;
  width: 92%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 47.5%;
  height: 500px;
  object-fit: cover;
  margin-bottom: 5%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 35%;
  margin-left: 4%;
  margin-right: 4%;
  @media (max-width: 500px) {
    width: 92%;
  }
`;

export const TempCont = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
