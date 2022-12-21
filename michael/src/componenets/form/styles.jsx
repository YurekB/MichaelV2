import styled from "styled-components";

export const Input = styled.input`
  height: 35px;
  background-color: #f8f5f5;
  border: 0.7px solid rgba(17, 5, 68, 0.5);
  padding-left: 15px;

  :hover {
    background-color: #e0e0e0;
  }

  :focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

export const ThankContainer = styled.div``;

export const ThankHead = styled.h2`
  font-weight: 500;
  font-size: 45px;
  @media (max-width: 500px) {
    font-size: 30px;
    margin-left: 4%;
  }
`;

export const ThankText = styled.p`
  width: 80%;
  font-weight: 300;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 16px;
    margin-left: 4%;
  }
`;

export const EmailInput = styled.input`
  height: 35px;
  background-color: #f8f5f5;

  border: 0.7px solid rgba(17, 5, 68, 0.5);
  padding-left: 15px;

  :hover {
    background-color: #e0e0e0;
  }

  :focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  height: 100px;
  background-color: #f8f5f5;

  border: 0.7px solid rgba(17, 5, 68, 0.5);
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;

  :hover {
    background-color: #e0e0e0;
  }

  :focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

export const Button = styled.button`
  width: 35%;
  height: 60px;
  background-color: black;
  margin-top: 10px;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #38383a;
  }
`;

export const FormContainer = styled.div`
  margin-top: 40px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    width: 92%;
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const FormTopContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 500px) {
    width: 92%;
    margin: auto;
  }
`;
