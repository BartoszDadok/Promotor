import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 80%;
  padding: 0 0.8em;
  @media (max-width: 49em) {
    width: 100%;
    display: flex;
    margin: 1em 0 ;
    flex-direction: column;
  }

`;
export const ParagraphWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const HotelTitleWrapper = styled.a`
  margin: 1em 0;
  width: 100%
`;

export const SingleItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  border: 1px #b8b8b8 solid;
  padding: 1em 1em 0.5em 1em;
  margin-bottom: 2em;
  @media (max-width: 49em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Data = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 49em) {
    justify-content: left;
    align-items: center;
    margin-bottom: 0.3em;

    span {
      text-align: center;
    }
  }
`;

export const Price = styled.p`
  display: inline-block;
  justify-content: right;
  margin-bottom: 0.2em;
  line-height: 1.2;

  span {
    font-weight: 700;
    padding-left: 3px;
  }

  @media (max-width: 49em) {
    justify-content: left;
    margin-bottom: 0.3em;
  }
`

export const Button = styled.div`
  display: flex;
  background-color: #0173d6;
  justify-content: center;
  padding: 0.8em 1em;
  color: white;
  margin: 0.5em 0;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  @media (max-width: 49em) {
    justify-content: left;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.2em;
  padding-top: 2px;
`;

export const LinkWrapper = styled.a`
  display: flex;
  height: fit-content;
  position: relative;
`;

export const ImageWrapper = styled.div<{ busSrc?: string }>`
  position: relative;
  ::after {
    content: url(${ ({ busSrc }) => busSrc });
    background-color: #f5e23f;
    border-radius: 3px;
    padding: 0 0.3em;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
export const AdditionalInformation = styled.div`
  padding: 0.2em 0.2em;
  background-color: #0173d6;
  border: 1px solid #0173d6;
  position: absolute;
  top: -15px;
  right: -1px;
`;

export const DesktopTitle = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 0.2em;
  @media (max-width: 49em) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 49em) {
    display: block;
    margin-bottom: 1em;
  }
`;