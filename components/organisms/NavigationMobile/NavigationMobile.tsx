import React from "react";
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
  height: 70px;
  display: flex;
  padding: 0.3em;
  justify-content: space-between;
  z-index: 1000;
  @media (min-width: 60em) {
    display: none;

  }
  @media (max-width: 60em) {
    background-color: transparent;
  }
  @media (max-width: 49em) {

    background-color: #0173d6;
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
`;



const NavigationMobile = () => {
    return (
        <NavigationMobileWrapper>
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