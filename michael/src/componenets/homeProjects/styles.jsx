import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 8% 100px 8%;

  @media (max-width: 1000px) {
    margin: 0 2% 0px 2%;
  }
  @media (max-width: 825px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    margin: 0 20px 0px 20px;
  }
`;

export const ProjectContainer = styled.div`
  width: 45%;
  margin-bottom: 50px;

  :hover {
    cursor: pointer;
    opacity: 80%;
    color: #2b2b2b;
  }

  @media (max-width: 825px) {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 395px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 500px) {
    height: auto;
  }
`;

export const ProjectName = styled.p`
  font-size: 30px;
  font-weight: 400;
  margin-top: 15px;
`;

export const Image2 = styled(Image)`
  height: 395px;
  object-fit: cover;
`;
