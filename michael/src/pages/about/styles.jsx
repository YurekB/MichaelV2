import styled from "styled-components";

export const AboutPage = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  @media (max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`;

export const TopInfoSection = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Head = styled.h2`
  font-weight: 500;
  font-size: 45px;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 30px;
    margin-top: 25px;
    background-color: #38383a;

    width: 100%;
    text-align: center;
    color: white;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    width: fit-content;
  }
`;

export const TextContainer = styled.div`
  width: 60%;
  @media (max-width: 500px) {
    width: 85%;
    margin-top: 25px;
  }
  @media (max-width: 1000px) {
    margin-top: 50px;
    margin: auto;
  }
`;

export const TextContainer2 = styled.div`
  width: 45%;
  @media (max-width: 500px) {
    width: 85%;
    margin-top: 25px;
    margin: auto;
  }
`;

export const MainText = styled.p`
  font-weight: 300;
  margin-bottom: 30px;
`;

export const VectorContainer = styled.div`
  margin-left: -4.5%;
  margin-right: -4.5%;
  margin-top: 100px;
`;

export const MidContainer = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 0.5px solid black;
  @media (max-width: 500px) {
    border-top: none;
    padding-top: 0px;
    margin-top: 0px;
  }
`;

export const MidContainerRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    margin-top: 25px;
  }
`;

export const MainTextHeader = styled.h3`
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;
