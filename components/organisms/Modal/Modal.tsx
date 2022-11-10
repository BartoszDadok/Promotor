import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: none;
  pointer-events: none;
  position: absolute;
  background-color: #ffc8c8;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &.active {
    display: block;
    pointer-events: all;
  }
`;
const Gallery = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 100px 1fr 100px;
`;
const Modal = ({ modalIsActive }: { modalIsActive: boolean }) => {
    return (
        <ModalWrapper className={ modalIsActive ? "active" : "" }>
            <Gallery>
                <div>Arrow</div>
                <div>Image</div>
                <div>Arrow</div>
            </Gallery>
        </ModalWrapper>
    );
};

export default Modal;