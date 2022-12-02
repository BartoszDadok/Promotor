import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import Link from "next/link";

const ModalWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.isActive {
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    display: flex;
  }
`;

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;
  align-content: center;



`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.25em;
  list-style: none;
`;

const List = styled.ul`
  width: 100%;
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
    const nav = useRef<HTMLDivElement>(null);
    const context = useContext(HamburgerContext);
    const { activeMobileMenu, closeMobileMenu } = context;

    const closeModalMenu = () => {
        closeMobileMenu();
    };

    function handleClickOutsideMenu(e: MouseEvent) {
        if (!nav.current) return;
        if (e.target === nav.current || nav.current.firstChild) {
            closeMobileMenu();
        }
    }

    useEffect(() => {
        if (!nav.current) return;
        if (!activeMobileMenu) return;
        const navRef = nav.current;
        navRef.addEventListener("click", (e) => handleClickOutsideMenu(e));
        return () => {
            if (!navRef) return;
            navRef.removeEventListener("click", (e) => handleClickOutsideMenu(e));
        };
    }, [activeMobileMenu]);

    return (
        <ModalWrapper ref={ nav } className={ activeMobileMenu ? "isActive" : "" }>
            <MenuWrapper>
                <List>
                    <ListItem>
                        <StyledLink onClick={ closeModalMenu } href="/#oferta">OFERTA</StyledLink>
                    </ListItem>
                    <ListItem>
                        <Link passHref href="/katalog">
                            <StyledLink onClick={ closeModalMenu }>KATALOG</StyledLink>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link passHref href="/o-nas">
                            <StyledLink onClick={ closeModalMenu }>O NAS</StyledLink>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link passHref href="/blog">
                            <StyledLink onClick={ closeModalMenu }>BLOG</StyledLink>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <StyledLink onClick={ closeModalMenu } href="/oferta-indywidualna">OFERTA
                            INDYWIDUALNA</StyledLink>
                    </ListItem>
                    <ListItem>
                        <Link passHref href="/kontakt">
                            <StyledLink onClick={ closeModalMenu }>KONTAKT</StyledLink>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link passHref href="tel:+48618676623">
                            <StyledLink onClick={ closeModalMenu }>+48 61 867 66 23</StyledLink>
                        </Link>
                    </ListItem>
                </List>
            </MenuWrapper>
        </ModalWrapper>
    );
};

export default MobileMenu;