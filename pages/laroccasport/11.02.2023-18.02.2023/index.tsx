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
import { images } from "../../../utils/laRoccaImages";

const Index = () => {
    const date = ["11.02.2023-18.02.2023", "10.02.2023-19.02.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Hotel La Rocca Sport & Benessere ***plus | SKI SAFARI</TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                11.02.2023 - 18.02.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                10.02.2023 - 19.02.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Włochy
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Chatillon
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                                zakwaterowania: </b>Hotel
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Wyżywienie: </b>Tylko śniadania
                            </PageParagraph>

                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2325
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-2
                                            lat - 80 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 2-6
                                            lat - 1625 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 6-13
                                            lat - 2025 zł
                                        </PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2625
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-2
                                            lat - 550 zł
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 2-6
                                            lat - 1925 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 6-13
                                            lat - 2325 zł
                                        </PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>APARTAMENTY 3* z
                                    basenem i wellness</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI SAFARI –
                                    odwiedzanie różnych stacji narciarskich</PageParagraph></ListItem>
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
                                    nartach (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfery na stok
                                    (dla opcji dojazd własny/dolot własny) - 175 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie
                                    rozszerzone KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie
                                    sportów zimowych - 95 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                    rezygnacji z imprezy 3%</PageParagraph></ListItem>
                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Hotel La Rocca Sport & Benessere ***plus | SKI SAFARI</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>DOLINA AOSTY</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Leży w północno-zachodniej części Włoch, na pograniczu z Francją i Szwajcarią. To tu
                            znajdziemy najwyższe szczyty Europy: Mont Blanc 4 807 m n.p.m., Matternhorn 4 478 m n.p.m.,
                            Monte Rosa 4 633 m n.p.m. oraz szerokie i malownicze trasy o różnej skali trudności.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Najważniejsze ośrodki narciarskie doliny to: Courmayeur, La Thuile, Pila oraz Cervinia. Z
                            ośrodka narciarskiego Cervinia, dzięki kolei linowej Plateau Rosa, istnieje możliwość
                            przedostania się do położonego w Szwajcarii Ośrodka narciarskiego Zermatt. Po tamtej stronie
                            atrakcją jest wjazd otwartą w 2018r. koleją 3-S (najwyższą koleją górską na świecie) na
                            Klein Matterhorn 3 883 m n.p.m. Obecnie trwają prace nad połączeniem nową koleją górską
                            nazwaną Alpine Crossing włoskiego Plateau Rosa Testa Griga 3480 m n.p.m. (górna stacja kolei
                            Plateau Rosa) z Klein Matterhorn 3 883 m n.p.m. Dzięki temu będzie możliwość bezpośredniego
                            wjazdu z Włoch na Mały Matterhorn. Zakończenie prac planowane jest na wiosnę 2021r.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Miejscowość Pila znana jest z tego, że swoje umiejętności doskonali tu włoska kadra
                            narciarska. Polecana ze względu na piękne widoki i doskonale przygotowane trasy zjazdowe.
                            Courmayer to jedna z najbardziej popularnych stacji narciarskich świata. Idealna dla
                            narciarzy o każdym poziomie zaawansowania.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            La Thuile to rozległa stacja narciarska, rewelacyjnie przygotowana i zagospodarowana.
                            Rozciąga się pomiędzy włoskimi La Thuile a francuskimi La Rosiere. Można tu spędzić prawie
                            cały tydzień bez powtarzania trasy.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Cervinia to najwyżej położone trasy narciarskie w Europie. Wyciągi doprowadzone są do 3500 m
                            n.p.m., a kolejka na Mały Matternhorn wjeżdża na 3 820 m n.p.m. Górna stacja kolejki
                            znajduje się na prawie pionowej ścianie. Tunel wewnątrz góry prowadzi do miejsca, skąd
                            zaczyna się wspaniała nartostrada.
                        </PageParagraph>

                        <HeadlineH3>HOTEL LA ROCCA SPORT & BENESSERE 3*plus</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Doskonały, sprawdzony hotel położony w miejscowości
                            Chatillon, w spokojnym i dogodnym miejscu do realizacji programu SKI SAFARI w Dolinie Aosty.
                            Duże, wygodne pokoje z łazienkami (suszarka, wanna lub prysznic), TV-sat, telefon, sejf,
                            bezpłatny Internet. Hotel umila pobyt oferując bogate wellness - basen, jacuzzi, sauna
                            fińska i turecka, pokój relaksu, fitness (basen i wellness nieczynne w soboty i wtorki). Na
                            miejscu restauracja, pomieszczenie do spotkań integracyjnych z nagłośnieniem, narciarnia,
                            garaż, parking zewnętrzny. W pobliżu hotelu centrum miasta, restauracje, bary i sklepy.
                        </PageParagraph>

                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w pokojach 2,3,4-os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie śniadania w formie bufetu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd autokarem LUX (barek, TV, klimatyzacja, WC) na trasie
                                Poznań – Chatillon – Poznań</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery z hotelu do stacji narciarskich (autokar lub
                                skibus)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota, realizacja programu SKI SAFARI w Dolinie Aosty
                                (Cervinia, Pila, Courmayer, La Thuile; program może ulec
                                zmianie)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dla chętnych objazd tras narciarskich z pilotem/instruktorem
                            </PageParagraph></ListItem>
                            <ListItem><PageParagraph>wieczór przy muzyce, integracja</PageParagraph></ListItem>
                            <ListItem><PageParagraph>spacer po zabytkowej starówce w miejscowości Aosta</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z basenu, wellness i fitness w hotelu (w godzinach ich
                                otwarcia)
                            </PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet WI-FI na terenie całego hotelu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph>Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę dorosłą.</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph fontWeight={ "700" }>6 DNIOWEGO SKIPASSU DOLINA
                                AOSTY:</PageParagraph></ListItem>
                            <ListDescribe>
                                <ListDescribe>
                                    <ListItem>
                                        <PageParagraph>
                                            Dorosły - 311 Euro
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph>
                                            Senior od 65 lat - 274 Euro
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph>
                                            Junior 14-18 lat - 274 Euro
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph>
                                            Dzieci 8-14 lat - 218 Euro
                                        </PageParagraph>
                                    </ListItem>
                                </ListDescribe>

                            </ListDescribe>
                        </ListDescribe>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie - 600 zł/os.
                                (6 dni x 2 godziny dziennie); należy zgłosić przy podpisywaniu umowy, szkolenie
                                uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu
                            </PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny wyjazdu
                                (możliwość zawarcia tego ubezpieczenia tylko w momencie podpisywania
                                umowy)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka chorób przewlekłych i
                                nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty do pokoju 1os – 725
                                zł/osoba/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej - 6 Euro/os/tydzień; płatnej na miejscu w
                                recepcji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferów na stoki do opcji dojazd własny - 175
                                zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transferu lotnisko-hotel-lotnisko - 375 zł/os. przy min. 12
                                osobach</PageParagraph></ListItem>

                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>

                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem>
                                <PageParagraph>dla jadących autokarem, zbiórka w dniu wyjazdu o godz. 17.45, Poznań,
                                    parking przed Starym Zoo, ul. Zwierzyniecka; wyjazd godz. 18.00</PageParagraph>
                            </ListItem>
                            <ListItem>
                                <PageParagraph>planowany powrót ostatniego dnia imprezy w to samo miejsce, ok. godz.
                                    7.00 rano</PageParagraph>
                            </ListItem>
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