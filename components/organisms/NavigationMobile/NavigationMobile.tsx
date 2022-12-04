import React, { useContext, useEffect, useState } from "react";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";
import styled from "styled-components";
import { Logo } from "../../atoms/Logo/Logo";
import { ListItem } from "../Navigation/Navigation.styles";
import Link from "next/link";
import { HamburgerContext } from "../../../contexts/HamburgerContext";

const NavigationMobileWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 4.3em;
  display: flex;
  padding: 0.3em;

  z-index: 1000;
  @media (min-width: 1000px) {
    display: none;

  }
  @media (max-width: 1000px) {
    background-color: #0173d6;
  }

`;
const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  :first-child {
    margin-top: -6px;
  }
`;


const NavigationMobile = () => {
    const context = useContext(HamburgerContext);
    const { activeMobileMenu, closeMobileMenu } = context;
    const [isScrolled, setIsScrolled] = useState(false);

    const closeModalMenu = () => {
        if (!activeMobileMenu) return;
        closeMobileMenu();
    };

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
                        <a onClick={ closeModalMenu } style={ { height: "100%" } }>
                            <Logo/>
                        </a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Hamburger/>
                </ListItem>
            </List>
        </NavigationMobileWrapper>
    );
};

export default NavigationMobile;