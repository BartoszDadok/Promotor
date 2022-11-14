import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import angelo1 from "../../../public/assets/hotels/angelo/1.jpg";
import angelo2 from "../../../public/assets/hotels/angelo/2.jpg";
import angelo3 from "../../../public/assets/hotels/angelo/3.jpg";
import angelo4 from "../../../public/assets/hotels/angelo/4.jpg";
import angelo5 from "../../../public/assets/hotels/angelo/5.jpg";
import angelo6 from "../../../public/assets/hotels/angelo/6.jpg";
import angelo7 from "../../../public/assets/hotels/angelo/7.jpg";
import angelo8 from "../../../public/assets/hotels/angelo/8.jpg";
import angelo9 from "../../../public/assets/hotels/angelo/9.jpg";
import angelo10 from "../../../public/assets/hotels/angelo/10.jpg";
import angelo11 from "../../../public/assets/hotels/angelo/11.jpg";
import angelo12 from "../../../public/assets/hotels/angelo/12.jpg";
import angelo13 from "../../../public/assets/hotels/angelo/13.jpg";
import angelo14 from "../../../public/assets/hotels/angelo/14.jpg";
import angelo15 from "../../../public/assets/hotels/angelo/15.jpg";
import angelo16 from "../../../public/assets/hotels/angelo/16.jpg";
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

const Modal = ({ modalData, setModalData }: {
    modalData: any
    setModalData: any
}) => {
    const isActive = modalData.isActive;

    const handleClickArrow = (e: string) => {
        if (e === "right") {
            const isLastSlide = modalData.id === slides.length - 1;
            const newID = isLastSlide ? 0 : modalData.id + 1;

            setModalData({ isActive: true, id: newID });
        }

        if (e === "left") {
            const isFirstSlide = modalData.id === 0;
            const newID = isFirstSlide ? slides.length - 1 : modalData.id - 1;

            setModalData({ isActive: true, id: newID });
        }
    };
    const handleExitButton = () => {
        setModalData({ isActive: false, id: null });
    };
    useEffect(() => {
        if (!modalData.isActive) return;

        const closeModal = (key: string) => {
            if (key === "Escape") {
                setModalData({ isActive: false, id: null });
            }
        };
        document.addEventListener("keydown", ({ key }) => closeModal(key));

        return () => {
            document.removeEventListener("keydown", ({ key }) => closeModal(key));
        };
    });
    useEffect(() => {
        if(modalData.isActive){
            document.body.classList.add("galleryIsActive")
        } else {
            document.body.classList.remove("galleryIsActive")
        }

    });
    const slides = [
        { url: angelo1.src, title: "" },
        { url: angelo2.src, title: "" },
        { url: angelo3.src, title: "" },
        { url: angelo4.src, title: "" },
        { url: angelo5.src, title: "" },
        { url: angelo6.src, title: "" },
        { url: angelo7.src, title: "" },
        { url: angelo8.src, title: "" },
        { url: angelo9.src, title: "" },
        { url: angelo10.src, title: "" },
        { url: angelo11.src, title: "" },
        { url: angelo12.src, title: "" },
        { url: angelo13.src, title: "" },
        { url: angelo14.src, title: "" },
        { url: angelo15.src, title: "" },
        { url: angelo16.src, title: "" },
    ];

    const slide = slides[modalData.id] || slides[0];

    return (
        <ModalWrapper className={ isActive ? "active" : "" }>
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