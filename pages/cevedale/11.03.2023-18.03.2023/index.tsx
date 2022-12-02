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
import { Link } from "../../../components/atoms/HotelLink/HotelLink";
import { InfoWrapper } from "../../../components/atoms/HotelWrappers/InfoWrapper";

import cevedele1 from "../../../public/assets/hotels/cevedele/1.jpg";
import cevedele2 from "../../../public/assets/hotels/cevedele/2.jpg";
import cevedele3 from "../../../public/assets/hotels/cevedele/3.jpg";
import cevedele4 from "../../../public/assets/hotels/cevedele/4.jpg";
import cevedele5 from "../../../public/assets/hotels/cevedele/5.jpg";
import cevedele6 from "../../../public/assets/hotels/cevedele/6.jpg";
import cevedele7 from "../../../public/assets/hotels/cevedele/7.jpg";
import cevedele8 from "../../../public/assets/hotels/cevedele/8.jpg";
import cevedele9 from "../../../public/assets/hotels/cevedele/9.jpg";
import cevedele10 from "../../../public/assets/hotels/cevedele/10.jpg";
import cevedele11 from "../../../public/assets/hotels/cevedele/11.jpg";
import cevedele12 from "../../../public/assets/hotels/cevedele/12.jpg";
import cevedele13 from "../../../public/assets/hotels/cevedele/13.jpg";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";


const images = [
    { url: cevedele1.src, title: "Hotel Cevedele z zewnątrz" },
    { url: cevedele2.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele3.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele4.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele5.src, title: "Hotel Cevedele z zewnątrz" },
    { url: cevedele6.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele7.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele8.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele9.src, title: "Hotel Cevedele z zewnątrz" },
    { url: cevedele10.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele11.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele12.src, title: "Hotel Cevedele wewnątrz" },
    { url: cevedele13.src, title: "Hotel Cevedele wewnątrz" },

];

