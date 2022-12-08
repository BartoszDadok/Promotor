import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: block;
  @media (max-width: 1000px) {
    display: none;

  }
`;

export const FirstRow = styled.div`
  width: 100%;
  display: grid;
  height: 400px;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
  "smallImage bigImage"
  "smallImage2 bigImage";
`;

export const SecondRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 0 0.5em;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
`;
export const SingleImage1 = styled.div`
  grid-area: smallImage;
  width: 100%;
  display: block;
  position: relative;

  :hover {
    filter: brightness(85%);
  }
`;

export const SingleImage2 = styled.div`
  grid-area: smallImage2;
  width: 100%;
  display: block;
  position: relative;

  :hover {
    filter: brightness(85%);
  }
`;

export const SingleImage = styled.div`
  width: 100%;
  display: block;
  height: 130px;
  position: relative;
  @media (max-width: 1400px) {
    height: 110px;
  }
  @media (max-width: 1300px) {
    height: 100px;
  }
  @media (max-width: 1100px) {
    height: 90px;
  }

  :hover {
    filter: brightness(85%);
  }

  p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
  }
`;

export const BigImage = styled.div`
  display: grid;
  position: relative;
  grid-area: bigImage;
  width: 100%;

  :hover {
    filter: brightness(85%);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;