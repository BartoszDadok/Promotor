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

import adonis1 from "../../../public/assets/hotels/adonis/1.jpg";
import adonis2 from "../../../public/assets/hotels/adonis/2.jpg";
import adonis3 from "../../../public/assets/hotels/adonis/3.jpg";
import adonis4 from "../../../public/assets/hotels/adonis/4.jpg";
import adonis5 from "../../../public/assets/hotels/adonis/5.jpg";
import adonis6 from "../../../public/assets/hotels/adonis/6.jpg";
import adonis7 from "../../../public/assets/hotels/adonis/7.jpg";
import adonis8 from "../../../public/assets/hotels/adonis/8.jpg";
import adonis9 from "../../../public/assets/hotels/adonis/9.jpg";
import adonis10 from "../../../public/assets/hotels/adonis/10.jpg";
import adonis11 from "../../../public/assets/hotels/adonis/11.jpg";
import adonis12 from "../../../public/assets/hotels/adonis/12.jpg";
import adonis13 from "../../../public/assets/hotels/adonis/13.jpg";
import adonis14 from "../../../public/assets/hotels/adonis/14.jpg";
import adonis15 from "../../../public/assets/hotels/adonis/15.jpg";
import adonis16 from "../../../public/assets/hotels/adonis/16.jpg";
import adonis17 from "../../../public/assets/hotels/adonis/17.jpg";
import adonis18 from "../../../public/assets/hotels/adonis/18.jpg";
import adonis19 from "../../../public/assets/hotels/adonis/19.jpg";
import adonis20 from "../../../public/assets/hotels/adonis/20.jpg";
import adonis21 from "../../../public/assets/hotels/adonis/21.jpg";
import adonis22 from "../../../public/assets/hotels/adonis/22.jpg";
import adonis23 from "../../../public/assets/hotels/adonis/23.jpg";
import adonis24 from "../../../public/assets/hotels/adonis/24.jpg";
import adonis25 from "../../../public/assets/hotels/adonis/25.jpg";
import adonis26 from "../../../public/assets/hotels/adonis/26.jpg";
import adonis27 from "../../../public/assets/hotels/adonis/27.jpg";
import adonis28 from "../../../public/assets/hotels/adonis/28.jpg";
import adonis29 from "../../../public/assets/hotels/adonis/29.jpg";
import adonis30 from "../../../public/assets/hotels/adonis/30.jpg";
import adonis31 from "../../../public/assets/hotels/adonis/31.jpg";
import adonis32 from "../../../public/assets/hotels/adonis/32.jpg";
import adonis33 from "../../../public/assets/hotels/adonis/33.jpg";
import adonis34 from "../../../public/assets/hotels/adonis/34.jpg";
import adonis35 from "../../../public/assets/hotels/adonis/35.jpg";
import adonis36 from "../../../public/assets/hotels/adonis/36.jpg";
import adonis37 from "../../../public/assets/hotels/adonis/37.jpg";
import adonis38 from "../../../public/assets/hotels/adonis/38.jpg";
import adonis39 from "../../../public/assets/hotels/adonis/39.jpg";
import adonis40 from "../../../public/assets/hotels/adonis/40.jpg";
import adonis41 from "../../../public/assets/hotels/adonis/41.jpg";
import adonis42 from "../../../public/assets/hotels/adonis/42.jpg";
import adonis43 from "../../../public/assets/hotels/adonis/43.jpg";
import adonis44 from "../../../public/assets/hotels/adonis/44.jpg";
import { TitleMobile } from "../../../components/atoms/HotelTitleMobile/TitleMobile";
import MobileGallery from "../../../components/organisms/MobileGallery/MobileGallery";

const images = [
    { url: adonis1.src, title: "Apartament l'Adonis z zewnątrz" },
    { url: adonis2.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis3.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis4.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis5.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis6.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis7.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis8.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis9.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis10.src, title: "Apartament l'Adonis z zewnątrz" },
    { url: adonis11.src, title: "Apartament l'Adonis z zewnątrz" },
    { url: adonis12.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis13.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis14.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis15.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis16.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis17.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis18.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis19.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis20.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis21.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis22.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis23.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis24.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis25.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis26.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis27.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis28.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis29.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis30.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis31.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis32.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis33.src, title: "Apartament l'Adonis z zewnątrz" },
    { url: adonis34.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis35.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis36.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis37.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis38.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis39.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis40.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis41.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis42.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis43.src, title: "Apartament l'Adonis wewnątrz" },
    { url: adonis44.src, title: "Apartament l'Adonis wewnątrz" },
];

