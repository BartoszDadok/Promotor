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
import { images } from "../../../utils/topResidenceImages";

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
                    <TitleMobile>Apartament Top Residence - Val di Sole - Passo del Tonale</TitleMobile>
                    <MobileGallery images={ images }/>
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
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }>
                                <b>Miejscowość: </b> Passo del Tonale
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
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament
                                            Apart. 4 os. Bilo - 6100zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament
                                            Apart. 6 os. Bilo - 8825zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament
                                            Apart. 4 os. Bilo - 6100zł
                                        </PageParagraph>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>+ 450zł autokar za
                                            osobę
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament
                                            Apart. 6 os. Bilo - 8825zł </PageParagraph>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>+ 450zł autokar za
                                            osobę
                                        </PageParagraph>
                                    </ListItem>

                                </List>
                            </PricingWrapper>

                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>REZYDENCJA 3* z
                                    basenem blisko wyciągu</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkółka narciarska -
                                    PROMOTOR JUNIOR SKI (dzieci 7-14 lat)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Przedszkole
                                    narciarskie- PROMOTOR BABY SKI (dzieci 4-7 lat)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Objazd tras
                                    narciarskich z instruktorem</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }> 1 niewykorzystane miejsce
                                        w apartamencie - 680 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                        desce
                                        snowboardowej (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                        nartach (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przedszkole narciarskie
                                        BABY SKI (4-7 lat) - 1100 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie narciarskie -
                                        600 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska JUNIOR
                                        SKI (7-14 lat) - 880 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie rozszerzone
                                        KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie sportów
                                        zimowych - 95 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                        rezygnacji z imprezy + chorób przewlekłych 6%</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                        rezygnacji z imprezy 3%</PageParagraph>
                                </ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Apartament Top Residence - Val di Sole - Passo del Tonale </Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI VAL DI SOLE –
                            ADAMELLO SKI</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Resort narciarski Adamello Ski obejmuje: Tonale, lodowiec Presena, Ponte di Legno i oferuje
                            ok.
                            115 km tras narciarskich. W ostatnich kilku latach realizowano tutaj wiele inwestycji
                            związanych
                            z infrastrukturą narciarską. Powstała gondola Ponte di Legno – Tonale, łącząca ten region w
                            jedną całość, zbudowano nową kolejkę na Presenę, kilka wyciągów w Ponte di Legno i Temu, co
                            bardziej uatrakcyjniło uprawianie sportów zimowych w tym miejscu. W regionie tym jest wiele
                            stoków dla dobrych i bardzo dobrych narciarzy i snowboardzistów, a także trasy dla
                            początkujących. Świetna infrastruktura, snowparki oraz parki zabaw dla dzieci przyciągają do
                            tego miejsca także młodych adeptów białego szaleństwa. Podczas pobytu realizujemy program
                            narciarski oparty o skipass Adamello Ski.
                        </PageParagraph>

                        <HeadlineH3>Rezydencja TOP ***</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Położona w słonecznej części Passo del Tonale, ok. 80 m od
                            wyciągu. Rezydencja posiada bar, restaurację serwującą śniadania, czytelnię i salę
                            konferencyjną. Darmowe WiFi w barze i przy recepcji. Do dyspozycji gości fitness, kryty
                            basen: 2 wejścia w turnusie gratis, alternatywnie 2 wejścia do sauny lub 2 wejścia do
                            jacuzzi gratis. Basen czynny od 20.12.2020 do 09.04.2021. Obiekt posiada narciarnię, parking
                            zewnętrzny, garaż (za dopłatą).
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }><b>Apartament 4 os. Bilo</b> – pokój dzienny z w pełni
                            wyposażonym aneksem kuchennym i rozkładaną 2 osobową sofą, jedna sypialnia z 2 miejscami do
                            spania, sejf, telewizor i łazienka z suszarką do włosów.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }><b>Apartament 6/7 os.</b> Trilo – pokój dzienny z w pełni
                            wyposażonym aneksem kuchennym i
                            rozkładaną 2 osobową sofą, jedna sypiania z 2 miejscami do spania, druga sypiania z 3
                            miejscami do spania (łóżko małżeńskie + łóżko pojedyncze), sejf, telewizor i 2 łazienki z
                            suszarkami do włosów.
                        </PageParagraph>

                        <HeadlineH3>SZKÓŁKA NARCIARSKA JUNIOR SKI ORAZ
                            PRZEDSZKOLE NARCIARSKIE BABY SKI</HeadlineH3>
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
                            <ListItem><PageParagraph>7 noclegów w apartamencie 4/6 osobowym</PageParagraph></ListItem>
                            <ListItem><PageParagraph>zużycie gazu, elektryczności</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ręczniki, pościel</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 Euro i NNW 5 000
                                Euro</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph fontWeight={ "700" }>6 dniowego karnetu
                                narciarskiego</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresie: 29.10.2022-01.05.2023, dorosły - 258 Euro
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresie:, 29.10.2022-01.05.2023, junior - 182 Euro
                                    </PageParagraph>
                                </ListItem>
                            </ListDescribe>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.5em 0" }>Dzieci urodzone po 30.04.2014r. - gratis (1:1), junior
                            urodzony po
                            30.04.2006r.</PageParagraph>
                        <PageParagraph>Zwrotny depozyt za skipass 5 Euro. Ubezpieczenie skipassu 2,5
                            Euro/dzień.</PageParagraph>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywną szkółkę narciarską JUNIOR SKI (dzieci 7-14
                                lat)
                                - opieka instruktora, nauka jazdy na nartach, 6 dni ok. 10.00-15.30 -880
                                zł/dziecko/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne przedszkole narciarskie BABY SKI (dzieci 4-7
                                lat) - opieka instruktora, nauka jazdy na nartach, 6 dni ok. 10.00-15.30 - 1100
                                zł/dziecko/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os.
                                (6
                                dni x 2 godziny dziennie ); należy zgłosić przy podpisywaniu umowy, szkolenie
                                uruchamiamy
                                przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa
                                lub snowboardu - ZALECAMY !!!</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość
                                zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych
                                ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>kaucja zwrotna za apartament 100
                                Euro/apartament</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłata za niwykorzystane miejsce w apartamencie 680
                                zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłata za końcowe sprzątanie 50 Euro/apart. Bilo, 60 Euro
                                apartament Trilo</PageParagraph></ListItem>
                            <ListItem><PageParagraph>śniadanie - 7 Euro/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 1,5 Euro/os/dzień od 14 roku życia; płatnej na
                                miejscu</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem>
                                <PageParagraph>dla osób jadących autokarem: w grudniu zbiórka o godz. 20.45, Poznań,
                                    parking przy Starym Zoo, ul. Zwierzyniecka; wyjazd godz.
                                    21.00
                                </PageParagraph>
                            </ListItem>

                            <ListItem>
                                <PageParagraph>planowany powrót w to samo miejsce ostatniego dnia trwania imprezy w
                                    godzinach wczesno porannych
                                </PageParagraph>
                            </ListItem>
                            <ListItem>
                                <PageParagraph>uczestnictwo w wyjeździe nie wymaga pozyskania dla obywatela Polski
                                    wizy. Każdy uczestnik musi zabrać ze sobą ważny dowód osobisty (obywatel UE) lub
                                    paszport
                                </PageParagraph>
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
            <Footer/>
        </>
    );
};

export default Index;