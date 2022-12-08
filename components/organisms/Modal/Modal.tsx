import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { faChevronRight, faChevronLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalWrapper, ExitButton, ImageWrapper, ButtonArrow, Gallery } from "./Modal.styles";

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