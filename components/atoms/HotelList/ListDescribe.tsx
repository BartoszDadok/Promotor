import styled from "styled-components";

interface PropsList {
    margin?: string;
}
export const ListDescribe = styled.ul<PropsList>`
  list-style: disc;
  padding-left: 1.3em;
  margin: ${ ({ margin = "0" }) => margin };
`;