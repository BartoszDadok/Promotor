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
import { images } from "../../../utils/adonisImages";

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