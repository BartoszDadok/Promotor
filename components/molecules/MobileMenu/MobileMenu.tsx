import React, { useContext, useEffect, useRef } from "react";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import Link from "next/link";
import { ModalWrapper, MenuWrapper, List, ListItem, StyledLink } from "./MobileMenu.styles";

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