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
                    <TitleMobile>Apartament Top Residence - Val di Sole - Passo del Tonale</TitleMobile>
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
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za osobę dorosłą
                                            w apartamencie 4 lub 6 os. - 1845 zł</PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Cena za osobę dorosłą
                                            w apartamencie 4 lub 6 os. - 2270 zł</PageParagraph>
                                    </ListItem>

                                </List>
                            </PricingWrapper>

                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Skipass w
                                    cenie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>REZYDENCJA 3* z
                                    basenem blisko wyciągu</PageParagraph></ListItem>
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
                                        nartach (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie narciarskie -
                                        600 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfer
                                        lotnisko-hotel-lotnisko - 410 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                        rezygnacji z imprezy 3%</PageParagraph>
                                </ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Apartament Top Residence - Val di Sole - Passo del Tonale</Title>
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

                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w apartamencie 4/6 osobowym</PageParagraph></ListItem>
                            <ListItem><PageParagraph>zużycie gazu, elektryczności</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ręczniki, pościel</PageParagraph></ListItem>
                            <ListItem><PageParagraph>6 dniowy skipass Adamello Ski</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 Euro i NNW 5 000
                                Euro</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph>
                            * Dopłata do 6 dniowego skipassu SUPERSKIRAMA - 42 Euro/6dni
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 0.4em 0" }>
                            * Kaucja zwrotna za skipass 5 Euro, ubezpieczenie skipassu 2,5 Euro/dzień
                        </PageParagraph>

                        <PageParagraph>
                            Ostateczny program SKI SAFARI ustalany jest przez organizatora po przyjeździe grupy na miejsce pobytu i zależy od bieżących możliwości jego realizacji, w tym m.in. od warunków pogodowych.
                        </PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os. (6 dni x 2 godziny dziennie ); należy zgłosić przy podpisywaniu umowy, szkolenie uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania narciarstwa lub snowboardu </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny; możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>kaucja zwrotna za apartament 100 Euro/apartament</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłata za niwykorzystane miejsce w apartamencie 680 zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłata za końcowe sprzątanie 50 Euro/apart. Bilo, 60 Euro apartament Trilo</PageParagraph></ListItem>
                            <ListItem><PageParagraph>śniadnie - 7 Euro/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 1,5 Euro/os/dzień od 14 roku życia; płatnej na miejscu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transportu autokarem na trasie Poznań - Passo Tonale - Poznań autokarem klasy LUX - 425 zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferów na stoki do opcji dojazd własny - 85 zł/os</PageParagraph></ListItem>
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