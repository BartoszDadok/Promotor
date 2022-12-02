import React, { useContext } from "react";
import styled from "styled-components";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import Link from "next/link";


const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.isActive {
    visibility: visible;
    pointer-events: all;
    opacity: 1;

  }
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.25em;
  list-style: none;
  height: 100%;
`;


const StyledLink = styled.a`
  color: black;
  border: none;
  padding: 0.8em;
  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
`;

const MobileMenu = () => {
    const context = useContext(HamburgerContext);
    const { activeMobileMenu, closeMobileMenu } = context;

    const closeModalMenu = () => {
        closeMobileMenu();
    };
    return (
        <MenuWrapper className={ activeMobileMenu ? "isActive" : "" }>
            <ListItem>
                <StyledLink onClick={ closeModalMenu } href="/#oferta">OFERTA</StyledLink>
            </ListItem>
            <ListItem>
                <Link passHref href="/katalog">
                    <StyledLink onClick={ closeModalMenu } >KATALOG</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/o-nas">
                    <StyledLink onClick={ closeModalMenu } >O NAS</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="/blog">
                    <StyledLink onClick={ closeModalMenu } >BLOG</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <StyledLink onClick={ closeModalMenu }  href="/oferta-indywidualna">OFERTA INDYWIDUALNA</StyledLink>
            </ListItem>
            <ListItem>
                <Link passHref href="/kontakt">
                    <StyledLink onClick={ closeModalMenu } >KONTAKT</StyledLink>
                </Link>
            </ListItem>
            <ListItem>
                <Link passHref href="tel:+48618676623">
                    <StyledLink onClick={ closeModalMenu } >+48 61 867 66 23</StyledLink>
                </Link>
            </ListItem>
        </MenuWrapper>
    );
};

export default MobileMenu;