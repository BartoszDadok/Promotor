import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  grid-template-columns: 1fr 3fr;
  display: grid;
  grid-gap: 0 1em;
  justify-content: center;
  justify-items: center;
  padding-top: 100px;
  @media (max-width: 1550px) {
    width: 95%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr
  }
`;