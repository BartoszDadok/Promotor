import styled from "styled-components";

export const TitleMobile = styled.h2`
  display: none;
  font-size: 2rem;
  margin: 0 0 0.3em 0;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    display: block;
  }
`;