const Index = () => {
    const date = ["11.03.2023 - 18.03.2023", "10.03.2023 - 19.03.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Hotel Cevedale - Val di Sole - Pejo</TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                11.03.2023 - 18.03.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                10.03.2023 - 19.03.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }>
                                <b>Miejscowość: </b> Cogolo di Pejo
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                                zakwaterowania: </b> Hotel
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Wyżywienie: </b>Pełne
                            </PageParagraph>

                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }>
                                    <b>Cennik z dojazdem własnym:</b>
                                </PageParagraph>
                                <List>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2549 zł
                                        </PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2849
                                            zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>

                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>


                            <List>
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
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dodatkowe miejsce w
                                        autokarze - 200 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju 1os -
                                        450 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju Family
                                        Junior Suite (2+2) - 950 PLN</PageParagraph>
                                </ListItem>

                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju Junior
                                        Suite 700 zł /pokój/tydzień</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie narciarskie -
                                        600 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie rozszerzone
                                        KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie
                                        sportów zimowych - 95 PLN</PageParagraph>
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
                        <Title>Hotel Cevedale - Val di Sole - Pejo</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <InfoWrapper>
                            <TitleWhite>SKI 50+ AKTYWNIE!</TitleWhite>
                            <PageParagraph fontSize={ "1.2rem" } color={ "white" } margin={ "0.5em 0 0.5em 0" }>
                                Program ACTIVE 50+ wraz z pobytem w Alpach włoskich obejmuje:
                            </PageParagraph>
                            <List>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        po nartach odnowa biologiczna w hotelowym wellness/sauny, jacuzzi, basen
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        Aqua Body Control System – kształtowanie sylwetki i motoryki w wodzie
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        wieczór z muzyką
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        uroczyste zakończenie turnusu (wieczór z muzyką)
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        slalom narciarski dla wszystkich uczestników
                                    </PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph color={ "white" } fontWeight={ "700" }>
                                        uroczyste zakończenie turnusu
                                    </PageParagraph>
                                </ListItem>

                            </List>
                        </InfoWrapper>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI VAL DI SOLE (DOLINA SŁOŃCA)</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            jeden z największych i najbardziej znanych regionów narciarskich Włoch, położony między
                            jeziorem Garda a południowym Tyrolem. Charakteryzują go obfite opady śniegu i duża ilość
                            słonecznych dni w roku, dzięki czemu jest to wymarzone miejsce do uprawiania sportów
                            zimowych. Trasy resortu są szerokie, o różnym stopniu nachylenia, doskonale przygotowane,
                            częściowo osłonięte lasami. Val di Sole polecane jest dla narciarzy i snowboardzistów o
                            różnych stopniach zaawansowania. Najbardziej znane ośrodki zimowe to Marilleva i Madonna di
                            Campiglio, Folgarida, Pinzolo, Pejo, Tonale i Ponte di Legno. W sumie 380 km tras
                            zjazdowych. Stacja Val di Sole proponuje kilka rodzajów skipassów, sugerujemy zakup
                            najbardziej optymalnego karnetu Combi 3+3 (3 dni Pejo + 3 dni Superskirama). Podczas imprezy
                            realizujemy transfery do stacji narciarskich/wyciągów: Marilleva-Madonna, Passo del Tonale,
                            Pejo Fonti.
                        </PageParagraph>

                        <HeadlineH3>STACJA PEJO</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>to najwyżej położona gmina w Trydencie, będąca
                            jednocześnie ośrodkiem turystycznym o najdłuższej historii w Val di Sole. Ta stacja
                            narciarska to idealne miejsce dla rodzin z dziećmi (kameralna stacja, wyciągi dla dzieci), a
                            także amatorów długich tras zjazdowych (najdłuższa trasa liczy ok. 8 km długości).
                            Nowoczesna kolejka linowa „Pejo 3000” zabiera narciarzy na wysokość 3000 m n.p.m., co zwykle
                            gwarantuje lepsze niż niższych partiach regionu warunki śniegowe.
                        </PageParagraph>

                        <HeadlineH3>HOTEL CEVEDALE *** SUPERIOR</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Doskonały, rodzinnie prowadzony hotel, położony w
                            centralnej części miejscowości Cogolo di Pejo, blisko lokalnych sklepików, kawiarenek,
                            restauracji. Do dyspozycji gości bar, sala restauracyjna, centrum wellness (basen, sauna
                            fińska i turecka, pokój relaksu, fitness oraz nowe jacuzzi zewnętrzne). Na gości czekają
                            gustownie urządzone pokoje 1,2,3,4 os. z łazienkami (suszarka do włosów, TV-Sat, telefon,
                            sejf). Hotel słynie z bardzo dobrej kuchni, raz w tygodniu serwowana jest kolacja z daniami
                            regionalnymi. Wygodne dla narciarzy - przystanek skibusa bezpośrednio przy obiekcie oraz
                            narciarnia z grzałkami do butów. Hotel posiada parking zewnętrzny oraz garaż (dodatkowo
                            płatny).
                        </PageParagraph>

                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokojach 2, 3, 4 osobowych z
                                łazienkami</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie (napoje do obiadokolacji dodatkowo
                                płatne)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd autokarem klasy Lux na trasie
                                Poznań-Pejo-Poznań</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery z hotelu do stacji narciarskich (autokar lub
                                skibus)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>program po nartach 50+</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z wellness, fitness, basenu w hotelu w godzinach ich
                                otwarcia</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet WI-FI na terenie całego hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z wyciągu Biancaneve w Cogolo (200
                                m)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wycieczkę z degustacją do fabryki serów w
                                Mezzana</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 1em 0" }>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę
                            dorosłą.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie osób dorosłych w
                                grupie - 600 zł/os. (6 dni x 2 godziny dziennie); należy zgłosić przy podpisywaniu
                                umowy, szkolenie uruchamiamy przy zgłoszeniu min. 5 os. w tej samej
                                grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu- zalecane </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych
                                ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej – 2 Euro/os/dzień od 14 roku życia, płatna w
                                hotelu w recepcji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłat za napoje do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1os – 450
                                zł/pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju Family Junior Suite (2+2) - 950
                                zł/pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłata do pokoju Junior Suite - 650
                                zł/pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłaty na 6-dniowy skipass Combi 3+3 : <b>DOROŚLI I SENIORZY 235
                                EURO</b></PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery na miejscu (dla klientów z dojazdem własnym) - 150
                                zł/os</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 1em 0" }>Ubezpieczenie karnetu narciarskiego 2,50 Euro/dzień; 15
                            Euro/6 dni.</PageParagraph>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem>
                                <PageParagraph>uczestnictwo w wyjeździe nie wymaga pozyskania dla obywatela Polski
                                    wizy. Każdy uczestnik musi zabrać ze sobą ważny dowód osobisty (obywatel UE) lub
                                    paszport
                                </PageParagraph>
                            </ListItem>
                            <ListItem>
                                <PageParagraph>
                                    zalecana jest karta EKUZ (Europejska Karta Ubezpieczenia Zdrowotnego; informacje i
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