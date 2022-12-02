import React, { useState } from "react";
import Navigation from "../../../components/organisms/Navigation/Navigation";
import Modal from "../../../components/organisms/Modal/Modal";
import Footer from "../../../components/organisms/Footer/Footer";
import ReservationForm from "../../../components/organisms/ReservationForm/ReservationForm";
import Gallery from "../../../components/organisms/Gallery/Gallery";
import { PageParagraph } from "../../../components/atoms/PageParagraph/PageParagraph";
import { PageWrapper } from "../../../components/atoms/HotelWrappers/PageWrapper";
import { ContentWrapper } from "../../../components/atoms/HotelWrappers/ContentWrapper";
import { LeftSideWrapper } from "../../../components/atoms/HotelWrappers/LeftSideWrapper";
import { RightSideWrapper } from "../../../components/atoms/HotelWrappers/RightSideWrapper";
import { TitleWhite } from "../../../components/atoms/HotelTitleWhite/TitleWhite";
import { Line } from "../../../components/atoms/HotelLine/HotelLine";
import { DetailsWrapper } from "../../../components/atoms/HotelWrappers/DetailsWrapper";
import { PricingWrapper } from "../../../components/atoms/HotelWrappers/PricingWrapper";
import { ListItem } from "../../../components/atoms/HotelListItem/ListItem";
import { List } from "../../../components/atoms/HotelList/HotelList";
import { ListDescribe } from "../../../components/atoms/HotelList/ListDescribe";
import { Title } from "../../../components/atoms/HotelTitle/Title";
import { HeadlineH3 } from "../../../components/atoms/HotelHeadLineH3/HotelHeadLineH3";
import { Link } from "../../../components/atoms/HotelLink/HotelLink";
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";
import { images } from "../../../utils/hausImages";


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
                    <TitleMobile>Hotel Haus an der Luck - Val Gardena/Alpe di Siusi - SKI SAFARI</TitleMobile>
                    <MobileGallery images={ images }/>
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