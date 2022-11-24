import { useContext, useEffect, useRef } from "react";
import { HamburgerButton } from "./Hamburger.styles";
import { HamburgerBoxSr } from "./Hamburger.styles";
import { HamburgerBox } from "./Hamburger.styles";
import { HamburgerInner } from "./Hamburger.styles";
import { HamburgerContext } from "../../../contexts/HamburgerContext";

export const Hamburger = () => {

    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeMobileMenu;
    const openMobileMenu = context.openMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;

    const refHamburger = useRef<HTMLSpanElement>(null);
    const refInner = useRef<HTMLSpanElement>(null);

    const handleClick = () => {
        toggleHamburger();
        toggleMenu();
    };

    const toggleMenu = () => {
        activeMenuMobile ? closeMobileMenu() : openMobileMenu();
    };

    const toggleHamburger = () => {
        const hamburger = refHamburger.current;
        const hamburgerInner = refInner.current;

        if (!hamburger) return;
        if (!hamburgerInner) return;

        if (activeMenuMobile) {
            hamburger.classList.add("active");
            hamburgerInner.classList.add("active");
        } else {
            hamburger.classList.remove("active");
            hamburgerInner.classList.remove("active");
        }
    };

    useEffect(() => {
        toggleHamburger();
    }, [activeMenuMobile]);


    return (
        <HamburgerButton aria-expanded="false" onClick={ handleClick }>
            <HamburgerBoxSr>Open/Close menu</HamburgerBoxSr>
            <HamburgerBox ref={ refHamburger }>
                <HamburgerInner ref={ refInner }/>
            </HamburgerBox>
        </HamburgerButton>
    );
};