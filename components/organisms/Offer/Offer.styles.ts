import styled from "styled-components";

export const HeadLineH3 = styled.h3`
  width: 65%;
  margin: 1.5em auto 1em auto;
  font-size: 1.8rem;
  @media (max-width: 1400px) {
    width: 80%;
  }

`;

export const OfferWrapper = styled.section`
  width: 65%;
  margin: 1em auto 3em auto;
  display: grid;
  grid-gap: 0 50px;
  grid-template-columns: 1fr 3fr;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    grid-gap: 0 20px;
  }
`;
export const FilterSidebar = styled.div`
  width: 320px;
  height: fit-content;
  border: 3px #0173d6 solid;
  padding: 1em;
  @media (max-width: 1200px) {
    width: 260px;
  }
`;
export const Select = styled.select`
  margin-bottom: 0.4em;
  margin-top: 0.2em;
`;
export const LabelSelect = styled.label`
  font-weight: bold;
  padding: 0.2em 0 0.3em 0;
`;
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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2em 0;
`;

export const Input = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 0.3em;

`;

export const Label = styled.label`
  display: flex;
  justify-content: center;

`;

export const Legend = styled.legend`
  padding: 0.2em 0;
  font-weight: bold;
`;

export const HeadLineH4 = styled.h3`
  text-align: center;
  font-size: 1.2rem;

`;

export const Items = styled.div`
  width: 100%;
`;



export const FilterWrapper = styled.div`
  margin: 0.5em 0;
  border: 1px #b8b8b8 solid;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const FilterH3 = styled.h3`;
  display: block;
  padding: 0.3em 0.6em;
  position: relative;
  margin: 0.2em 0 0.2em 0.4em;
`;
export const Filter = styled.span`;
  display: block;
  background-color: #f5e23f;
  padding: 0.3em 0.6em;
  margin: 0.2em 0 0.2em 0.4em;
`;