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


import prom1 from "../../../public/assets/hotels/prom/1.jpg";
import prom2 from "../../../public/assets/hotels/prom/2.jpg";
import prom3 from "../../../public/assets/hotels/prom/3.jpg";
import prom4 from "../../../public/assets/hotels/prom/4.jpg";
import prom5 from "../../../public/assets/hotels/prom/5.jpg";
import prom6 from "../../../public/assets/hotels/prom/6.jpg";
import prom7 from "../../../public/assets/hotels/prom/7.jpg";
import prom8 from "../../../public/assets/hotels/prom/8.jpg";
import prom9 from "../../../public/assets/hotels/prom/9.jpg";
import prom10 from "../../../public/assets/hotels/prom/10.jpg";
import prom11 from "../../../public/assets/hotels/prom/11.jpg";
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";


const images = [
    { url: prom1.src, title: "Hotel Prom z zewnątrz" },
    { url: prom2.src, title: "Hotel Prom  z zewnątrz" },
    { url: prom3.src, title: "Hotel Prom wewnątrz" },
    { url: prom4.src, title: "Hotel Prom wewnątrz" },
    { url: prom5.src, title: "Hotel Prom wewnątrz" },
    { url: prom6.src, title: "Hotel Prom wewnątrz" },
    { url: prom7.src, title: "Hotel Prom wewnątrz" },
    { url: prom8.src, title: "Hotel Prom wewnątrz" },
    { url: prom9.src, title: "Hotel Prom z zewnątrz" },
    { url: prom10.src, title: "Hotel Prom wewnątrz" },
    { url: prom11.src, title: "Hotel Prom wewnątrz" },
];



