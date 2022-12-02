import React, { useEffect, useState } from "react";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";
import styled from "styled-components";
import logoSrc from "../../../public/assets/logo.svg";
import Image from "next/image";
import { HeadLineH1 } from "../../atoms/HeadLineH1/HeadLineH1";
import { Logo } from "../../atoms/Logo/Logo";
import { ListItem } from "../Navigation/Navigation.styles";
import Link from "next/link";

const NavigationMobileWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 4.3em;
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  z-index: 1000;
  @media (min-width: 1000px) {
    display: none;

  }
  @media (max-width: 60em) {
    background-color: #0173d6;
  }

`;
const List = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
  :first-child{
    margin-top: -3px;
  }
`;



const NavigationMobile = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            }
            if (window.scrollY === 0) {
                setIsScrolled(false);
            }
        };
        window.document.addEventListener("scroll", onScroll);

        return () => window.document.removeEventListener("scroll", onScroll);
    });

    return (
        <NavigationMobileWrapper className={ isScrolled ? "isScrolled" : "" }>
            <List>
                <ListItem>
                    <Link passHref href="/">
                        <a style={ { height: "100%" } }>
                            <Logo/>
                        </a>
                    </Link>
                </ListItem>
            </List>
            <List>
                <Hamburger/>
            </List>

        </NavigationMobileWrapper>
    );
};

export default NavigationMobile;