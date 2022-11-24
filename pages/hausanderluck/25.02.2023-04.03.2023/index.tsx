import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../../components/organisms/Navigation/Navigation";
import Modal from "../../../components/organisms/Modal/Modal";
import Footer from "../../../components/organisms/Footer/Footer";
import ReservationForm from "../../../components/organisms/ReservationForm/ReservationForm";
import Gallery from "../../../components/organisms/Gallery/Gallery";
import { PageParagraph } from "../../../components/atoms/PageParagraph/PageParagraph";

import haus1 from "../../../public/assets/hotels/haus/1.jpg";
import haus2 from "../../../public/assets/hotels/haus/2.jpg";
import haus3 from "../../../public/assets/hotels/haus/3.jpg";
import haus4 from "../../../public/assets/hotels/haus/4.jpg";
import haus5 from "../../../public/assets/hotels/haus/5.jpg";
import haus6 from "../../../public/assets/hotels/haus/6.jpg";
import haus7 from "../../../public/assets/hotels/haus/7.jpg";
import haus8 from "../../../public/assets/hotels/haus/8.jpg";
import haus9 from "../../../public/assets/hotels/haus/9.jpg";
import haus10 from "../../../public/assets/hotels/haus/10.jpg";
import haus11 from "../../../public/assets/hotels/haus/11.jpg";
import haus12 from "../../../public/assets/hotels/haus/12.jpg";
import haus13 from "../../../public/assets/hotels/haus/13.jpg";
import haus14 from "../../../public/assets/hotels/haus/14.jpg";
import haus15 from "../../../public/assets/hotels/haus/15.jpg";
import haus16 from "../../../public/assets/hotels/haus/16.jpg";
import haus17 from "../../../public/assets/hotels/haus/17.jpg";
import haus18 from "../../../public/assets/hotels/haus/18.jpg";
import haus19 from "../../../public/assets/hotels/haus/19.jpg";
import haus20 from "../../../public/assets/hotels/haus/20.jpg";
import haus21 from "../../../public/assets/hotels/haus/21.jpg";
import haus22 from "../../../public/assets/hotels/haus/22.jpg";

