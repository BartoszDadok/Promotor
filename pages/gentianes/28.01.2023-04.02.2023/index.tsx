import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../../components/organisms/Navigation/Navigation";
import Modal from "../../../components/organisms/Modal/Modal";
import Footer from "../../../components/organisms/Footer/Footer";
import ReservationForm from "../../../components/organisms/ReservationForm/ReservationForm";
import Gallery from "../../../components/organisms/Gallery/Gallery";
import { PageParagraph } from "../../../components/atoms/PageParagraph/PageParagraph";

import gent1 from "../../../public/assets/hotels/gentianes/1.jpg";
import gent2 from "../../../public/assets/hotels/gentianes/2.jpg";
import gent3 from "../../../public/assets/hotels/gentianes/3.jpg";
import gent4 from "../../../public/assets/hotels/gentianes/4.jpg";
import gent5 from "../../../public/assets/hotels/gentianes/5.jpg";
import gent6 from "../../../public/assets/hotels/gentianes/6.jpg";
import gent7 from "../../../public/assets/hotels/gentianes/7.jpg";
import gent8 from "../../../public/assets/hotels/gentianes/8.jpg";
import gent9 from "../../../public/assets/hotels/gentianes/9.jpg";
import gent10 from "../../../public/assets/hotels/gentianes/10.jpg";
import gent11 from "../../../public/assets/hotels/gentianes/11.jpg";
import gent12 from "../../../public/assets/hotels/gentianes/12.jpg";
import gent13 from "../../../public/assets/hotels/gentianes/13.jpg";
import gent14 from "../../../public/assets/hotels/gentianes/14.jpg";
import gent15 from "../../../public/assets/hotels/gentianes/15.jpg";


const images = [
    { url: gent1.src, title: "Apartament Gentianes z zewnątrz" },
    { url: gent2.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent3.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent4.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent5.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent6.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent7.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent8.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent9.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent10.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent11.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent12.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent13.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent14.src, title: "Apartament Gentianes wewnątrz" },
    { url: gent15.src, title: "Apartament Gentianes z zewnątrz" },

];

const PageWrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  grid-template-columns: 1fr 3fr;
  display: grid;
  grid-gap: 0 1em;
  justify-content: center;
  justify-items: center;
  padding-top: 100px;
  @media (max-width: 1550px) {
    width: 95%;
  }
`;

const LeftSideWrapper = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0173d6;
  padding: 1em 1.5em;
  border-radius: 2px;
  height: fit-content;
`;


const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.3em 0;
`;

const TitleWhite = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 0.3em 0;
  text-align: center;
`;

const HeadlineH3 = styled.h3`
  font-size: 1.2rem;
  margin: 0.6em 0 0.2em 0;
  font-weight: 700;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: disc;
  color: white;
  padding-left: 1.3em;
  margin-bottom: 1em;
`;

interface PropsList {
    margin?: string;
}

const ListDescribe = styled.ul<PropsList>`
  list-style: disc;
  padding-left: 1.3em;
  margin: ${ ({ margin = "0" }) => margin };
`;

const ListItem = styled.li`
  margin: 0.3em 0;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 1px;
  width: 100%;
  margin-bottom: 1em;
`;

const PricingWrapper = styled.div`
  border: 1px white solid;
  padding: 0.3em 0.5em;
  margin-top: 1em;
`;

const Link = styled.a`
  color: #0173d6;
`;

const RightSideWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 1em;
  grid-auto-rows: min-content;
