import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const GalleryWrapper = styled.div`
  display: block;
  margin: 0.5em 0 2em 0;
  width: 100%;
  @media (min-width: 1000px) {
    display: none;

  }
`;

const Gallery = styled.div`
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

const ButtonArrow = styled.button<{ direction: string }>`
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`;
const Counter = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #f4f4f4;
  padding: 4px;
  border-radius: 2px;
`;

const MobileGallery = ({ images }: { images: { url: string, title: string }[] }) => {
    const [id, setId] = useState(0);
    const imageWrapper = useRef<HTMLDivElement>(null);

    const handleClickImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!imageWrapper.current) return;

        if (e.pageX > (imageWrapper.current.getBoundingClientRect().width) / 2) {
            const isLastSlide = id === images.length - 1;
            const newID = isLastSlide ? 0 : id + 1;
            setId(newID);
        } else {
            const isFirstSlide = id === 0;
            const newID = isFirstSlide ? images.length - 1 : id - 1;
            setId(newID);
        }

    };
    const handleClickArrow = (direction: string) => {
        if (direction === "right") {
            const isLastSlide = id === images.length - 1;
            const newID = isLastSlide ? 0 : id + 1;

            setId(newID);
        }

        if (direction === "left") {
            const isFirstSlide = id === 0;
            const newID = isFirstSlide ? images.length - 1 : id - 1;
            setId(newID);
        }
    };
    return (
        <GalleryWrapper>
            <Gallery>
                <ButtonArrow direction={ "left" } onClick={ () => handleClickArrow("left") }>
                    <FontAwesomeIcon width={ "25px" } color={ "#fff" } icon={ faChevronLeft }/>
                </ButtonArrow>
                <ImageWrapper onClick={ (e) => handleClickImage(e) } ref={ imageWrapper }>
                    <div>
                        <Image objectFit={ "contain" } layout={ "fill" }
                               alt={ images[id].title }
                               src={ images[id].url }/>
                    </div>
                </ImageWrapper>
                <ButtonArrow direction={ "right" } onClick={ () => handleClickArrow("right") }>
                    <FontAwesomeIcon width={ "25px" } color={ "#fff" } icon={ faChevronRight }/>
                </ButtonArrow>
                <Counter>{ id + 1 }/{ images.length }</Counter>
            </Gallery>
        </GalleryWrapper>
    );
};

export default MobileGallery;