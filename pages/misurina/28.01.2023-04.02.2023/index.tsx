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
import { images } from "../../../utils/misurinaImages";

const Index = () => {
    const date = ["28.01.2023 - 04.02.2023", "27.01.2023 - 05.02.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Hotel Misurina - Cortina d’Ampezzo</TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                28.01.2023 - 04.02.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                27.01.2023 - 05.02.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Cortina
                                d&apos;Ampezzo
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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2585
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci do 12
                                        lat -
                                        80
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci powyżej
                                        13
                                        lat -
                                        1935
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2800
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci do 12 lat
                                        lat -
                                        505
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci powyżej
                                        13
                                        lat -
                                        2360
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Dziecko do 12 lat
                                    pobyt w hotelu gratis (polisa 80 ZŁ)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL 4* Z BASENEM I
                                    WELLNESS</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkółka narciarska -
                                    PROMOTOR JUNIOR SKI (dzieci 7-14 lat)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie dla dorosłych</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    Family Room (2+3) - 625 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przedszkole
                                    narciarskie BABY SKI (4-7 lat) - 1100 PLN</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska
                                    JUNIOR SKI (7-14 lat) - 880 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie
                                    rozszerzone KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie
                                    sportów zimowych - 95 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy 3%</PageParagraph></ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Hotel Misurina - Cortina d’Ampezzo</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI CORTINA D’AMPEZZO</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Wyśmienita stacja narciarska, jedna z najpiękniejszych i najbardziej elitarnych we Włoszech,
                            miejsce organizacji zawodów Pucharu Świata w Narciarstwie Alpejskim. Oferuje nowoczesną
                            infrastrukturę narciarską, doskonale przygotowane trasy zapewniające komfort nawet
                            najbardziej wymagającym narciarzom. Najdłuższa trasa to Lagazuoi-Armentarola licząca 7,5 km
                            z różnicą poziomów 1100 m. Dla początkujących oraz dzieci proponujemy łagodne łączki, ski
                            parki i wyciągi na terenie Socrepes oraz Guargne. Karnet narciarski obejmuje też 3 mniejsze
                            stacje: San Vito di Cadore, Misurina oraz Auronzo. W sumie do dyspozycji jest 55
                            nowoczesnych wyciągów i ok. 150 km tras zjazdowych, najwyższy punkt na wysokości 3243 m
                            n.p.m.
                        </PageParagraph>

                        <HeadlineH3>GRAND HOTEL MISURINA ****</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Elegancki hotel w alpejskim stylu, położony w
                            Cortina-Misurina w regionie narciarskim Cortina d’Ampezzo. Grand Hotel Misurina posiada 5
                            pięter, 86 pokoi z TV-Sat, windę i suszarki w łazienkach. Pokoje są 2, 3, 4 osobowe oraz 4/5
                            osobowe dwupokojowe Family Room 2+2 lub 2+3 (za dopłatą). W hotelu znajduje się bar i
                            restauracja oferująca wyżywienie: śniadania w formie bogatego bufetu i 4 daniowe
                            obiadokolacje serwowane do stołu. W restauracji wymagane jest pełne obuwie. Dostępny jest
                            basen wewnętrzny o powierzchni 80m2 oraz mały basen dla dzieci. Od roku goście mogą
                            korzystać z nowego centrum wellness (sauny, jacuzzi, pokój relaksu i masaże - dodatkowo
                            płatne) oraz fitness. Trzy razy w tygodniu organizowane są wieczorne spotkania z muzyką na
                            żywo, klub dla dzieci w wieku 4-12 lat, animacje. Do dyspozycji gości Wi-Fi w lobby
                            hotelowym, narciarnia, parking, winda. W pobliżu znajduje się również wypożyczalnia sprzętu
                            zimowego.
                        </PageParagraph>

                        <HeadlineH3>SZKÓŁKA NARCIARSKA JUNIOR SKI</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Program dedykowany jest dzieciom w wieku 7-14 lat, a
                            przedszkola
                            dzieciom w wieku 4-7 lat, wyjeżdżającym na wczasy z rodzicami/opiekunami. W ramach programu
                            zapewniamy opiekę nad dziećmi w godz. 10.00-15.30, każdego dnia przeznaczonego na jazdę na
                            nartach. Dzieci pozostają pod opieką naszych instruktorów, mających doświadczenie w pracy z
                            dziećmi, którzy prowadzą szkolenie narciarskie w grupach 5–10 osobowych (podział na grupy
                            zależy
                            od wieku i umiejętności narciarskich). Uczestnicy szkółki i przedszkola ubierani są na stok
                            w
                            rozpoznawalne, odblaskowe kamizelki z logo biura.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Zajęcia - zwłaszcza dla dzieci młodszych - prowadzone są w formie zabawy. Najmłodsi
                            narciarze
                            potrzebują częstszych przerw oraz zmian charakteru zajęć, dlatego oprócz nauki narciarstwa
                            planowanej na 2-4 godziny dziennie planujemy dla nich rozmaite zabawy na śniegu.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Starsi większość czasu spędzają na nauce i doskonaleniu techniki jazdy na nartach. Dla
                            zaawansowanych wprowadzamy jazdę sportową.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Dzieci w każdym wieku oprócz narciarstwa chętnie biorą udział w organizowanych przez naszych
                            instruktorów saneczkarstwie, rozmaitych zabawach i zawodach na śniegu.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            W niektórych przypadkach – szczególnie w odniesieniu do najmłodszych narciarzy - potrzebna
                            bywa
                            obecność rodzica w pobliżu stoku podczas szkolenia narciarskiego. Prosimy przygotować się na
                            taką okoliczność.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Od godz.15.30 opiekę nad dziećmi przejmują rodzice.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Na zakończenie turnusu organizujemy podsumowanie szkolenia, omówienie postępów i rozdanie
                            wszystkim dzieciom upominków.
                        </PageParagraph>

                        <PageParagraph margin={ "0 0 1em 0" }>
                            Każde dziecko obowiązkowo zabiera kask, ważny paszport lub dowód osobisty, kartę EKUZ.
                        </PageParagraph>

                        <HeadlineH3>RAMOWY PROGRAM DNIA:</HeadlineH3>
                        <PageParagraph>
                            10:00 – 10:15 - rozgrzewka na stoku
                        </PageParagraph>

                        <PageParagraph>
                            10:15 – 12:30 - szkolenie narciarskie
                        </PageParagraph>

                        <PageParagraph>
                            12:30 – 13:00 - przerwa w schronisku
                        </PageParagraph>

                        <PageParagraph>
                            13:00 – 14:00 - gry i zabawy na śniegu
                        </PageParagraph>

                        <PageParagraph>
                            14:00 – 15:30 - kontynuacja szkolenia na nartach
                        </PageParagraph>

                        <PageParagraph>
                            15:30 - odbiór dzieci przez opiekunów
                        </PageParagraph>

                        <PageParagraph margin={ "1em 0 1em 0" }>
                            Szkółkę narciarską JUNIOR SKI oraz przedszkole narciarskie BABY SKI uruchamiamy przy minimum
                            5
                            uczestnikach.
                        </PageParagraph>

                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokoju standarodowym</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie (7 śniadań w formie bufetu, 7 serwowanych
                                obiadokolacji)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>3 x w tygodniu po kolacji muzyka na żywo</PageParagraph></ListItem>
                            <ListItem><PageParagraph>1 x regionalna kolacja</PageParagraph></ListItem>
                            <ListItem><PageParagraph>bezpłatne korzystanie z basenu w hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet WI-FI w lobby hotelowym</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu
                                Turystycznego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę dorosłą.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph fontWeight={ "700" }>6 DNIOWEGO SKIPASSU
                                Ski Resort Cortina d’Ampezzo:</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresach (NISKI SEZON):
                                    </PageParagraph>
                                    <PageParagraph fontWeight={ "700" }>
                                        <u>08 - 28.01.2023</u> | <u>19.03 - 01.05.2023</u>
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorosły - 312 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Senior(urodzony przed 26.11.1957) - 281 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior(urodzony po 26.11.2006) - 219 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Dzieci(urodzone po 26.11.2014 - 3-8lat) - Gratis
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresie (WYSOKI SEZON): 25.12.2022 - 07.01.2023
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorosły - 347 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Senior(urodzony przed 26.11.1957) - 312 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior(urodzony po 26.11.2006) - 243 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Dzieci(urodzone po 26.11.2014 - 3-8lat) - Gratis
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                            </ListDescribe>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.5em 0" }>Kaucja zwrotna za skipass – 5 EUR</PageParagraph>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywną szkółkę narciarską JUNIOR SKI (dzieci 7-14
                                lat) - opieka instruktora, nauka jazdy na nartach, 6 dni ok. 10.00-15.30 - 880
                                zł/dziecko/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os.
                                (6 dni x 2 godziny dziennie); należy zgłosić przy podpisywaniu umowy, szkolenie
                                uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych
                                ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej – dot. dorosłych i dzieci od 10 roku życia; 2
                                Euro/os/dzień; płatne w hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1os – 950
                                zł/pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju Family Room (2+2) - 625
                                zł/pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transport autokarem z Poznania - 425 zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery na miejscu ( dla klientów z dojazdem własnym) - 210
                                zł</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>

                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem>
                                <PageParagraph>uczestnictwo w wyjeździe nie wymaga pozyskania dla obywatela Polski
                                    wizy. Każdy uczestnik musi zabrać ze sobą ważny dowód osobisty (obywatel UE) lub
                                    paszport</PageParagraph>
                            </ListItem>
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
            <Footer/>;
        </>
    )
        ;
};

export default Index;