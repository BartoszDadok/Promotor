import React from "react";
import HeroImage from "../../atoms/HeroImage/HeroImage";
import styled from "styled-components";


const HeaderContainer = styled.header`
  position: relative
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
  @media (max-width: 1450px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;
const Header = () => {
    return (
        <HeaderContainer>
            <HeroImage/>
            <HeadLineContainer>
                <HeadLineH2> Pojedź z nami raz</HeadLineH2>
                <HeadLineH2>- będziesz z nami jeździł zawsze!</HeadLineH2>
            </HeadLineContainer>
        </HeaderContainer>
    );
};

export default Header;