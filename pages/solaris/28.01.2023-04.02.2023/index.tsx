import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../../components/organisms/Navigation/Navigation";
import Modal from "../../../components/organisms/Modal/Modal";
import Footer from "../../../components/organisms/Footer/Footer";
import ReservationForm from "../../../components/organisms/ReservationForm/ReservationForm";
import Gallery from "../../../components/organisms/Gallery/Gallery";
import { PageParagraph } from "../../../components/atoms/PageParagraph/PageParagraph";

import solar1 from "../../../public/assets/hotels/solaris/1.jpg";
import solar2 from "../../../public/assets/hotels/solaris/2.jpg";
import solar3 from "../../../public/assets/hotels/solaris/3.jpg";
import solar4 from "../../../public/assets/hotels/solaris/4.jpg";
import solar5 from "../../../public/assets/hotels/solaris/5.jpg";
import solar6 from "../../../public/assets/hotels/solaris/6.jpg";
import solar7 from "../../../public/assets/hotels/solaris/7.jpg";
import solar8 from "../../../public/assets/hotels/solaris/8.jpg";
import solar9 from "../../../public/assets/hotels/solaris/9.jpg";
import solar10 from "../../../public/assets/hotels/solaris/10.jpg";
import solar11 from "../../../public/assets/hotels/solaris/11.jpg";
import solar12 from "../../../public/assets/hotels/solaris/12.jpg";
import solar13 from "../../../public/assets/hotels/solaris/13.jpg";
import solar14 from "../../../public/assets/hotels/solaris/14.jpg";
import solar15 from "../../../public/assets/hotels/solaris/15.jpg";
import solar16 from "../../../public/assets/hotels/solaris/16.jpg";
import solar17 from "../../../public/assets/hotels/solaris/17.jpg";
import solar18 from "../../../public/assets/hotels/solaris/18.jpg";
import solar19 from "../../../public/assets/hotels/solaris/19.jpg";
import solar20 from "../../../public/assets/hotels/solaris/20.jpg";
import solar21 from "../../../public/assets/hotels/solaris/21.jpg";


const images = [
    { url: solar1.src, title: "Hotel Solaris z zewnątrz" },
    { url: solar2.src, title: "Hotel Solaris  z zewnątrz" },
    { url: solar3.src, title: "Hotel Solaris wewnątrz" },
    { url: solar4.src, title: "Hotel Solaris wewnątrz" },
    { url: solar5.src, title: "Hotel Solaris wewnątrz" },
    { url: solar6.src, title: "Hotel Solaris wewnątrz" },
    { url: solar7.src, title: "Hotel Solaris wewnątrz" },
    { url: solar8.src, title: "Hotel Solaris wewnątrz" },
    { url: solar9.src, title: "Hotel Solaris wewnątrz" },
    { url: solar10.src, title: "Hotel Solaris z zewnątrz" },
    { url: solar11.src, title: "Hotel Solaris z zewnątrz" },
    { url: solar12.src, title: "Hotel Solaris wewnątrz" },
    { url: solar13.src, title: "Hotel Solaris wewnątrz" },
    { url: solar14.src, title: "Hotel Solaris wewnątrz" },
    { url: solar15.src, title: "Hotel Solaris wewnątrz" },
    { url: solar16.src, title: "Hotel Solaris wewnątrz" },
    { url: solar17.src, title: "Hotel Solaris wewnątrz" },
    { url: solar18.src, title: "Hotel Solaris wewnątrz" },
    { url: solar19.src, title: "Hotel Solaris z zewnątrz" },
    { url: solar20.src, title: "Hotel Solaris wewnątrz" },
    { url: solar21.src, title: "Hotel Solaris wewnątrz" },
];

const PageWrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  grid-template-columns: 1fr 3fr;
  display: grid;
  grid-gap: 0 1em;
  justify-content: center;
  justify-items: center;
  padding-top: 100px;
  @media (max-width: 1550px) {
    width: 95%;
  }
`;

const LeftSideWrapper = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0173d6;
  padding: 1em 1.5em;
  border-radius: 2px;
  height: fit-content;
`;


const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.3em 0;
`;

const TitleWhite = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 0.3em 0;
  text-align: center;
`;

const HeadlineH3 = styled.h3`
  font-size: 1.2rem;
  margin: 0.6em 0 0.2em 0;
  font-weight: 700;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: disc;
  color: white;
  padding-left: 1.3em;
  margin-bottom: 1em;
`;

interface PropsList {
    margin?: string;
}

const ListDescribe = styled.ul<PropsList>`
  list-style: disc;
  padding-left: 1.3em;
  margin: ${ ({ margin = "0" }) => margin };
`;

const ListItem = styled.li`
  margin: 0.3em 0;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 1px;
  width: 100%;
  margin-bottom: 1em;
`;

const PricingWrapper = styled.div`
  border: 1px white solid;
  padding: 0.3em 0.5em;
  margin-top: 1em;
`;

const Link = styled.a`
  color: #0173d6;
`;

const RightSideWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 1em;
  grid-auto-rows: min-content;
