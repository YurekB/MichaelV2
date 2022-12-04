import styled from "styled-components";

export const ProjContainer = styled.div`
  border-bottom: 0.5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Head = styled.h2`
  margin-left: 4%;
  font-weight: 500;
  font-size: 45px;
  margin-bottom: -30px;
`;

export const Heading = styled.h3`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

export const InfoText = styled.p`
  font-weight: 300;
  margin-bottom: 3%;
  text-align: center;
`;

export const Image = styled.img`
  width: 60%;
`;

export const BackToTop = styled.div`
  width: 100px;
  padding: 5px 0 5px 0;
  background-color: #cdcdcd;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  position: fixed;
  bottom: 5%;

  left: 3%;
  :hover {
    cursor: pointer;
  }
`;
