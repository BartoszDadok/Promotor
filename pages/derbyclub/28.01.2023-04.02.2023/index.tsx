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
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import { TitleWhite } from "../../../components/atoms/HotelTitleWhite/TitleWhite";
import { Line } from "../../../components/atoms/HotelLine/HotelLine";
import { DetailsWrapper } from "../../../components/atoms/HotelWrappers/DetailsWrapper";
import { PricingWrapper } from "../../../components/atoms/HotelWrappers/PricingWrapper";
import { ListItem } from "../../../components/atoms/HotelListItem/ListItem";
import { List } from "../../../components/atoms/HotelList/HotelList";
import { ListDescribe } from "../../../components/atoms/HotelList/ListDescribe";
import { Title } from "../../../components/atoms/HotelTitle/Title";
import { HeadlineH3 } from "../../../components/atoms/HotelHeadLineH3/HotelHeadLineH3";
import {Link} from "../../../components/atoms/HotelLink/HotelLink"

import derby1 from "../../../public/assets/hotels/derby/1.jpg";
import derby2 from "../../../public/assets/hotels/derby/2.jpg";
import derby3 from "../../../public/assets/hotels/derby/3.jpg";
import derby4 from "../../../public/assets/hotels/derby/4.jpg";
import derby5 from "../../../public/assets/hotels/derby/5.jpg";
import derby6 from "../../../public/assets/hotels/derby/6.jpg";
import derby7 from "../../../public/assets/hotels/derby/7.jpg";
import derby8 from "../../../public/assets/hotels/derby/8.jpg";
import derby9 from "../../../public/assets/hotels/derby/9.jpg";
import derby10 from "../../../public/assets/hotels/derby/10.jpg";
import derby11 from "../../../public/assets/hotels/derby/11.jpg";
import derby12 from "../../../public/assets/hotels/derby/12.jpg";
import derby13 from "../../../public/assets/hotels/derby/13.jpg";
import derby14 from "../../../public/assets/hotels/derby/14.jpg";
import derby15 from "../../../public/assets/hotels/derby/15.jpg";
import derby16 from "../../../public/assets/hotels/derby/16.jpg";
import derby17 from "../../../public/assets/hotels/derby/17.jpg";
import derby18 from "../../../public/assets/hotels/derby/18.jpg";
import derby19 from "../../../public/assets/hotels/derby/19.jpg";
import derby20 from "../../../public/assets/hotels/derby/20.jpg";
import derby21 from "../../../public/assets/hotels/derby/21.jpg";
import derby22 from "../../../public/assets/hotels/derby/22.jpg";
import derby23 from "../../../public/assets/hotels/derby/23.jpg";
import derby24 from "../../../public/assets/hotels/derby/24.jpg";
import derby25 from "../../../public/assets/hotels/derby/25.jpg";
import derby26 from "../../../public/assets/hotels/derby/26.jpg";
import derby27 from "../../../public/assets/hotels/derby/27.jpg";
import derby28 from "../../../public/assets/hotels/derby/28.jpg";
import derby29 from "../../../public/assets/hotels/derby/29.jpg";
import derby30 from "../../../public/assets/hotels/derby/30.jpg";
import derby31 from "../../../public/assets/hotels/derby/31.jpg";
import derby32 from "../../../public/assets/hotels/derby/32.jpg";
import derby33 from "../../../public/assets/hotels/derby/33.jpg";
import derby34 from "../../../public/assets/hotels/derby/34.jpg";
import derby35 from "../../../public/assets/hotels/derby/35.jpg";
import derby36 from "../../../public/assets/hotels/derby/36.jpg";
import derby37 from "../../../public/assets/hotels/derby/37.jpg";
import derby38 from "../../../public/assets/hotels/derby/38.jpg";
import derby39 from "../../../public/assets/hotels/derby/39.jpg";
import derby40 from "../../../public/assets/hotels/derby/40.jpg";
import derby41 from "../../../public/assets/hotels/derby/41.jpg";
import derby42 from "../../../public/assets/hotels/derby/42.jpg";
import derby43 from "../../../public/assets/hotels/derby/43.jpg";
import derby44 from "../../../public/assets/hotels/derby/44.jpg";
import derby45 from "../../../public/assets/hotels/derby/45.jpg";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";