const images = [
    { url: haus1.src, title: "Hotel Haus an der Luck z zewnątrz" },
    { url: haus2.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus3.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus4.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus5.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus6.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus7.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus8.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus9.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus10.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus11.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus12.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus13.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus14.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus15.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus16.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus17.src, title: "Hotel Haus an der Luck z zewnątrz" },
    { url: haus18.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus19.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus20.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus21.src, title: "Hotel Haus an der Luck wewnątrz" },
    { url: haus22.src, title: "Hotel Haus an der Luck wewnątrz" },
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
    const date = ["25.02.2023-04.03.2023", "24.02.2023-05.03.2023"];
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
                                25.02.2023 - 04.03.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                24.02.2023 - 05.03.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Barbiano
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                                zakwaterowania: </b>Hotel
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Wyżywienie: </b>Pełne
                            </PageParagraph>

                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }>
                                    <b>Cennik z dojazdem własnym:</b>

                                </PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2675
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3,99
                                            lat - 550 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 4-7,99
                                            lat - 1750 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-13,99
                                            lat- 2305 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci powyżej 14
                                            lat- 2490 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2975
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3,99
                                            lat - 850 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 4-7,99
                                            lat - 2050 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-13,99
                                            lat- 2605 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci powyżej 14
                                            lat- 2790 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL 3* z
                                    wellness</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>najlepsze ośrodki
                                    narciarskie w Dolomitach - VAL GARDENA, ALPE DI SIUSI, SELLA
                                    RONDA</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI
                                    SAFARI</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Objazd tras z
                                    pilotem/instruktorem</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    nartach (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie
                                    rozszerzone KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie
                                    sportów zimowych - 95 PLN</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy 3%</PageParagraph></ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Hotel Haus an der Luck - Val Gardena/Alpe di Siusi - SKI SAFARI</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI Val Gardena/ Alpe di Siusi</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Najsłynniejsza w Alpach dolina, miejsce rozgrywania mistrzostw świata w konkurencjach
                            szybkościowych. Znajdziemy tam bogatą ofertę świetnie przygotowanych stoków dla narciarzy o
                            różnych umiejętnościach. Stacja oferuje 175 km tras zjazdowych, 79 wyciągów i 115 km tras
                            narciarzy biegowych i snowparki dla amatorów snowboardu.
                        </PageParagraph>
                        <PageParagraph fontWeight={ "700" } margin={ "0 0 1em 0" }>
                            Sella Ronda
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            <b>Passo Pordoi</b> – jest to szlak narciarski wraz z zespołem wyciągów Passo Campolongo -
                            Passo
                            Gardena - Passo Sella o łącznej długości 60 km. Aby przejechać Sellarondę należy wykupić
                            skipass Dolomiti Superski.
                        </PageParagraph>

                        <HeadlineH3>HOTEL HAUS AN DER LUCK***s</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Znakomity, komfortowy hotel położony w słonecznej część
                            miasteczka Barbiano. Hotel posiada wellness, saunę fińską, saunę turecką, kabinę na
                            podczerwień, panoramiczny basen z masażem oraz solarium. Oprócz tego znajduje się
                            restauracja, bar, taras słoneczny, garaż i parking. Pokoje wyposażone są w łazienki,
                            suszarkę do włosów, TV, telefon, satelitę. Odległość do wyciągów w Oritsei (Val Gardena,
                            Alpe di Siusi) około 15 km.
                        </PageParagraph>
                        <PageParagraph>
                            Ostateczny program SKI SAFARI ustalany jest przez organizatora po przyjeździe grupy na
                            miejsce pobytu i zależy od bieżących możliwości jego realizacji, w tym m.in. od warunków
                            pogodowych.
                        </PageParagraph>


                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokojach 1,2,3,4 os. z
                                łazienkami</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie: śniadania w formie bufetu, obiadokolacje +
                                bufet sałatkowy; napoje do obiadokolacji dodatkowo płatne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>uroczysta kolacja z menu włoskim</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wieczór z muzyką, integracja</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z basenu, wellness</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet Wi-Fi również w pokojach</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd autokarem klasy Lux (klimatyzacja, barek,TV, WC) na trasie
                                Poznań – Barbiano – Poznań</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery do stacji narciarskich (autokar lub
                                skibus)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>podatek VAT</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjna Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.6em 0" }>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę
                            dorosłą.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph fontWeight={ "700" }>6-dniowego karnetu narciarskiego Val
                                Gardena/Alpe di Siusi lub Dolomiti Superski
                                (konieczne potwierdzenie w umowie-zgłoszeniu deklaracji zakupu karnetu za pośrednictwem
                                organizatora)</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresach (WYSOKI SEZON) <u>29.01 - 18.03.2023</u>:
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph fontWeight={ "700" }>
                                                Val Gardena/ Alpe di Siusi
                                            </PageParagraph>
                                        </ListItem>
                                        <ListDescribe>
                                            <ListItem>
                                                <PageParagraph>
                                                    Dorołsy - 347 Euro
                                                </PageParagraph>
                                            </ListItem>
                                            <ListItem>
                                                <PageParagraph>
                                                    Senior - 312 Euro
                                                </PageParagraph>
                                            </ListItem>
                                            <ListItem>
                                                <PageParagraph>
                                                    Junior - 243 Euro
                                                </PageParagraph>
                                            </ListItem>
                                        </ListDescribe>
                                    </ListDescribe>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph fontWeight={ "700" }>
                                                Dolomiti Superski
                                            </PageParagraph>
                                        </ListItem>
                                        <ListDescribe>
                                            <ListItem>
                                                <PageParagraph>
                                                    Dorołsy - 373 Euro
                                                </PageParagraph>
                                            </ListItem>
                                            <ListItem>
                                                <PageParagraph>
                                                    Senior - 336 Euro
                                                </PageParagraph>
                                            </ListItem>
                                            <ListItem>
                                                <PageParagraph>
                                                    Junior - 261 Euro
                                                </PageParagraph>
                                            </ListItem>
                                        </ListDescribe>
                                    </ListDescribe>
                                </ListItem>
                            </ListDescribe>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.5em 0" }>Junior ur. po 26.11.2006, senior ur. przed
                            26.11.1957.</PageParagraph>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os.
                                ( 6 dni x 2 godziny dziennie ); należy zgłosić przy podpisywaniu umowy, szkolenie
                                uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie
                                zł/dziecko/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny wyjazdu
                                (możliwość zawarcia tego ubezpieczenia tylko w momencie podpisywania
                                umowy)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu </PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej –  2,1 Euro/os/dzień od 14 roku życia; płatnej w recepcji lub u pilota</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1os – 450 zł/os/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferów na stoki do opcji dojazd własny - 150 zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferu lotnisko-hotel-lotnisko - 370 zł/os. (przy min. 12 osobach)</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>dla osób, które jadą autokarem. Zbiórka w dniu wyjazdu o godz. 20.45, Poznań, parking przed starym ZOO, ul. Zwierzyniecka; wyjazd godz. 21.00; planowany powrót ostatniego dnia imprezy w to samo miejsce, ok. godz. 7.00 rano</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wymagany jest dowód osobisty lub paszport</PageParagraph></ListItem>
                            <ListItem>
                                <PageParagraph>
                                    wymagana jest karta EKUZ (Europejska Karta Ubezpieczenia Zdrowotnego; informacje i
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