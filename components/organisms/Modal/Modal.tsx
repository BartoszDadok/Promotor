import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { faChevronRight, faChevronLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalWrapper = styled.div`
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
  grid-template-rows: 80%;
`;

const ButtonArrow = styled.button`
  display: block;
  height: 100%;
  cursor: pointer;
  border: none;
  background-color: white;
  padding: 0;
  margin: 0;
`;
const ExitButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 30px;

`;

const Modal = ({ modalData, setModalData, images }: {
    modalData: any,
    setModalData: any,
    images: any
}) => {
    const modalRef = useRef(null);
    const isActive = modalData.isActive;

    const handleClickArrow = (e: string) => {
        if (e === "right") {
            const isLastSlide = modalData.id === images.length - 1;
            const newID = isLastSlide ? 0 : modalData.id + 1;

            setModalData({ isActive: true, id: newID });
        }

        if (e === "left") {
            const isFirstSlide = modalData.id === 0;
            const newID = isFirstSlide ? images.length - 1 : modalData.id - 1;
            setModalData({ isActive: true, id: newID });
        }
    };

    const handleExitButton = () => {
        setModalData({ isActive: false, id: null });
    };
    const handleArrowKeys = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            const isLastSlide = modalData.id === images.length - 1;
            const newID = isLastSlide ? 0 : modalData.id + 1;
            setModalData({ isActive: true, id: newID });
        }
        if (e.key === "ArrowLeft") {
            const isFirstSlide = modalData.id === 0;
            const newID = isFirstSlide ? images.length - 1 : modalData.id - 1;
            setModalData({ isActive: true, id: newID });
        }
    };

    const closeModal = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setModalData({ isActive: false, id: null });
        }
    };

    useEffect(() => {
        if (!modalData.isActive) return;
        // @ts-ignore
        window.addEventListener("keydown", handleArrowKeys);
        return () => window.removeEventListener("keydown", handleArrowKeys);
    }, [modalData.id, modalData.isActive]);


    useEffect(() => {
        if (!modalData.isActive) return;

        document.addEventListener("keydown", closeModal);

        return () => document.removeEventListener("keydown", closeModal);

    });
    useEffect(() => {
        if (modalData.isActive) {
            document.body.classList.add("galleryIsActive");
        } else {
            document.body.classList.remove("galleryIsActive");
        }
    }, [modalData.isActive]);

    const slide = images[modalData.id] || images[0];

    return (
        <ModalWrapper ref={ modalRef } className={ isActive ? "active" : "" }>
            <ExitButton onClick={ () => handleExitButton() }>
                <FontAwesomeIcon width={ "45px" } color={ "#353535" } icon={ faCircleXmark }/>
            </ExitButton>
            <Gallery>
                <ButtonArrow onClick={ () => handleClickArrow("left") }>
                    <FontAwesomeIcon width={ "45px" } color={ "#000" } icon={ faChevronLeft }/>
                </ButtonArrow>
                <ImageWrapper>
                    <div>
                        <Image style={ { borderRadius: "20px" } } objectFit={ "contain" } layout={ "fill" }
                               alt={ slide.title }
                               src={ slide.url }/>
                    </div>
                </ImageWrapper>
                <ButtonArrow onClick={ () => handleClickArrow("right") }>
                    <FontAwesomeIcon width={ "45px" } color={ "#000" } icon={ faChevronRight }/>
                </ButtonArrow>
            </Gallery>
        </ModalWrapper>
    );
};

export default Modal;