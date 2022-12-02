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

import marg1 from "../../../public/assets/hotels/margarethenbad/1.jpg";
import marg2 from "../../../public/assets/hotels/margarethenbad/2.jpg";
import marg3 from "../../../public/assets/hotels/margarethenbad/3.jpg";
import marg4 from "../../../public/assets/hotels/margarethenbad/4.jpg";
import marg5 from "../../../public/assets/hotels/margarethenbad/5.jpg";
import marg6 from "../../../public/assets/hotels/margarethenbad/6.jpg";
import marg7 from "../../../public/assets/hotels/margarethenbad/7.jpg";
import marg8 from "../../../public/assets/hotels/margarethenbad/8.jpg";
import marg9 from "../../../public/assets/hotels/margarethenbad/9.jpg";
import marg10 from "../../../public/assets/hotels/margarethenbad/10.jpg";
import marg11 from "../../../public/assets/hotels/margarethenbad/11.jpg";
import marg12 from "../../../public/assets/hotels/margarethenbad/12.jpg";
import marg13 from "../../../public/assets/hotels/margarethenbad/13.jpg";
import marg14 from "../../../public/assets/hotels/margarethenbad/14.jpg";
import marg15 from "../../../public/assets/hotels/margarethenbad/15.jpg";
import marg16 from "../../../public/assets/hotels/margarethenbad/16.jpg";
import marg17 from "../../../public/assets/hotels/margarethenbad/17.jpg";
import marg18 from "../../../public/assets/hotels/margarethenbad/18.jpg";
import marg19 from "../../../public/assets/hotels/margarethenbad/19.jpg";
import marg20 from "../../../public/assets/hotels/margarethenbad/20.jpg";
import marg21 from "../../../public/assets/hotels/margarethenbad/21.jpg";
import marg22 from "../../../public/assets/hotels/margarethenbad/22.jpg";
import marg23 from "../../../public/assets/hotels/margarethenbad/23.jpg";
import marg24 from "../../../public/assets/hotels/margarethenbad/24.jpg";
import marg25 from "../../../public/assets/hotels/margarethenbad/25.jpg";
import marg26 from "../../../public/assets/hotels/margarethenbad/26.jpg";
import marg27 from "../../../public/assets/hotels/margarethenbad/27.jpg";
import marg28 from "../../../public/assets/hotels/margarethenbad/28.jpg";
import marg29 from "../../../public/assets/hotels/margarethenbad/29.jpg";
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";

