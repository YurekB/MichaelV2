import styled from "styled-components";

export const Container = styled.div``;

export const Inner = styled.div`
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

export const InfoCont = styled.div`
  text-align: center;
  margin-bottom: 4%;
  padding: 0 4%;
`;

export const InfoText = styled.p`
  font-weight: 300;
`;

export const Image2 = styled.img`
  width: 80%;
  margin-bottom: 20px;
`;
export const Image3 = styled.img`
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 4%;
  }
`;
export const Image4 = styled.img`
  width: 35%;
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 4%;
  }
`;
export const LSCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Testimonial = styled.h3`
  text-align: center;
  font-size: 25px;
`;

export const TestText = styled.p`
  font-weight: 300;
  margin: 0 4% 5% 4%;
`;
