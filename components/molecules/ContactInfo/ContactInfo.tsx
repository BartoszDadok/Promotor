import React from "react";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;
const StyledLink = styled.a`
  color: #0173d6;
`;
const FacebookWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const ContactInfo = () => {
    return (
        <div>
            <Title>Dane kontaktowe naszego biura:</Title>
            <PageParagraph fontWeight={ "700" } margin={ "0 0 0.2em 0" }>Biuro Podróży PROMOTOR Sp. z
                o.o.</PageParagraph>
            <PageParagraph>ul. Pułaskiego 23</PageParagraph>
            <PageParagraph>-607 Poznań</PageParagraph>
            <PageParagraph><StyledLink href="tel:+48618676623">tel. +48 61 867 56
                23</StyledLink></PageParagraph>
            <PageParagraph><StyledLink href="/">www.promotor.pl</StyledLink></PageParagraph>
            <PageParagraph><StyledLink
                href="mailto: biuro@promotor.pl">biuro@promotor.pl</StyledLink></PageParagraph>
            <PageParagraph>NIP 779 250 73 03</PageParagraph>

            <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.2em 0" }>Czynne:</PageParagraph>
            <PageParagraph>10.00-17.00 pon-pt</PageParagraph>
            <PageParagraph>10.00-14.00 w soboty od września do marca</PageParagraph>

            <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.2em 0" }>Nr firmowego rachunku
                bankowego:</PageParagraph>
            <PageParagraph>Santander Bank Polska S.A.</PageParagraph>
            <PageParagraph>konto nr: 06 1090 1362 0000 0001 4293 9468</PageParagraph>
            <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.2em 0" }> Media
                społecznościowe:</PageParagraph>
            <StyledLink href="https://www.facebook.com/PromotorBiuroPodrozy">
                <FacebookWrapper>
                    <FontAwesomeIcon style={ { marginRight: "3px" } } width={ 18 } color={ "#0173d6" }
                                     icon={ faFacebook }/>
                    <PageParagraph>Facebook</PageParagraph>
                </FacebookWrapper>
            </StyledLink>
        </div>
    );
};

export default ContactInfo;