const Index = () => {
    const date = ["29.01.2023 - 03.02.2023", "29.01.2023 - 03.02.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Hotel Prom *** - Karkonosze - CZECHY</TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                29.01.2023 - 03.02.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                29.01.2023 - 03.02.2023</PageParagraph>

                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Czechy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Svoboda nad
                                Upou
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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli i
                                        młodzież - 1550
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3
                                        lat -
                                        50
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 3-12
                                        lat -
                                        1200
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 12-15
                                        lat
                                        - 1430
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli i
                                        młodzież - 1700
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3
                                        lat -
                                        200
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 3-12
                                        lat -
                                        1350
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 12-15
                                        lat
                                        - 1580
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL 3* Z
                                    WELLNESS</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI SAFARI -
                                    odwiedzanie różnych stacji narciarskich</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkólka narciarska -
                                    PROMOTOR JUNIOR SKI (dzieci 7-14 lat)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Przedszkole
                                    narciarskie - PROMOTOR BABY SKI (dzieci 4-6 lat)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Dojazd własny lub
                                    autokarem Z POZNANIA przy minimum 25 os. chętnych</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie dla dorosłych i młodzieży</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    desce snowboardowej (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    nartach (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    1os - 280 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska
                                    JUNIOR SKI Karkonosze - 650 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy + chorób przewlekłych 6%</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy 3%</PageParagraph></ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Hotel Prom *** - Karkonosze - CZECHY</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>SVOBODA NAD UPOU K/ JANSKYCH LAZNI</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Dolina leży w prowincji Piemonte w pobliżu granicy z Francją. Resort narciarski zwany
                            Vialattea czyli droga mleczna, składa się z połączonych siecią wyciągów stacji narciarskich:
                            Sestriere, Sauze d’Oulx, Sansicario, Cesana, Claviere i Montgenevre (Francja). W sumie to
                            ponad 200 tras narciarskich o łącznej długości ok. 400 km. Vialattea słynie z olbrzymich
                            przestrzeni zaśnieżonych gór, słońca, widokowych i długich tras narciarskich. Różnorodność
                            tras narciarskich i snowparki zadowolą zarówno najbardziej wymagających narciarzy jak i tych
                            początkujących. Najsłynniejsza miejscowość regionu to Sestriere, położona na wysokości 2035
                            m n.p.m. była miejscem Zimowych Igrzysk Olimpijskich w 2006r. Słynna Vialattea to super
                            nowoczesne wyciągi o przepustowości 100 000 osób na godzinę oraz największa w Alpach
                            struktura sztucznego naśnieżania, która obejmuję aż 950 armatek śnieżnych na 120 km tras.
                        </PageParagraph>

                        <HeadlineH3>HOTEL PROM ***</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Hotel położony w miejscowości Svoboda nad Upou, ok. 2km od
                            stacji narciarskiej Janske Lazne i 300m od resortu Duncan, oferuje pokoje 2,3,4 osobowe z
                            łazienkami, TV-sat, telefonem, lodówką. Hotelowa restauracja serwuje tradycyjne dania kuchni
                            czeskiej. Na gości czeka także bar, kryty basen, wellness (sauna, solarium, whirlpool,
                            fitness - dodatkowo płatne), narciarnia, bilard, tenis stołowy, piłkarzyki, kącik zabaw dla
                            dzieci, Internet, parking. W pobliżu hotelu wypożyczalnia nart i sprzętu zimowego. Tuż obok
                            budynku przystanek skibusa do gondoli w Jankich Lazniach i do wyciągu Jawor w Pecu.
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
                            <ListItem><PageParagraph>5 noclegów w pokoju 2,3,4,5 os.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>2wyżywienie 2 x dziennie (5 śniadań w formie bufetu i 5
                                trzydaniowych obiadokolacji); napoje do obiadokolacji dodatkowo
                                płatne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota i instruktorów</PageParagraph></ListItem>
                            <ListItem><PageParagraph>program SKI SAFARI w Karkonoszach
                                Czeskich</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksę klimatyczną</PageParagraph></ListItem>
                            <ListItem><PageParagraph>uroczyste zakończenie turnusu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>organizacja szkoleń narciarskich,</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Gwarancyjny Fundusz Tuystyczny i
                                Pomocowy</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.6em 0" }>Ostateczny program SKI SAFARI ustalany jest przez
                            organizatora po przyjeździe grupy na miejsce pobytu i zależy od bieżących możliwości jego
                            realizacji, w tym m.in. od warunków pogodowych.</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" }>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę
                            dorosłą.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>

                        <ListDescribe margin={ "0 0 1em 0" }>

                            <ListItem><PageParagraph fontWeight={ "700" }>4-dniowy karnet, skipass narciarski SKIRESORT
                                CERNA HORA-PEC (ceny w CZK za osobę):</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Dorośli - ok 3300 CZK
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Seniorzy powyżej 63 lat - ok 2800 CZK
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Juniorzy 12 - 17,99 lat - ok 2700 CZK
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Dzieci 6 - 11,99 lat - ok 2250 CZK
                                    </PageParagraph>
                                </ListItem>
                            </ListDescribe>
                            <PageParagraph margin={ "0 0 0.5em 0" }>Dzieci do 5,99 lat ur. w 2017 i młodsze - skipass
                                gratsi (1:1)</PageParagraph>

                            <ListItem><PageParagraph>opłaty za fakultatywną szkółkę narciarską JUNIOR SKI (dzieci 7-14
                                lat) - opieka instruktora, nauka jazdy na nartach</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ok. 10.00-15.30 - 520 zł/dziecko/4 dni</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne przedszkole narciarskie BABY SKI (dzieci 4-7
                                lat) - opieka instruktora, nauka jazdy na nartach, ok. 10.00-15.30 - 640 zł/dziecko/4
                                dni</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie dorosłych w grupie -
                                350 zł/os. (4 dni x 2 godziny dziennie ); należy zgłosić przy podpisywaniu umowy,
                                szkolenie uruchamiamy przy zgłoszeniu min. 5 os. w tej samej
                                grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>rozszerzonego ubezpieczenia narciarskiego, ubezpieczenia ryzyka
                                rezygnacji z imprezy, dodatkowego ubezpieczenie ryzyka chorób przewlekłych i
                                nowotworowych - na zapytanie </PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystania z wellness w hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wstępu na basen w hotelu - ok. 150 CZK</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1 os. – 280
                                zł/os/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery do stacji narciarskich do opcji dojazd własny - 80
                                zł/os</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>zbiórka w dniu wyjazdu o godz. 9.45, wyjazd o godz. 10.00 Poznań, ul. Zwierzyniecka, parking przed wejściem do Starego Zoo.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>planowany powrót do Poznania ostatniego dnia imprezy ok godz. 17.00 w miejsce j.w.)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>uczestnictwo w wyjeździe nie wymaga pozyskania dla obywatela
                                Polski
                                wizy. Każdy uczestnik musi zabrać ze sobą ważny dowód osobisty (obywatel UE) lub
                                paszport</PageParagraph></ListItem>
                            <ListItem>
                                <PageParagraph>
                                    wymagana jest karta EKUZ (Europejska Karta Ubezpieczenia Zdrowotnego;
                                    informacje i
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