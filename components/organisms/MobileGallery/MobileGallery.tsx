import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { GalleryWrapper, ImageWrapper, Gallery, Counter, ButtonArrow } from "./MobileGallery.style";

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