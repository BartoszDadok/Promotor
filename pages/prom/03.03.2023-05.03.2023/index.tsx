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
import { TableWrapper } from "../../../components/atoms/HotelWrappers/TableWrapper";
import { Row } from "../../../components/atoms/HotelRow/HotelRow";
import { Time } from "../../../components/atoms/HotelTime/HotelTime";
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";
import { images } from "../../../utils/promImages";

const Index = () => {
    const date = ["03.03.2023 - 05.03.2023", "03.03.2023 - 05.03.2023"];
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
                                03.03.2023 - 05.03.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                03.03.2023 - 05.03.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } fontWeight={ "700" } color={ "white" }><u>UWAGA !
                                Realizujemy inne terminy dla grup na zapytanie</u></PageParagraph>

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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>618
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>698
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Weekend
                                    narciarski</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Także jako
                                    &apos;&apos;rozgrzewka&apos;&apos; przed dłuższym wyjazdem
                                    zimowym</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Wiele terminów w
                                    ciągu zimy</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI SAFARI–
                                    odwiedzanie różnych stacji narciarskich</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL 3* Z
                                    WELLNESS</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
                            </List>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>3-dniowe szkolenie
                                    narciarskie - 250 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    desce snowboardowej (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    nartach (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    1os - 140 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Expressy-transfery
                                    na stok (dojazd własny) - 45 PLN</PageParagraph></ListItem>
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

                        <HeadlineH3>PLANOWANY PROGRAM WYJAZDU AUTOKAREM:</HeadlineH3>
                        <TableWrapper>
                            <Row>
                                <Time>I DZIEŃ:</Time>
                            </Row>
                            <Row>
                                <Time>5.00</Time>
                                <PageParagraph>Zbiórka w Poznaniu ul. Zwierzyniecka przy starym
                                    ZOO, przejazd trasą: Leszno – Głogów – Legnica – Lubawka - Trutnov – Jańskie
                                    Łaźnie</PageParagraph>
                            </Row>
                            <Row>
                                <Time>ok. 10.00</Time>
                                <PageParagraph>Przyjazd pod stację wyciągu w Jańskich
                                    Łaźniach</PageParagraph>
                            </Row>
                            <Row>
                                <Time>10.00-16.00</Time>
                                <PageParagraph>Narciarstwo na stokach Czarnej
                                    Góry</PageParagraph>
                            </Row>
                            <Row>
                                <Time>ok. 17.00</Time>
                                <PageParagraph>Przejazd do hotelu, zakwaterowanie,
                                    obiadokolacja</PageParagraph>
                            </Row>
                            <Row>
                                <Time>19.00 – 23.00</Time>
                                <PageParagraph>Wieczór przy muzyce lub disco</PageParagraph>
                            </Row>
                        </TableWrapper>
                        <TableWrapper>
                            <Row>
                                <Time>II DZIEŃ:</Time>
                            </Row>
                            <Row>
                                <Time>8.00</Time>
                                <PageParagraph>Śniadanie</PageParagraph>
                            </Row>
                            <Row>
                                <Time>9:00 - 16.00</Time>
                                <PageParagraph>Narciarstwo – wyciągi Szpindlerowy Młyn lub Janskie Laznie -
                                    Pec</PageParagraph>
                            </Row>
                            <Row>
                                <Time>18:00</Time>
                                <PageParagraph>Powrót do hotelu i obiadokolacja</PageParagraph>
                            </Row>
                            <Row>
                                <Time>19:00 - 23:00</Time>
                                <PageParagraph>Spotkanie przy muzyce, bowling, bilard, tenis stołowy</PageParagraph>
                            </Row>
                        </TableWrapper>
                        <TableWrapper>
                            <Row>
                                <Time>III DZIEŃ:</Time>
                            </Row>
                            <Row>
                                <Time>8.00</Time>
                                <PageParagraph>Śniadanie, wykwaterowanie z hotelu</PageParagraph>
                            </Row>
                            <Row>
                                <Time>9:00 - 14.00</Time>
                                <PageParagraph> Narciarstwo - Pec pod Śnieżką</PageParagraph>
                            </Row>
                            <Row>
                                <Time>ok 16:00</Time>
                                <PageParagraph>Wyjazd do Polski, możliwy postój w Trutnovie – zakupy</PageParagraph>
                            </Row>
                            <Row>
                                <Time>ok 22:00</Time>
                                <PageParagraph>Powrót do Poznania – ul. Zwierzyniecka przy Starym Zoo</PageParagraph>
                            </Row>
                        </TableWrapper>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Organizator zastrzega sobie prawo zmiany hotelu na inny o tym samym standardzie, zmiany
                            programu narciarskiego, jak również prawo zmiany charakteru imprezy w przypadku utrudnionych
                            warunków atmosferycznych lub braku śniegu.
                        </PageParagraph>
                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>2 noclegi w pokojach 2,3,4 osobowych z
                                łazienkami</PageParagraph></ListItem>
                            <ListItem><PageParagraph>2 śniadania, 2 obiadokolacje (napoje do obiadokolacji dodatkowo
                                płatne)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd na trasie Poznań – Czechy - Poznań autokarem klasy Lux
                                (klimatyzacja, barek, TV, WC)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota - instruktorów</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dla chętnych objazd tras z instruktorem</PageParagraph></ListItem>
                            <ListItem><PageParagraph>program SKI SAFARI w Karkonoszach
                                Czeskich</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery z hotelu do stacji narciarskich: Janskie Laznie, Pec pod
                                Śnieżką, Szpindlerowy Młyn, Skipark - Cerny Dul (organizator zastrzega sobie prawo
                                zmiany programu narciarskiego) - autokar lub skibus</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksę klimatyczną</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Gwarancyjny Fundusz Turystyczny i
                                Pomocowy</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.6em 0" }>Brak zniżek dla dzieci.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>

                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>karnetu narciarskiego - 3-dniowy karnet narciarski ok 3000
                                CZK</PageParagraph></ListItem>
                            <ListItem><PageParagraph>fakultatywnego szkolenia narciarskiego - 250 zł/os. (3 dni x 2
                                godziny dziennie przy zgłoszeniu min. 5 osób w tym samym terminie); chęć udziału w
                                szkoleniu należy zgłosić przy podpisywaniu umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu - na zapytanie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny wyjazdu
                                (możliwość zawarcia tego ubezpieczenia tylko w momencie podpisywania
                                umowy)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka chorób przewlekłych i
                                nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystania z basenu i wellness w hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1 os. – 140 zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>cena wyjazdu z dojazdem własnym nie zawiera przejazdów oraz
                                transferów do stacji narciarskich, możliwość dokupienia transferów - 45
                                zł/os</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>grupa autokarowa: zbiórka pierwszego dnia imprezy o godz. 4.45 nad
                                ranem, Poznań, parking przy Starym Zoo, ul. Zwierzyniecka 19; wyjazd godz.
                                5.00</PageParagraph></ListItem>
                            <ListItem><PageParagraph>powrót w to samo miejsce ok. godz. 23.00 ostatniego dnia
                                imprezy</PageParagraph></ListItem>
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