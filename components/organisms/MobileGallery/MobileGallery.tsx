import React, { useState } from "react";
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
  width: 100%;
  aspect-ratio: 2/1;
  margin: 0 auto;
  display: grid;

  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  grid-template-columns: 10px 1fr 10px;
  grid-template-rows: 100%;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`;

const MobileGallery = ({ images }: { images: { url: string, title: string }[] }) => {
    const [id, setId] = useState(0);

    const handleClickArrow = (e: string) => {
        if (e === "right") {
            const isLastSlide = id === images.length - 1;
            const newID = isLastSlide ? 0 : id + 1;

            setId(newID);
        }

        if (e === "left") {
            const isFirstSlide = id === 0;
            const newID = isFirstSlide ? images.length - 1 : id - 1;
            setId(newID);
        }
    };
    return (
        <GalleryWrapper>
            <Gallery>
                <ButtonArrow onClick={ () => handleClickArrow("left") }>
                    <FontAwesomeIcon width={ "25px" } color={ "#000" } icon={ faChevronLeft }/>
                </ButtonArrow>
                <ImageWrapper>
                    <div>
                        <Image objectFit={ "contain" } layout={ "fill" }
                               alt={ images[id].title }
                               src={ images[id].url }/>
                    </div>
                </ImageWrapper>
                <ButtonArrow onClick={ () => handleClickArrow("right") }>
                    <FontAwesomeIcon width={ "25px" } color={ "#000" } icon={ faChevronRight }/>
                </ButtonArrow>
            </Gallery>
        </GalleryWrapper>
    );
};

export default MobileGallery;