`;


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
                            <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Cesana
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
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 3348
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-7
                                            lat - 2568
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-9
                                            lat - 2648 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 10-17
                                            lat - 2869 zł
                                        </PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PricingWrapper>
                                <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem
                                    autokrem:</b></PageParagraph>
                                <List>
                                    <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 3698
                                        zł</PageParagraph></ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-7
                                            lat - 2918
                                        </PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 8-9
                                            lat - 2998 zł</PageParagraph>
                                    </ListItem>
                                    <ListItem>
                                        <PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 10-17
                                            lat - 3218 zł
                                        </PageParagraph>
                                    </ListItem>
                                </List>
                            </PricingWrapper>
                            <PageParagraph margin={ "2em 0 0.2em 0" } color={ "white" }>
                                <b>Ważne informacje:</b>
                            </PageParagraph>

                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>HOTEL
                                    3*</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>FREE
                                    SKI</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>SKI
                                    EXPERT</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>Szkolenie
                                    narciarskie</PageParagraph></ListItem>
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
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dodatkowe miejsce w
                                    autokarze - 200 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju
                                    1os - 650 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie
                                    narciarskie - 600 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska
                                    JUNIOR SKI (7-14 lat) - 880 PLN</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfery na stok
                                    (dla opcji dojazd własny/dolot własny) - 120 PLN</PageParagraph></ListItem>
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
                        <Title>Hotel Solaris - Vialattea (Sestriere)</Title>
                        <Gallery images={ images } setModalData={ setModalData }/>
                        <Title>Opis</Title>
                        <HeadlineH3>REGION NARCIARSKI VIA LATTEA - SESTRIERE</HeadlineH3>
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

                        <HeadlineH3>CLUB HOTEL SOLARIS***</HeadlineH3>
                        <PageParagraph margin={ "0 0 1em 0" }>Dobrej klasy hotel, świetnie położony w miejscowości
                            Cesana, 100 m od gondoli wywożoącej narciarzy do Sansicario i dalej do Sestriere oraz
                            wyciągu krzesełkowego na Monte Luna i francuskiego Mongenevre. Na miejscu ładny, przestronny
                            hol z barem, restauracja, duża sala dyskotekowa, narciarnia, parking. Przestronne, wygodne
                            pokoje 2, 3, 4 os. z łazienką, TV, sejfem, balkonem.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Hotel położony jest na wysokości ok. 1354 m n.p.m., ok. 400 m od centrum CESANA TORINESE,
                            przy drodze lokalnej, najbliższe sklepy ok. 600 m od hotelu.
                        </PageParagraph>
                        <PageParagraph margin={ "0 0 1em 0" }>
                            Wyżywienie: śniadania w formie bufetu i 3 daniowe obiadokolacje
                        </PageParagraph>


                        <HeadlineH3> CENA PAKIETU ZAWIERA:</HeadlineH3>
                        <ListDescribe margin={ "0 0 0.6em 0" }>
                            <ListItem><PageParagraph>6-dniowy skipass Monti della Luna *</PageParagraph></ListItem>
                            <ListItem><PageParagraph>7 noclegów w pokojach 2,3,4 os.</PageParagraph></ListItem>
                            <ListItem><PageParagraph>przejazd autokarem klasy lux (klimatyzacja, barek, wi-fi,
                                wc)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>wyżywienie 2 x dziennie (śniadania-bufet, 3 daniowe obiadokolacje,
                                bufet
                                sałatkowy), napoje do obiadokolacji dodatkowo płatne</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opiekę rezydenta/instruktorów</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dla chętnych objazd stacji narciarskich z pilotem lub instruktorem
                                (6 dni po 2 godz. dziennie)</PageParagraph></ListItem>
                            <ListItem><PageParagraph>realizacja programu Ski Safari po trasach
                                olimpijskich</PageParagraph></ListItem>
                            <ListItem><PageParagraph>apres ski – integracja narciarzy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>bezpłatny internet WI-FI w miejscach
                                ogólnodostępnych</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenie podstawowe KL 20 000 Euro i NNW 5 000
                                Euro</PageParagraph></ListItem>
                            <ListItem><PageParagraph>opłatę Gwarancyjną Funduszu Turystycznego i
                                Pomocowego</PageParagraph></ListItem>
                        </ListDescribe>
                        <PageParagraph margin={ "0 0 0.6em 0" }>* Dopłata do 6 dniowego skipassu Via Lattea - 65
                            Euro</PageParagraph>

                        <HeadlineH3>CENA NIE ZAWIERA:</HeadlineH3>

                        <ListDescribe margin={ "0 0 1em 0" }>
                            <ListItem><PageParagraph>opłaty za fakultatywne szkolenie narciarskie w grupie -
                                600 zł/os. (6 dni x 2 godziny dziennie); należy zgłosić przy podpisywaniu umowy,
                                szkolenie
                                uruchamiamy przy zgłoszeniu min. 5 os. w tej samej grupie</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dodatkowego ubezpieczenia ryzyka amatorskiego uprawiania
                                narciarstwa lub snowboardu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka rezygnacji z imprezy - 3% łącznej ceny;
                                możliwość zawarcia tego ubezpieczenia tylko w chwili podpisywania umowy</PageParagraph></ListItem>
                            <ListItem><PageParagraph>ubezpieczenia ryzyka chorób przewlekłych i nowotworowych ani innych
                                ubezpieczeń</PageParagraph></ListItem>
                            <ListItem><PageParagraph>napojów do obiadokolacji</PageParagraph></ListItem>
                            <ListItem><PageParagraph>dopłata do pokoju 1 os. - 650 zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph>taksy klimatycznej – 1,5 Euro/os/dzień płatna na
                                miejscu</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfery na miejscu dla klientów z dojazdem własnym 120
                                zł/os</PageParagraph></ListItem>
                            <ListItem><PageParagraph>transfer lotnisko-hotel-lotnisko 420
                                zł/os</PageParagraph></ListItem>
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