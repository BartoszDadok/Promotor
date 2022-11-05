import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import styled from "styled-components";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/organisms/Footer/Footer";

const Contact = styled.section`
  width: 100%;
`;

const ContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  padding-top: 100px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;
const IframeWrapper = styled.div`
  aspect-ratio: 3/1.5;
  margin-bottom: 2em;

`;
const StyledLink = styled.a`
  color: #0173d6;
`;

const FacebookWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1em 0 1.5em 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  width: 100%;
  padding: 0 2em;

`;
const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2em 0;
  margin-right: 0.5em;


  :last-child {
    margin-right: 0;
  }

`;
const Label = styled.label`
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4em;
  font-size: 1.2rem;
`;

const TextArea = styled.textarea`
  padding: 0.3em;
  font-size: 1.2rem;
  height: 300px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0.3em 0;

`;
const Button = styled.button`
  width: 200px;
  border: none;
  display: block;
  margin-right: 0;
  background-color: #0173d6;
  justify-content: center;
  padding: 0.8em 1em;
  color: white;
  cursor: pointer;
`;


const Kontakt = () => {

    return (
        <Contact>
            <Navigation/>
            <ContactWrapper>
                <Column>
                    <Title>Tu możesz do nas napisać: </Title>
                    <FormWrapper id="kontakt">
                        <Form>
                            <InputsWrapper>
                                <InputWrapper>
                                    <Label>Imię i nazwisko</Label>
                                    <Input/>
                                </InputWrapper>
                                <InputWrapper>
                                    <Label>Email</Label>
                                    <Input/>
                                </InputWrapper>
                                <InputWrapper>
                                    <Label>Telefon</Label>
                                    <Input/>
                                </InputWrapper>
                            </InputsWrapper>
                            <InputWrapper>
                                <Label>Wiadomość</Label>
                                <TextArea/>
                            </InputWrapper>
                            <ButtonWrapper>
                                <Button>Wyślij</Button>
                            </ButtonWrapper>
                        </Form>
                    </FormWrapper>
                    <Title>Tu nas znajdziesz: </Title>
                    <IframeWrapper>
                        <iframe
                            src="https://maps.google.com/maps?q=Pozna%C5%84%20Pi%C5%82sudzkiego%2023&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="600"
                            height="450"
                            frameBorder="0"
                            style={ { border: 0, marginBottom: "1em", width: "100%", height: "100%" } }
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={ 0 }
                        />
                    </IframeWrapper>


                </Column>
                <Column>
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
                </Column>
            </ContactWrapper>
            <Footer/>
        </Contact>

    )
        ;
};

export default Kontakt;