import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: block;
  margin: 0.5em 0 2em 0;
  width: 100%;
  @media (min-width: 1000px) {
    display: none;

  }
`;

export const Gallery = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.5/1;
  margin: 0 auto;
  display: grid;

  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 100%;
`;

export const ButtonArrow = styled.button<{ direction: string }>`
  position: absolute;
  z-index: 100;
  top: 50%;
  ${ ({ direction }) => direction === "left" ? "left" : "right" }: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #0173d6;
  padding: 4px;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Counter = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f4f4f4;
  padding: 4px;
  border-radius: 2px;
`;