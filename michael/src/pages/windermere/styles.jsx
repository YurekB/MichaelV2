import styled from "styled-components";

export const Container = styled.div``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 85%;
    margin-bottom: 4%;
  }
`;

export const Head = styled.h2`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const InfoCont = styled.div`
  text-align: center;
  margin-bottom: 4%;
  padding: 0 4%;
`;

export const InfoText = styled.p`
  font-weight: 300;
`;
