import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const Form = styled.form`
  border: 0.15rem solid #9da2a742;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 27px;
  border: 0.1px solid #2121215e;
  border-radius: 5px;
  background-color: #77c4ff;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 50px;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