`;


const Index = () => {
    const date = ["28.01.2023-04.02.2023", "27.01.2023-05.02.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                28.01.2023-04.02.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                27.01.2023-05.02.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Francja
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Puy St Vincent
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                                zakwaterowania: </b>Apartament
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Wyżywienie: </b>Bez wyżywienia
                            </PageParagraph>

                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }>
                                    <b>Cennik z dojazdem własnym:</b>

                                </PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 1775
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2125
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Basen w
                                    rezydencji</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Super cena za
                                    pakiet</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>FREE SKI – skipass w
                                    cenie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Rezydencja przy
                                    stoku i wyciągu</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    desce
                                    snowboardowej (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    nartach (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>1 niewykorzystane
                                    miejsce w apartamencie - 475 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie
                                    rozszerzone KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie
                                    sportów zimowych - 95 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy + chorób przewlekłych 6%</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy 3%</PageParagraph></ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Apartament Gentianes ***  - Puy St. Vincent</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>STACJA NARCIARSKA PUY SAINT VINCENT</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Kameralna stacja narciarska położona w jednym z najpiękniejszych zakątków Parku Narodowego w
                            Alpach Wysokich. Oferuje ok. 85 km tras zjazdowych o wszystkich poziomach trudności (2
                            czarne, 12 czerwonych, 6 zielonych i 10 niebieskich). Niemal zawsze gwarantuje słoneczną
                            pogodę. Najdłuższa trasa zjazdowa wynosi aż 7 km. Dodatkową atrakcją jest możliwość jazdy
                            nocnej 2 razy w tygodniu na oświetlonym stoku. Do użytku narciarzy oddane są również
                            snowpark, tor saneczkowy, lodowisko, kryty basen, 20 km tras biegowych.
                        </PageParagraph>

                        <HeadlineH3>REZYDENCJA GENTIANES ***</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Obiekt znajdujący się na wysokości 1800 m n.p.m., skąd
                            rozciąga się wspaniały widok na otaczające szczyty górskie i doliny. Rezydencja składa się z
                            4 budynków, posiada kryty basen, recepcję, parking zewnętrzny. Usytuowana jest ok. 50 m od
                            tras narciarskich i ok. 550 m od centrum miejscowości (restauracje, sklep spożywczy, disco
                            Party Arena). Każdy apartament ma oddzielny zamykany skibox; Apartamenty są wygodne,
                            większość posiada balkony.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            <b>Apartament 4 os.</b> - pokój dzienny z sofą, wyposażona kuchnia ze zmywarką, sypialnia z
                            2
                            miejscami do spania, łazienka, osobna toaleta.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            <b>Apartament 6 os.</b> - pokój dzienny z sofą, wyposażona kuchnia ze zmywarką, łazienka,
                            osobna toaleta, sypialnia z dwoma miejscami do spania, druga sypialnia z łóżkiem
                            małżeńskim lub łóżkiem piętrowym.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            <b>Apartament 8 os.</b> - pokój dzienny z sofą, wyposażona kuchnia ze zmywarką, łazienka z
                            wanną, osobna toaleta, łazienka z prysznicem, dwie sypialnie z dwoma miejscami do spania
                            każda, trzecia sypialnia z łóżkiem małżeńskim lub piętrowym.
                        </PageParagraph>


                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>6 dniowy karnet narciarski</PageParagraph></ListItem>
                            <ListItem><PageParagraph>7 noclegów w apartamentach bez wyżywienia</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dla jadących autokarem, przejazd Poznań - Puy Saint Vincent - Poznań autokarem klasy Lux (klimatyzacja, barek, TV, WC)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opieka pilota - rezydenta</PageParagraph></ListItem>
                            <ListItem><PageParagraph>energia elektryczna, ogrzewanie, skibox</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z basenu w godzinach jego otwarcia</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 Euro i NNW 5 000 Euro</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjna Funduszu Turystycznego i Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>

                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>końcowego sprzątania 60/70 Euro/apartament lub sprzątanie we własnym zakresie (bez opłat)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>kaucji zwrotnej - 300 Euro/apartament</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 1,10 Euro/os za dzień (płatne na miejscu)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wypożyczenia pościeli - 8 Euro lub można zabrać własną</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wypożyczenia ręczników - 8 Euro lub można zabrać własne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty za niewykorzystane miejsce w apartamencie – 475 zł/miejsce</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania narciarstwa lub snowboardu </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny; możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>dla jadących autokarem, zbiórka w dniu wyjazdu o godz. 17.45, na parkingu przy starym ZOO ul.Zwierzyniecka; wyjazd godz. 18.00; powrót w to samo miejsce ok. godz 8.00 w dniu przyjazdu (miejsce zbiórki może ulec zmianie)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wymagany jest dowód osobisty lub paszport</PageParagraph></ListItem>
                            <ListItem>
                                <PageParagraph>
                                    wymagana jest karta EKUZ (Europejska Karta Ubezpieczenia Zdrowotnego; informacje
                                    i
                                    możliwość
                                    złożenia wniosku online:
                                </PageParagraph>
                                <Link
                                    href="https://www.nfz.gov.pl/dla-pacjenta/nasze-zdrowie-w-ue/leczenie-w-krajach-unii-europejskiej-i-efta/jak-wyrobic-karte-ekuz">
                                    https://www.nfz.gov.pl/dla-pacjenta/nasze-zdrowie-w-ue/leczenie-w-krajach-unii-europejskiej-i-efta/jak-wyrobic-karte-ekuz
                                </Link>
                            </ListItem>
                        </ListDescribe>
                    </RightSideWrapper>
                </ContentWrapper>
                <Modal images={ images } modalData={ modalData } setModalData={ setModalData }/>
            </PageWrapper>
            <Footer/>
        </>
    );
};

export default Index;