const images = [
    { url: marg1.src, title: "Hotel Margarethenbad z zewnątrz" },
    { url: marg2.src, title: "Hotel Margarethenbad stok narciarski" },
    { url: marg3.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg4.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg5.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg6.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg7.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg8.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg9.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg10.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg11.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg12.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg13.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg14.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg15.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg16.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg17.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg18.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg19.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg20.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg21.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg22.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg23.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg24.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg25.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg26.src, title: "Hotel Margarethenbad wewnątrz" },
    { url: marg27.src, title: "Hotel Margarethenbad wewnątrzz" },
    { url: marg28.src, title: "Hotel Margarethenbad z zewnątrz" },
    { url: marg29.src, title: "Hotel Margarethenbad z zewnątrz" },
];

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
                    <TitleMobile>Hotel Margarethenbad **** - Karyntia & Tyrol Wschodni</TitleMobile>
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
                                           color={ "white" }><b>Kraj: </b>Austria
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Lainach
                                k/Lienz
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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2350
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3
                                            lat - 1155 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 4-7
                                            lat - 1825 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-11
                                            lat- 1800 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 12-17
                                            lat- 2170 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2730
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-3
                                            lat - 1535 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 4-7
                                            lat - 2215 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-11
                                            lat- 2180 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 12-17
                                            lat- 2550 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL **** z
                                    wellness</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI SAFARI –
                                    odwiedzanie różnych stacji narciarskich </PageParagraph></ListItem>

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
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    1os - 675 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfery na stok
                                    (dla opcji dojazd własny/dolot własny) - 150 PLN</PageParagraph></ListItem>
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
                        <Title>Hotel Margarethenbad **** - Karyntia & Tyrol Wschodni </Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>Ski Safari wokół Grossglockner</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Kraj związkowy Austrii najbardziej wysunięty na południe w masywie Wysokich Taurów. Karnet
                            SKI HIT oferuje kilka atrakcyjnych stacji narciarskich. Położenie regionu w pobliżu
                            Dolomitów Wschodnich sprawia, że przez większość dni w sezonie zimowym jest słoneczna
                            pogoda.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            W niedalekiej odległości od hotelu położony jest lodowiec Molltaler, który oferuje 71 km
                            tras, Matrei/Kals (110 km), Sillian (45 km), St. Jacob i inne, w sumie ponad 360 km tras
                            zjazdowych.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Region ten polecamy zarówno narciarzom dobrze i średnio zaawansowanym oraz koneserom sportów
                            zimowych. Znajdziemy tu również stoki i szkółki dla narciarzy początkujących.
                        </PageParagraph>

                        <HeadlineH3>OPIS HOTELU MARGARETHENBAD****</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Świetny obiekt położony w pobliżu doskonałych stacji
                            narciarskich MolltalerGletscher, Zetterfeld, Matrei/Kals, Silian i innych. Do dyspozycji
                            gości komfortowe pokoje 2, 3 i 4 os. z łazienką, suszarką, TV Sat, tel., minibarem,
                            większość z balkonami. Wyżywienie: śniadania w formie bufetu, 4-daniowe obiadokolacje +
                            bufet sałatkowy. Na miejscu: restauracja, bar, studio wellness (sauna finska, sauna parowa,
                            infrared, jaccuzzi 15.00-17.00), masaże, zabiegi kosmetyczne odpłatne - na zamówienie. Hotel
                            posiada narciarnię, windę, duży parking, częściowo zadaszony. 200m od Hotelu znajduje się
                            ośrodek sportowy posiadający wyciąg narciarski, lodowisko i tor saneczkowy. Polecamy ten
                            hotel.
                        </PageParagraph>


                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokoju 2,3 lub 4-osobowym (pokój 1os. za
                                dopłatą)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie, napoje do obiadokolacji dodatkowo
                                płatne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>program SKI SAFARI wokół Grossglockner</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wieczorny zjazd saneczkowy, integracje</PageParagraph></ListItem>
                            <ListItem><PageParagraph>bezpłatne wejście do wellness</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5000
                                EURu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.6em 0" }>
                            Ostateczny program SKI SAFARI ustalany jest przez organizatora po przyjeździe grupy na
                            miejsce pobytu i zależy od bieżących możliwości jego realizacji, w tym m.in. od warunków
                            pogodowych.</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" }>
                            Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę dorosłą.
                        </PageParagraph>
                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListDescribe>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        skipassu SKI HIT (6 dni) - płatny gotówką w
                                        Euro u pilota w autokarze (WYSOKI SEZON):
                                    </PageParagraph>
                                    <PageParagraph fontWeight={ "700" }>
                                        <u>25.12.2022-07.01.2023</u> | <u>29.01-11.03.2023</u>
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorosły - 289 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior - 144,50 Euro
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph fontWeight={ "700" }>
                                        skipassu SKI HIT (6 dni) - płatny gotówką w
                                        Euro u pilota w autokarze (NISKI SEZON):
                                    </PageParagraph>
                                    <PageParagraph fontWeight={ "700" }>
                                        <u>08.01-28.01.2023</u> | <u>12.03-07.05.2023</u>
                                    </PageParagraph>
                                    <ListDescribe>
                                        <ListItem>
                                            <PageParagraph>
                                                Dorosły - 279 Euro
                                            </PageParagraph>
                                        </ListItem>
                                        <ListItem>
                                            <PageParagraph>
                                                Junior - 139,50 Euro
                                            </PageParagraph>
                                        </ListItem>
                                    </ListDescribe>
                                </ListItem>
                            </ListDescribe>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.5em 0" }>Dzieci urodzone 2017-2023 skipass gratis (1:1), juniorzy ur. 2004-2016r. </PageParagraph>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie dla dorosłych w grupie - 600 zł/os. (6 dni x 2 godziny dziennie); należy zgłosić przy podpisywaniu umowy, szkolenie uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia SKI/OC, choroby przewlekłe, ryzyko rezygnacji i inne - na zapytanie, informacja w Biurze</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Uwaga! ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny; możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1 os – 675 zł/os/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery na stok dla klientów z dojazdem własnym - 150 zł./os.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 2,7 Euro/dzień od 18 roku życia (płatna w recepcji)</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>uczestnictwo w wyjeździe nie wymaga pozyskania dla obywatela Polski
                                wizy. Każdy uczestnik musi zabrać ze sobą ważny dowód osobisty (obywatel UE) lub
                                paszport</PageParagraph></ListItem>
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