const Index = () => {
    const date = ["25.03.2023 - 01.04.2023", "24.03.2023 - 02.04.2023"];
    const [modalData, setModalData] = useState<{ isActive: boolean, id: number | null }>({
        isActive: false,
        id: null,
    });
    return (
        <>
            <PageWrapper>
                <Navigation/>
                <ContentWrapper>
                    <TitleMobile>Apartament l&apos;Adonis **** -Trzy Doliny</TitleMobile>
                    <MobileGallery images={ images }/>
                    <LeftSideWrapper>
                        <ReservationForm date={ date }/>
                        <TitleWhite>Szczegóły</TitleWhite>
                        <Line/>
                        <DetailsWrapper>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                własnym: </b>
                                25.03.2023 - 01.04.2023
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu z dojazdem
                                autokarem: </b>
                                24.03.2023 - 02.04.2023</PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" }
                                           color={ "white" }><b>Kraj: </b>Francja
                            </PageParagraph>
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }>
                                <b>Miejscowość: </b>Les Menuires
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
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Dorosły:
                                            2300 zł</PageParagraph>
                                    </ListItem>

                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>

                                    <List>
                                        <ListItem>
                                            <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Dorosły:
                                                2650zł</PageParagraph>
                                        </ListItem>


                                </List>
                            </PricingWrapper>


                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Skipass w
                                    cenie</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>REZYDENCJA 4* na
                                    stoku</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Basen,
                                    wellness</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0.2em 0 0 0" } color={ "white" }>
                                        Rozszerzenie 6 dniowego skipassu do Trzech Dolin (ok. 600 km) - 85 Euro/os
                                    </PageParagraph>
                                </ListItem>
                            </List>

                            <PageParagraph margin={ "0.5em 0 0.2em 0" } color={ "white" }>
                                <b>Opcje dodatkowe:</b>
                            </PageParagraph>
                            <List>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }> 1 niewykorzystane miejsce
                                        w apartamencie - 670 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na nartach
                                        (informacja dla organizatora)</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dodatkowe miejsce w
                                        autokarze - 250 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przewóz autokarem 1 x
                                        bagaż do 20kg - 125 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przewóz autokarem 1 x
                                        narty lub deska w pokrowcu oraz 1 x buty w torbie - 125 PLN</PageParagraph>
                                </ListItem>
                                <ListItem>
                                    <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                        rezygnacji z imprezy 3%</PageParagraph>
                                </ListItem>

                            </List>
                        </DetailsWrapper>
                    </LeftSideWrapper>

                    <RightSideWrapper>
                        <Title>Apartament l&apos;Adonis **** -Trzy Doliny</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>Stacja narciarska Les Menuires</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Stacja kultywuje wizerunek ośrodka umożliwiającego dostęp do tras bez odpinania nart.
                            Oferuje ok. 180 km tras narciarskich. Les Menuires położona jest w dolinie Belleville (1850
                            m n.p.m.) i wchodzi w skład Regionu Trzech Dolin (LES MENUIRES, VAL THORENS, MERIBEL,
                            COURCHEVEL), liczących łącznie 600 km tras i 200 wyciągów. Stacja posiada bezpośrednie
                            połączenie z Val Thorens i ST. Martin. Dużym atutem ośrodka jest bardzo dogodny dostęp do
                            stoków narciarskich oraz wspaniałe nasłonecznienie.
                        </PageParagraph>

                        <HeadlineH3>Rezydencja LES CHALETS DE L&apos;ADONIS ****</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Położona jest przy stoku w miejscowości Les Menuires, w
                            odległości ok.100m od wyciągu i szkółki narciarskiej oraz ok. 300m od sklepów. Obiekt
                            dysponuje luksusowymi apartamentami, w każdym otwarta kuchnia wyposażona w zmywarkę,
                            mikrofalówkę z grillem, płytę grzejną i lodówkę. Wszystkie apartamenty wyposażone są w
                            telewizory z płaskim ekranem, telewizję satelitarną, odtwarzacz DVD i telefon. Wiele
                            apartamentów posiada balkony lub tarasy. W obiekcie znajduje się centrum wellness (basen,
                            sauna fińska, sauna parowa).
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }><b>Apartament 4 os.</b> – 1 sypialnia z podwójnym łóżkiem,
                            salon z aneksem kuchennym i sofą.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }><b>Apartament 6 os bilo/trilo ok. 48 m²</b>- salon z
                            aneksem
                            kuchennym i sofą, 2 sypialnie z podwójnym łóżkiem lub dwoma pojedynczymi. Łazienka z
                            prysznicem, wc, suszarką do włosów.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }><b>Apartament 8 os ok. 70 m²</b>– salon z aneksem
                            kuchennym i sofą, 3 sypialnie 2 os, 2 łazienki, wc, balkon lub taras.
                        </PageParagraph>


                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>7 noclegów w wybranym apartamencie (bez wyżywienia)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd na trasie Poznań – Les Menuires - Poznań autokarem klasy
                                Lux (klimatyzacja, barek, TV, WC)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>6 dniowy skipass Les Menuires (ok. 180 km
                                tras)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>pościel, ręczniki</PageParagraph></ListItem>
                            <ListItem><PageParagraph>telewizję</PageParagraph></ListItem>
                            <ListItem><PageParagraph>Internet Wi-Fi</PageParagraph></ListItem>
                            <ListItem><PageParagraph>korzystanie z wellness (basen, sauny) w godzinach ich
                                otwarcia</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę pilota-instruktora</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 EUR, NNW 5 000
                                EUR</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarnacyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>końcowego sprzątania 69-99 Euro/apartament, można także posprzątać
                                samodzielnie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>kaucji zwrotnej za apartament - 500 Euro/apartament</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej – ok. 2,53
                                Euro/os/dzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka chorób przewlekłych i
                                nowotworowych ani innych ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłaty za niewykorzystane miejsce w apartamencie – 670 zł/miejsce</PageParagraph></ListItem>
                        </ListDescribe>
                        <HeadlineH3>WAŻNE INFORMACJE</HeadlineH3>
                        <ListDescribe margin={ "0 0 2em 0" }>
                            <ListItem>
                                <PageParagraph>dla osób jadących autokarem: zbiórka w dniu wyjazdu o godz. 17.45,
                                    Poznań, ul. Zwierzyniecka (parking przy starym zoo), wyjazd godz. 18.00.
                                </PageParagraph>
                            </ListItem>

                            <ListItem>
                                <PageParagraph>powrót w to samo miejsce, ostatniego dnia imprezy, planowany na ok. godz.
                                    08.00 rano
                                </PageParagraph>
                            </ListItem>
                            <ListItem>
                                <PageParagraph>wymagany jest dowód osobisty lub paszport</PageParagraph>
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