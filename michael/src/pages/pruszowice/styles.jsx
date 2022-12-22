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
  text-align: center;
  margin-bottom: 4%;
`;

export const InfoText = styled.p`
  font-weight: 300;
`;

export const MainImg = styled.img`
  width: 65%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ImagesContainer = styled.div`
  margin-left: 4%;
  margin-right: 4%;

  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RightImg = styled.img`
  width: 70%;
  margin-bottom: 11.5%;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 11.5%;
    margin-bottom: 0%;
  }
`;

export const RightImg2 = styled.img`
  width: 70%;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 11.5%;
  }
`;

export const RightImg3 = styled.img`
  width: 70%;
  display: none;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 11.5%;
  }
`;
