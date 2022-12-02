import styled from "styled-components";

export const HeadLineH3 = styled.h3`
  width: 65%;
  margin: 1.5em auto 1em auto;
  font-size: 1.8rem;
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 60em) {
    margin: 1.5em auto 0.5em auto;
  }
  padding-top: 100px;
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
  @media (max-width: 60em) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    grid-gap: 0 20px;
  }

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