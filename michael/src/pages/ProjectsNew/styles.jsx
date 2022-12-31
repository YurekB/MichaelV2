import styled from "styled-components";

export const Container = styled.div``;

export const Inner = styled.div`
  width: 700px;
  max-width: 96vw;
  margin-left: 4%;
  @media (max-width: 700px) {
    margin: auto;
    width: fit-content;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    transition: all 0.3s ease;
    @media (max-width: 500px) {
      font-size: 16px;
    }
    :hover {
      font-size: 22px;
      transition: all 0.3s ease;
    }
  }

  span {
    font-weight: 300;
  }
`;

export const Head = styled.h2`
  font-weight: 500;
  font-size: 45px;
  width: 40%;

  margin: 0 0 50px 4%;
  @media (max-width: 700px) {
    margin: auto;
    margin-top: 30px;
  }
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