const images = [
    { url: derby1.src, title: "Apartament DerbyClub z zewnątrz" },
    { url: derby2.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby3.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby4.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby5.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby6.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby7.src, title: "Apartament DerbyClub z zewnątrz" },
    { url: derby8.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby9.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby10.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby11.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby12.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby13.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby14.src, title: "Apartament DerbyClub z zewnątrz" },
    { url: derby15.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby16.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby17.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby18.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby19.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby20.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby21.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby22.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby23.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby24.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby25.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby26.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby27.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby28.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby29.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby30.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby31.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby32.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby33.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby34.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby35.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby36.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby37.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby38.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby39.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby40.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby41.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby42.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby43.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby44.src, title: "Apartament DerbyClub wewnątrz" },
    { url: derby45.src, title: "Apartament DerbyClub wewnątrz" },
];



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
                    <TitleMobile>Rezydencja Derby Club - Folgaria</TitleMobile>
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
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Folgaria
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
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament 4
                                            os. (2 pokoje) - 4990 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament 6
                                            os. (3 pokoje) - 7010 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament 4
                                            os. (2 pokoje) - 4990 zł
                                        </PageParagraph>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>+ 425zł autokar za
                                            osobę
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za apartament 6
                                            os. (3 pokoje) - 7010 zł </PageParagraph>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>+ 425zł autokar za
                                            osobę
                                        </PageParagraph>
                                    </ListItem>

                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>APARTAMENTY 3*plus w
                                    pobliżu wyciągów</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Wellness w
                                    rezydencji</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkółka narciarska -
                                    PROMOTOR JUNIOR SKI (dzieci 7-14 lat)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Przedszkole
                                    narciarskie- PROMOTOR BABY SKI (dzieci 4-7 lat)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Objazd tras z
                                    instruktorem</PageParagraph></ListItem>
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
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dojazd autokarem -
                                    425 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przedszkole
                                    narciarskie BABY SKI (4-7 lat) - 1100 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska
                                    JUNIOR SKI (7-14 lat) - 880 PLN</PageParagraph></ListItem>
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
                        <Title>Rezydencja Derby Club - Folgaria</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI FOLGARIA – FIORENTINI - LAVARONE</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            to ponad 100 km tras dwóch wiodących stacji narciarskich w południowo-wschodniej części
                            regionu Trentino. To idealne miejsce dla rodzin z dziećmi. Przeważają tu niebieskie i
                            czerwone trasy, co sprawia, że miejsce to jest wręcz idealne dla średniozaawansowanych i
                            początkujących narciarzy. Jest to ciekawy region zarówno dla miłośników pięknych widoków jak
                            i pasjonatów narciarskich wypraw. Stacje te oferują trasy o różnym stopniu trudności, nie
                            brakuje też tutaj czarnych nartostrad dla osób bardziej wymagających.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Najważniejsze miejsca tego regionu to Tol di Serrada i historyczna trasa Sallzzona di Fondo
                            Grande, Costa, Bertoldi i Malga Rivetta. Dla snowboardzistów przygotowano snow park, dla
                            dzieci parki do zabaw i nauki narciarstwa. Jest to także doskonały region dla amatorów
                            narciarstwa biegowego.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Folgaria to urokliwe miasteczko, szczególnie zimą. Niezwykłe oświetlenie barów i restauracji
                            sprawia, że wieczorny spacer po Folgarii można bez najmniejszego zawahania dodać do listy
                            obowiązkowych miejsc, które warto zobaczyć podczas wyjazdu. Lavarone natomiast, to
                            miejscowość ceniona już za czasów austriackiej arystokracji. To idealne miejsce dla rodzin z
                            dziećmi, oddalone zaledwie o 15 minut busem od Folgarii i w pobliżu wyciągów w Bertoldi.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Skibusy dowożą narciarzy zarówno w obrębie stacji Folgaria (74km tras), jak i stacji
                            Lavarone (30km tras).
                        </PageParagraph>

                        <HeadlineH3>REZYDENCJA DERBY CLUB ***plus</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Duża Rezydencja położona w centrum Folgarii, w pobliżu
                            sklepów, restauracji i barów. Do dyspozycji gości recepcja, ogólnodostępne pomieszczenia do
                            odpoczynku, spotkań i gier, nowy basen kryty, wellness, Mini Club dla dzieci, narciarnia,
                            garaż i parking zewnętrzny.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 0.2em 0" } fontWeight={ "700" }>APARTAMENT 4-OSOBOWY BILO TYP
                            A:</PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>łazienka z prysznicem, sypialnia dla 2 osób, pokój dzienny
                            z 2-os sofą i aneksem
                            kuchennym, ok. 40 m2:</PageParagraph>
                        <PageParagraph margin={ "0 0 0.2em 0" } fontWeight={ "700" }>APARTAMENT 6-OSOBOWY TRILO TYP
                            A:</PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>łazienka z prysznicem, sypialnia dla 2 osób, sypialnia z
                            łóżkiem piętrowym i
                            biurkiem, pokój dzienny z 2-os sofą oraz aneksem kuchennym, ok. 50 m2::</PageParagraph>
                        <PageParagraph margin={ "0 0 0.3em 0" }>Wiele apartamentów posiada balkony.</PageParagraph>
                        <PageParagraph margin={ "0 0 0.3em 0" }>50 m od rezydencji rozpoczyna sie główny deptak w
                            Folgarii. W centrum
                            miejscowości – przy deptaku – sklepy spożywcze, bary, kawiarnie, sklepiki z
                            pamiątkami.</PageParagraph>

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
                            <ListItem><PageParagraph>7 noclegów w wybranym
                                apartamencie/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta</PageParagraph></ListItem>
                            <ListItem><PageParagraph>pościel, ręczniki</PageParagraph></ListItem>
                            <ListItem><PageParagraph>WI-FI w hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>animacje w rezydencji prowadzone przez włoskich
                                instruktorów</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000 EUR
                            </PageParagraph></ListItem>
                            <ListItem><PageParagraph>5% zniżki na skipass</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph fontWeight={ "700" }>6 DNIOWEGO SKIPASSU
                                FOLGARIA-LAVARONE:</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresach (NISKI SEZON):
                                    </PageParagraph>
                                    <PageParagraph fontWeight={ "700" }>
                                        - <u>od otwarcia do 23.12.2022</u> | <u>09.01-20.01.2023</u> | <u>od 13.03 -
                                        koniec sezonu</u>
                                    </PageParagraph>

                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorosły - 198 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior - 138 Euro
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        Cena skipassu na 6 dni w okresie (WYSOKI SEZON): 21.01-12.03.2023
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorołsy - 237 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior - 166 Euro
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                            </ListDescribe>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.5em 0" }>Dzieci urodzone po 30.11.2013r. - gratis (1:1), junior
                            urodzony po
                            30.11.2005r.</PageParagraph>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>wyżywienia</PageParagraph></ListItem>
                            <ListItem><PageParagraph>obligatoryjnego depozytu zwrotnego - 150 EUR/apartament płatnego po
                                przyjeździe w rezydencji lub u rezydenta

                            </PageParagraph></ListItem>
                            <ListItem><PageParagraph>końcowego sprzątania - 60 EUR/apartament lub we własnym zakresie
                                (bez opłat).</PageParagraph></ListItem>
                            <ListItem><PageParagraph>obowiązkowej opłaty „Tesseraclub” – 60 EUR/apartament; obejmuje:
                                korzystanie z basenu, Mini Club - wieczorne animacje dla dzieci, 6 dni w tygodniu
                                (oprócz dnia przyjazdu) 16.00-19.00, dzienne wycieczki, wieczorne show, korzystanie z
                                sali gier z piłkarzykami, TV w apartamencie, Wi-Fi w apartamencie, pościel, ręczniki i
                                ręcznik kuchenny, miejsce parkingowe na zewnątrz lub w garażu, korzystanie z lokalnego
                                skibusa (zatrzymuje się przed rezydencją), TRENTINO GUEST CARD – wstęp do muzeów, na
                                życzenie BABY KIT - wypożyczenie łóżeczka dziecięcego, wysokiego krzesełka oraz
                                podgrzewacza do butelek (łóżeczko zastępuje jedno z łóżek w apartamencie), wypożyczenie
                                mikrofalówki (na zamówienie).</PageParagraph></ListItem>
                            <ListItem><PageParagraph>„Kit Spa” od 16 lat – 30 EUR/osoba/tydzień; opłata dla
                                korzystających ze strefy wellness (bio-sauna ziołowa, łaźnia turecka, sauna fińska,
                                sauna solna, jacuzzi, pomieszczenie relaksacyjne, kącik z herbatami ziołowymi) –
                                obejmuje wypożyczenie szlafroka, klapek i ręcznika.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywną szkółkę narciarską JUNIOR SKI (dzieci 7-14
                                lat) - opieka instruktora, nauka jazdy na nartach, 6 dni ok. 10.00-15.30 - 880
                                zł/dziecko/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty za fakultatywne przedszkole narciarskie BABY SKI (dzieci 4-7
                                lat) - opieka instruktora, nauka jazdy na nartach, 6 dni ok. 10.00-15.30 - 1100
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
                            <ListItem><PageParagraph>taksy klimatycznej 1,5 Euro/os/dzień od 14 roku życia - płatnej na
                                miejscu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferów lotnisko-hotel-lotnisko – 410 zł/os (minimum 12
                                osób)</PageParagraph></ListItem>

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
            <Footer/>
        </>
    )
};

export default Index;