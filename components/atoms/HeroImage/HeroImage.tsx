import React from "react";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
import Image from "next/image";
import styled from "styled-components";

const Picture = styled.picture`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const HeroImage = () => {
    return (
        <Picture>
            <Image src={ heroImgSrc } alt="Rodzina ciesząca się zimowymi wakacjami"
                   priority={ true }/>

        </Picture>
    );
};

export default HeroImage