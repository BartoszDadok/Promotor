import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import ContactInfo from "../components/molecules/ContactInfo/ContactInfo";
import Footer from "../components/organisms/Footer/Footer";
import styled from "styled-components";

const ClauseWrapper = styled.div`
  width: 70%;
  margin: 0 auto 4em auto;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  padding-top: 100px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;
const ClauseContainer = styled.div`
  width: 100%;
  padding: 0 2em;
`;

const List = styled.ul`
  list-style: decimal;
  padding-left: 2em;

  li {
    margin-bottom: 0.3em;
    padding-left: 0.3em;
  }
`;
const UnerlinedLink = styled.a`
  text-decoration: underline;
  color: #0173d6;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;
const InformationClause = () => {
    return (
        <div>
            <Navigation/>
            <ClauseWrapper>
                <ClauseContainer>
                    <Title>Klauzula informacyjna:</Title>
                    <PageParagraph fontWeight={"700"} margin={"0 0 0.4em 0"}>Informujemy, że:</PageParagraph>
                    <List>
                        <li>
                            <PageParagraph>administratorem Pani/Pana danych osobowych jest Biuro Podróży PROMOTOR sp. z
                                o.o.<strong>&nbsp;</strong>ul. Pułaskiego 23 60-607 Poznań, zwany dalej
                                Administratorem;</PageParagraph>
                        </li>
                        <li>
                            <PageParagraph>Administrator prowadzi operacje przetwarzania Pani/Pana danych osobowych
                                podanych w umowie lub przekazanych w wywiadzie, w tym m.in. w celu
                                przygotowania oferty wyjazdu oraz udzielenia dodatkowych informacji o
                                ofercie.</PageParagraph>
                        </li>
                        <li>
                            <PageParagraph>Pani/Pana dane osobowe przetwarzane będą w celu realizacji umowy i nie będą
                                udostępniane innym odbiorcom, Za Pani/Pana zgodą dane osobowe będą także
                                wykorzystywane przez Administratora w celach marketingowych.</PageParagraph>
                        </li>
                        <li>
                            <PageParagraph>podstawą przetwarzania Pani/Pana danych osobowych jest umowa i/lub zgoda na
                                przetwarzanie danych</PageParagraph>
                        </li>
                        <li>
                            <PageParagraph>podanie danych jest niezbędne do zawarcia umowy, w przypadku niepodania
                                danych niemożliwe jest zawarcie umowy</PageParagraph>
                        </li>
                        <li>
                            <PageParagraph>posiada Pani/Pan prawo do:</PageParagraph>
                        </li>


                        <List>
                            <li>
                                <PageParagraph>żądania od Administratora dostępu do swoich danych osobowych, ich
                                    sprostowania, usunięcia lub ograniczenia przetwarzania danych osobowych,</PageParagraph>
                            </li>
                            <li>
                                <PageParagraph>wniesienia sprzeciwu wobec takiego przetwarzania,</PageParagraph>
                            </li>
                            <li>
                                <PageParagraph>przenoszenia danych,</PageParagraph>
                            </li>
                            <li>
                                <PageParagraph>wniesienia skargi do organu nadzorczego,</PageParagraph>
                            </li>
                        </List>
                        <li>
                            <PageParagraph>Pani/Pana dane osobowe nie podlegają zautomatyzowanemu podejmowaniu decyzji, w tym
                                profilowaniu,</PageParagraph>
                        </li>

                        <li>
                            <PageParagraph>Pani/Pana dane osobowe będą przechowywane przez 3 lata od zakończenia współpracy.</PageParagraph>
                        </li>

                    </List>
                </ClauseContainer>
                <ContactInfo/>
            </ClauseWrapper>
            <Footer/>
        </div>
    );
};

export default InformationClause;