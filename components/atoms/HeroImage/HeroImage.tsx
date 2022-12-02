import React from "react";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
import Image from "next/image";
import styled from "styled-components";

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;
const HeroImage = () => {
    return (
        <Picture>
            <source srcSet={ heroImgSrc.src } media="(min-width: 1000px)"/>
            <Image unoptimized={ true } src={ heroImgSrc } alt="Rodzina ciesząca się zimowymi wakacjami"
                   priority={ true }/>

        </Picture>
    );
};

export default HeroImage;