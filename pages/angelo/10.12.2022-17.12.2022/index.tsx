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

import angelo1 from "../../../public/assets/hotels/angelo/1.jpg";
import angelo2 from "../../../public/assets/hotels/angelo/2.jpg";
import angelo3 from "../../../public/assets/hotels/angelo/3.jpg";
import angelo4 from "../../../public/assets/hotels/angelo/4.jpg";
import angelo5 from "../../../public/assets/hotels/angelo/5.jpg";
import angelo6 from "../../../public/assets/hotels/angelo/6.jpg";
import angelo7 from "../../../public/assets/hotels/angelo/7.jpg";
import angelo8 from "../../../public/assets/hotels/angelo/8.jpg";
import angelo9 from "../../../public/assets/hotels/angelo/9.jpg";
import angelo10 from "../../../public/assets/hotels/angelo/10.jpg";
import angelo11 from "../../../public/assets/hotels/angelo/11.jpg";
import angelo12 from "../../../public/assets/hotels/angelo/12.jpg";
import angelo13 from "../../../public/assets/hotels/angelo/13.jpg";
import angelo14 from "../../../public/assets/hotels/angelo/14.jpg";
import angelo15 from "../../../public/assets/hotels/angelo/15.jpg";
import angelo16 from "../../../public/assets/hotels/angelo/16.jpg";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";

const images = [
    { url: angelo1.src, title: "Hotel Angelo z zewnątrz" },
    { url: angelo2.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo3.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo4.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo5.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo6.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo7.src, title: "Hotel Angelo z zewnątrz" },
    { url: angelo8.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo9.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo10.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo11.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo12.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo13.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo14.src, title: "Hotel Angelo z zewnątrz" },
    { url: angelo15.src, title: "Hotel Angelo wewnątrz" },
    { url: angelo16.src, title: "Hotel Angelo wewnątrz" },
];


const Index = () => {
    const date = ["10.12.2022 - 17.12.2022", "09.12.2022 - 18.12.2022"];

    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Hotel Angelo - Val di Sole - Passo del Tonale </TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                10.12.2022 - 17.12.2022
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                09.12.2022 - 18.12.2022</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Passo del
                                Tonale
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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2670
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-4,99
                                        lat -
                                        80
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 5-7,99
                                        lat -
                                        1380
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-14,99
                                        lat
                                        - 1895
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 15-17,99
                                        lat
                                        - 2420
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 3095
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-4,99
                                        lat -
                                        505
                                        zł</PageParagraph>
                                    </ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 5-7,99
                                        lat -
                                        1805
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-14,99
                                        lat
                                        - 2320
                                        zł</PageParagraph></ListItem>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 15-17,99
                                        lat
                                        - 2845
                                        zł</PageParagraph></ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL 3* z wellness
                                    blisko wyciągu</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>FREE SKI – skipass
                                    Adamello Ski w cenie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>100m od
                                    wyciągu</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Objazd tras
                                    narciarskich z instruktorem</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
                            </List>
                            <PageParagraph color={ "white" } margin={ "0 0 0.2em 0" }>* Dopłata do 6 dniowego skipassu
                                SUPERSKIRAMA - 42 Euro/6dni</PageParagraph>
                            <PageParagraph color={ "white" } margin={ "0 0 1em 0" }>* Kaucja zwrotna za skipass 5 Euro,
                                ubezpieczenie skipassu 2,5 Euro/dzień</PageParagraph>
                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                    nartach (informacja dla organizatora)</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>deklaruję zakup
                                    skipassu za pośrednictwem organizatora (płatne w EUR u pilota)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dodatkowe miejsce w
                                    autokarze - 200 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    1os - 625 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfer
                                    lotnisko-hotel-lotnisko - 410 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfery na stok
                                    (dla opcji dojazd własny/dolot własny) - 85 PLN</PageParagraph></ListItem>
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
                        <Title>Hotel Angelo - Val di Sole - Passo del Tonale </Title>
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

                        <HeadlineH3>HOTEL ANGELO 3*</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Położony jest w centrum miejscowości Passo del Tonale, w
                            bliskiej odległości od wyciągów narciarskich, sklepików i kawiarenek. Hotel prowadzony
                            rodzinnie, urządzony w alpejskim stylu. Do dyspozycji gości restauracja, bar, centrum
                            wellness,
                            pokój zabaw dla dzieci, narciarnia. Kilkadziesiąt metrów od hotelu znajduje się także
                            dyskoteka.
                            W hotelu dostępne są pokoje 2,3 i 4 os. z łazienką, suszarką do włosów, TV, telefonem.
                            Wyżywienie: śniadania w formie bufetu, 3 daniowe obiadokolacje z daniami do wyboru, bufet
                            sałatkowy. Napoje do obiadokolacji dodatkowo płatne.
                        </PageParagraph>

                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokojach 2,3,4 os.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie (7 śniadań, 7 obiadokolacji); napoje do
                                obiadokolacji dodatkowo płatne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z hotelowego wellness</PageParagraph></ListItem>
                            <ListItem><PageParagraph>6 dniowy skipass Adamello Ski</PageParagraph></ListItem>
                            <ListItem><PageParagraph>program narciarski SKI SAFARI w rejonie Val di Sole</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet WI-FI</PageParagraph></ListItem>
                            <ListItem><PageParagraph>uroczyste zakończenie turnusu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.4em 0" }>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę
                            dorosłą.</PageParagraph>
                        <PageParagraph margin={ "0 0 0.5em 0" }>
                            Ostateczny program SKI SAFARI ustalany jest przez organizatora po przyjeździe grupy na
                            miejsce
                            pobytu i zależy od bieżących możliwości jego realizacji, w tym m.in. od warunków pogodowych.
                        </PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os.
                                (6 dni x 2 godziny dziennie ); należy zgłosić przy podpisywaniu umowy, szkolenie
                                uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych
                                ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1 os – 625 zł/os na
                                turnus</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 2 Euro/os/dzień od 14 roku życia; płatnej na
                                miejscu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferów na stoki do opcji dojazd własny - 85
                                zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferu lotnisko-hotel-lotnisko do opcji dojazd własny- 410 zł/os
                                (min. 12 osób)</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem><PageParagraph>dla osób jadących autokarem: w grudniu zbiórka o godz. 20.45,
                                Poznań, parking przy Starym Zoo, ul. Zwierzyniecka; wyjazd godz.
                                21.00</PageParagraph></ListItem>
                            <ListItem><PageParagraph>planowany powrót w to samo miejsce ostatniego dnia trwania imprezy
                                w godzinach wczesno porannych</PageParagraph></ListItem>
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