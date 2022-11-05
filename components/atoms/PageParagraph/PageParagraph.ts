import styled from "styled-components";
interface Props {
    color?: string,
    textAlign?: string,
    fontWeight?: string,
    margin?: string,
    fontSize?: string,
    fontSizeMedia?: string
}
export const PageParagraph = styled.p<Props>`
  color: ${ ({ color = "black" }) => color };;
  text-align: ${ ({ textAlign }) => textAlign };
  font-weight: ${ ({ fontWeight = "400" }) => fontWeight };
  margin: ${ ({ margin = "0" }) => margin };
  font-size: ${ ({ fontSize }) => fontSize };
  line-height: 1.25em;
  letter-spacing: 0.2px;
  @media (max-width: 50em) {
    font-size: ${ ({ fontSizeMedia }) => fontSizeMedia };
  }
`;