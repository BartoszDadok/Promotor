import styled from "styled-components";

export const FilterSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1em;
  background-color: white;

`;
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-bottom: 0.4em;
  width: 100%;
  padding-bottom: 0.5em;

  :last-child {
    border-bottom: none;
  }

  select {
    height: 30px;
  }
`;


export const HeadLineH4 = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  margin: 2em 0;


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

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 9999;

  &.activeFilterPanel {
    display: flex;

  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: #0173d6;
  padding: 1em;
  color: white;
  border: none;
  font-weight: bold;
`;