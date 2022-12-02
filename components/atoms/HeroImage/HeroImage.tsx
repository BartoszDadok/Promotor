import React from "react";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
import Image from "next/image";

const HeroImage = () => {
    return (
        <picture>
            <source srcSet={ heroImgSrc.src } media="(min-width: 1000px)"/>
            <Image unoptimized={ true } src={ heroImgSrc } alt="Rodzina ciesząca się zimowymi wakacjami"
                   priority={ true }/>

        </picture>
    );
};

export default HeroImage;