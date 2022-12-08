import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: none;
  pointer-events: none;
  position: absolute;
  background-color: white;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &.active {
    display: block;
    pointer-events: all;
  }
`;
export const Gallery = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 80%;
`;

export const ButtonArrow = styled.button`
  display: block;
  height: 100%;
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 0;
  margin: 0;
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

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 30px;
`;