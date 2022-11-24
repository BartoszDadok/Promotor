import React from "react";
import arrowSrc from "../../../public/assets/arrow.svg";
import {
    LeftSide,
    ListItem,
    MenuContainer,
    RightSide,
    StyledLink,
    StyledLogo,
} from "../../organisms/Navigation/Navigation.styles";
import Link from "next/link";
import { Logo } from "../../atoms/Logo/Logo";
import { HeadLineH1 } from "../../atoms/HeadLineH1/HeadLineH1";

interface Props {
    isScrolled: boolean;
}

const MenuDesktop = ({ isScrolled }: Props) => {
    return (
        <MenuContainer>
            <LeftSide>
                <ListItem>
                    <Link passHref href="/">
                        <a style={{height: "100%"}}>
                        <StyledLogo>
                            <Logo/>
                            <HeadLineH1>Biuro podróży z zimowymi wakacjami</HeadLineH1>
                        </StyledLogo>
                        </a>
                    </Link>

                </ListItem>

            </LeftSide>
            <RightSide>
                <ListItem>
                        <StyledLink href="/#oferta">OFERTA</StyledLink>
                </ListItem>
                <ListItem>
                    <Link passHref href="/katalog">
                        <StyledLink>KATALOG</StyledLink>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref href="/o-nas">
                        <StyledLink>O NAS</StyledLink>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref href="/blog">
                        <StyledLink>BLOG</StyledLink>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref href="/kontakt">
                        <StyledLink>KONTAKT</StyledLink>
                    </Link>
                </ListItem>
                <ListItem arrowSrc={ arrowSrc.src }  className={ isScrolled ? "isScrolled" : "" }>
                    <Link passHref href="tel:+48618676623">
                        <StyledLink>+48 61 867 66 23</StyledLink>
                    </Link>
                </ListItem>
            </RightSide>
        </MenuContainer>
    );
};

export default MenuDesktop;