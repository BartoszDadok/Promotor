import React, { useContext, useEffect, useState } from "react";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";
import { Logo } from "../../atoms/Logo/Logo";
import { ListItem } from "../../molecules/MenuDesktop/MenuDesktop.style";
import Link from "next/link";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import { NavigationMobileWrapper, List } from "./NavigationMobile.styles";

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