import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 0.5em;
  margin: 1em 0 2em 0;
  border: 1px dashed white;
  border-radius: 3px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  textarea {
    height: 70px;
  }
`;

export const LabelForm = styled.label`
  color: white;
  margin-bottom: 0.2em;
`;
export const InputForm = styled.input`
  border: none;
  padding: 0.6em;
  margin-bottom: 0.6em;
`;
export const SelectForm = styled.select`
  width: 100%;
  border: none;
  padding: 0.4em;
  margin-bottom: 0.6em;
`;
export const ButtonForm = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  background-color: #f5e23f;
  width: 150px;
  border: none;
  padding: 0.5em;
  margin-top: 0.5em;
`;
export const TitleWhite = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 0.3em 0;
  text-align: center;
`;

export const TextArea = styled.textarea`
font-family: inherit;
`;