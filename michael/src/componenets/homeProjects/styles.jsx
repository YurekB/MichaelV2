import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 8% 100px 8%;
  justify-content: space-between;
`;

export const ProjectContainer = styled.div`
  width: 45%;
  margin-bottom: 50px;
  :hover {
    cursor: pointer;
    opacity: 80%;
    color: #2b2b2b;
  }
`;

export const Image = styled.img`
  height: 395px;
  width: 100%;
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
