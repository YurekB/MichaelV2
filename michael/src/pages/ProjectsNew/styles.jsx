import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  width: 96%;
  max-width: 96vw;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  @media (max-width: 710px) {
    width: 92%;
  }

  @media (max-width: 500px) {
    margin-left: 4%;
  }

  div {
    width: 30.3%;
    margin-bottom: 50px;
    @media (max-width: 710px) {
      width: 48%;
      margin-bottom: 0px;
      margin-top: 20px;
    }
    :hover {
      opacity: 80%;
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      @media (max-width: 710px) {
        height: 150px;
      }
    }
  }
  p {
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 500px) {
      font-size: 16px;
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

  margin: 0 0 50px 0;
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

export const Secondary = styled.div`
  margin-left: 4%;
  width: 100%;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;
