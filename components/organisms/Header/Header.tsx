import React from "react";
import HeroImage from "../../atoms/HeroImage/HeroImage";
import styled from "styled-components";


const HeaderContainer = styled.header`
  position: relative;
  @media (max-width: 1000px) {
    display: none;
  }
  aspect-ratio: 3.7/1;
`;

const HeadLineContainer = styled.div`
  position: absolute;
  bottom: 10%;
  background-color: #c40002;
  opacity: 85%;
  padding: 1em;
  width: 40%;
`;

const HeadLineH2 = styled.h2`
  max-width: 700px;
  font-style: italic;
  padding-left: 0.4em;
  font-weight: 900;
  color: #fff;
  font-size: 2.5rem;
  @media (max-width: 1550px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }


`;
const Header = () => {
    return (
        <HeaderContainer>
            <HeroImage/>
            <HeadLineContainer id="headlines">
                <HeadLineH2 className={ "h2" }> Pojedź z nami raz</HeadLineH2>
                <HeadLineH2 className={ "h2" }>- będziesz z nami jeździł zawsze!</HeadLineH2>
            </HeadLineContainer>
        </HeaderContainer>
    );
};

export default Header;