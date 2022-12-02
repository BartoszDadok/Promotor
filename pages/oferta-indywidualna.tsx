import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import styled from "styled-components";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/organisms/Footer/Footer";
import ContactInfo from "../components/molecules/ContactInfo/ContactInfo";

const Contact = styled.section`
  width: 100%;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  padding: 6.25em 2em 0 2em;
  width: 80%;
  margin: 0 auto 2em auto;
  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 6.25em 0 0 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;
const IframeWrapper = styled.div`
  aspect-ratio: 3/1.5;
  margin-bottom: 2em;
  @media (max-width: 1000px) {
    margin-bottom: 1em;
  }

`;
const StyledLink = styled.a`
  color: #0173d6;
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
  @media (max-width: 1000px) {
    flex-direction: column;
  }
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
                    <Title>Możemy zorganizować dla Ciebe indywidualny wyjazd, zpraszamy do kontaktu: </Title>
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
                    <ContactInfo/>
            </ContactWrapper>
            <Footer/>
        </Contact>
    )
};

export default Kontakt;