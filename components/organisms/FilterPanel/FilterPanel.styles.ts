import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.3em 0;
  width: 100%;
  padding-bottom: 0.5em;
  border-bottom: 1px #0173d6 solid;

  :last-child {
    border-bottom: none;
  }

  select {
    height: 30px;
  }
`;

export const FilterSidebar = styled.div`
  width: 350px;
  height: fit-content;
  border: 3px #0173d6 solid;
  padding: 1em;
  @media (max-width: 1200px) {
    width: 260px;
  }
  @media (max-width: 60em) {
    display: none;
  }
`;

export const HeadLineH4 = styled.h3`
  text-align: center;
  font-size: 1.2rem;

`;

export const Input = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 0.3em;

`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2em 0;
`;


export const Label = styled.label`
  display: flex;
  justify-content: center;

`;

export const LabelSelect = styled.label`
  font-weight: bold;
  padding: 0.2em 0 0.3em 0;
`;

export const Legend = styled.legend`
  padding: 0.2em 0;
  font-weight: bold;
`;


export const Select = styled.select`
  margin-bottom: 0.4em;
  margin-top: 0.2em;
  padding-right: 0.5em;
`;