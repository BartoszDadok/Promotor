import logoSrc from "../../../public/assets/logo.svg";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const propsLogo = {
    src: logoSrc,
    alt: "Logo biura podróży Promotor",
    preLoading: true,
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: relative;
  width: 250px;
  height: 100%;
  
  @media (max-width: 700px) {
    width: 200px ;
  }

`;
const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

`;
const H1Headline = styled.h1`
  font-size: 0.8rem;
  text-align: center;
  color: white;
  @media (max-width: 700px) {
    font-size: 0.7rem;;
    margin-top: -4px;
  }
`;

export const Logo = () => {
    return (
        <LogoWrapper>
            <ImageWrapper>
                <Image alt={ "Logo biura podróży Promotor" } src={ logoSrc } objectFit={ "contain" }
                       layout={ "fill" }/>
            </ImageWrapper>
            <H1Headline>Biuro podróży z zimowymi wakacjami</H1Headline>
        </LogoWrapper>
    );
};