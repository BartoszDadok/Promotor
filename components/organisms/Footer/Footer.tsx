import React from "react";
import styled from "styled-components";
import logoSrc from "../../../public/assets/logo.svg";
import Image from "next/image";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import Link from "next/link";

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2em 0;
  background-color: #0173d6;
`;

const FooterContainer = styled.div`
  display: grid;
  width: 80%;
  justify-content: center;
  justify-items: center;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2em;
  margin-top: 1em;
  justify-content: center;
`;


const Informations = styled.div`
`;

const StyledLink = styled.a`
  padding: 0.1em;
  border-bottom: 2px solid white;
`;

const StyledLogo = styled.a`
  display: flex;
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <PageParagraph fontSize={ "2rem" } color={ "white" }>Masz
                    pytanie?</PageParagraph>
                <PageParagraph margin={ "0.3em 0 0.1em 0" } color={ "white" }>Zadzwoń: <StyledLink
                    href="tel:+48618676623">+48 61
                    867
                    66 23</StyledLink></PageParagraph>
                <PageParagraph margin={ "0.3em 0 0 0" } color={ "white" }>
                    lub skontaktuj się mailowo:
                    <Link passHref href="/kontakt">
                        <StyledLink> Formularz kontaktowy →</StyledLink>
                    </Link>
                </PageParagraph>
                <GridWrapper>
                    <Link passHref href="/">
                        <StyledLogo>
                            <Image src={ logoSrc } alt="logo Promotor"/>
                        </StyledLogo>
                    </Link>
                    <Informations>
                        <PageParagraph fontWeight={ "700" } margin={ "0.3em 0" }
                                       color={ "white" }>Prywatność:</PageParagraph>
                        <PageParagraph color={ "white" } margin={"0 0 0.2em 0"}><Link passHref href="/polityka-prywatnosci">
                            <StyledLink> Polityka prywatności →</StyledLink>
                        </Link>
                        </PageParagraph>
                        <PageParagraph color={ "white" }><Link passHref href="/klauzula-informacyjna">
                            <StyledLink> Klauzula informacyjna →</StyledLink>
                        </Link></PageParagraph>
                    </Informations>
                    <Informations>
                        <PageParagraph fontWeight={ "700" } margin={ "0.3em 0" }
                                       color={ "white" }> Adres:</PageParagraph>
                        <PageParagraph color={ "white" }> ul. Pułaskiego 23</PageParagraph>
                        <PageParagraph color={ "white" }>60-607 Poznań</PageParagraph>
                        <PageParagraph color={ "white" }><StyledLink
                            href="mailto: biuro@promotor.pl">biuro@promotor.pl</StyledLink></PageParagraph>
                    </Informations>

                    <Informations>
                        <PageParagraph fontWeight={ "700" } margin={ "0.3em 0" }
                                       color={ "white" }>Czynne:</PageParagraph>
                        <PageParagraph color={ "white" }>10.00-17.00 pon-pt</PageParagraph>
                        <PageParagraph color={ "white" }>10.00-14.00 w soboty od września do marca</PageParagraph>
                    </Informations>
                </GridWrapper>
                <GridWrapper>
                </GridWrapper>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;