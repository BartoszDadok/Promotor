import React from "react";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
import Image from "next/image";

const HeroImage = () => {
    return (
        <figure>
            <Image unoptimized={true} src={ heroImgSrc } alt="Rodzina ciesząca się zimowymi wakacjami"
                   priority={ true }/>
        </figure>
    );
};

export default HeroImage;