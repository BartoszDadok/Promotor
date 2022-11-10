import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../components/organisms/Navigation/Navigation";
import { PageParagraph } from "../../components/atoms/PageParagraph/PageParagraph";
import Image from "next/image";
import mainAngelo from "../../public/assets/hotels/angelo/1.jpg";
import angelo2 from "../../public/assets/hotels/angelo/2.jpg";
import angelo3 from "../../public/assets/hotels/angelo/3.jpg";
import angelo4 from "../../public/assets/hotels/angelo/4.jpg";
import angelo5 from "../../public/assets/hotels/angelo/5.jpg";
import angelo6 from "../../public/assets/hotels/angelo/6.jpg";
import angelo7 from "../../public/assets/hotels/angelo/7.jpg";
import angelo8 from "../../public/assets/hotels/angelo/8.jpg";
import Modal from "../../components/organisms/Modal/Modal";

const PageWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
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

const InfoPanel = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0173d6;
  padding: 1em 1.5em;
  border-radius: 2px;
  height: fit-content;
`;

const Gallery = styled.div`
  display: grid;
  width: 100%;
  padding: 1em;
  grid-auto-rows: min-content;
`;

const FirstRow = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
  "smallImage bigImage"
  "smallImage2 bigImage";
`;

const SecondRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 0 0.5em;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
`;

const SingleImage1 = styled.div`
  grid-area: smallImage;
  width: 100%;
  display: block;
  position: relative;

  :hover {
    filter: brightness(85%);
  }
`;

const SingleImage2 = styled.div`
  grid-area: smallImage2;
  width: 100%;
  display: block;
  position: relative;

  :hover {
    filter: brightness(85%);
  }
`;

const SingleImage = styled.div`
  width: 100%;
  display: block;
  height: 130px;
  position: relative;
  @media (max-width: 1400px) {
    height: 110px;
  }
  @media (max-width: 1300px) {
    height: 100px;
  }
  @media (max-width: 1100px) {
    height: 90px;
  }

  :hover {
    filter: brightness(85%);
  }

  p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
  }
`;

const BigImage = styled.div`
  display: grid;
  grid-area: bigImage;
  width: 100%;

  :hover {
    filter: brightness(85%);
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  width: 100%;
  margin: 0;
  padding: 0;
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

const Index = () => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const handleModal = (e: any) => {
        setModalIsActive(true);
    };
    return (
        <PageWrapper>
            <Navigation/>
            <Wrapper>
                <InfoPanel>
                    <TitleWhite>Szczegóły</TitleWhite>
                    <Line/>
                    <DetailsWrapper>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Termin wyjazdu: </b>
                            28.01.2023-04.02.2023</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj transportu: </b>Dojazd
                            własny lub autokarem</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Kraj: </b>Włochy</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Cogolo di
                            Pejo</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                            zakwaterowania: </b>Hotel</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" }
                                       color={ "white" }><b>Wyżywienie: </b>Pełne</PageParagraph>


                        <PricingWrapper>
                            <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazdem własnym:</b></PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2380
                                    zł</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-4,99 lat -
                                    80
                                    zł</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 5-14,99 lat -
                                    1495
                                    zł</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 15-17,99 lat
                                    - 2025
                                    zł</PageParagraph></ListItem>
                            </List>
                        </PricingWrapper>
                        <PricingWrapper>
                            <PageParagraph margin={ "0.5em 0 0 0" } color={ "white" }><b>Cennik z dojazem autokrem:</b></PageParagraph>
                            <List>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2380
                                    zł</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 0-4,99 lat -
                                    80
                                    zł</PageParagraph>
                                </ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 5-14,99 lat -
                                    1495
                                    zł</PageParagraph></ListItem>
                                <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dzieci 15-17,99 lat
                                    - 2025
                                    zł</PageParagraph></ListItem>
                            </List>
                        </PricingWrapper>

                        <PageParagraph margin={ "1em 0 0.2em 0" } color={ "white" }><b>Opcje
                            dodatkowe:</b></PageParagraph>
                        <List>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na desce
                                snowboardowej (informacja dla organizatora)</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>będzie jeździć na
                                nartach (informacja dla organizatora)</PageParagraph>
                            </ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju 1os -
                                450 PLNł</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju Family
                                Junior Suite (2+2) - 950 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dopłata do pokoju Junior
                                Suite 700 zł /pokój/tydzień</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>przedszkole narciarskie
                                BABY SKI (4-7 lat) - 1100 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkolenie narciarskie -
                                600 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>szkółka narciarska
                                JUNIOR SKI (7-14 lat) - 880 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>transfery na stok (dla
                                opcji dojazd własny/dolot własny) - 150 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie
                                rozszerzone KL 75 000 EUR, NNW 7 500 EUR, OC 40 000 EUR, amatorskie uprawianie sportów
                                zimowych - 95 PLN</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                rezygnacji z imprezy + chorób przewlekłych 6%</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>ubezpieczenie ryzyka
                                rezygnacji z imprezy 3%</PageParagraph></ListItem>
                        </List>

                    </DetailsWrapper>
                </InfoPanel>
                <Gallery>
                    <Title>Hotel Angelo - Val di Sole - Passo del Tonale </Title>
                    <FirstRow>
                        <SingleImage1>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo wewnątrz" } layout={ "fill" } src={ angelo2 }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage1>
                        <SingleImage2>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo wewnątrz" } layout={ "fill" } src={ angelo3 }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage2>
                        <BigImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo budynek z zewnatrz" } src={ mainAngelo }
                                       objectFit={ "cover" }/>
                            </Button>
                        </BigImage>
                    </FirstRow>

                    <SecondRow>
                        <SingleImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo wewnątrz" }
                                       src={ angelo4 } layout={ "fill" }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage>
                        <SingleImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo wewnątrz" }
                                       src={ angelo5 } layout={ "fill" }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage>
                        <SingleImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo wewnątrz" }
                                       src={ angelo6 } layout={ "fill" }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage>
                        <SingleImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image alt={ "hotel Angelo budynek z zewnatrz" }
                                       src={ angelo7 }
                                       layout={ "fill" }
                                       objectFit={ "cover" }/>
                            </Button>
                        </SingleImage>
                        <SingleImage>
                            <Button onClick={ (e) => handleModal(e) }>
                                <Image style={ { filter: "brightness(35%)" } } alt={ "hotel Angelo wewnątrz" }
                                       src={ angelo8 } layout={ "fill" }
                                       objectFit={ "cover" }/>
                                <p>+ 20 zdjęć</p>
                            </Button>
                        </SingleImage>
                    </SecondRow>
                    <Title>Opis</Title>
                    <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.3em 0" }>REGION NARCIARSKI VAL DI SOLE –
                        ADAMELLO SKI</PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>
                        Resort narciarski Adamello Ski obejmuje: Tonale, lodowiec Presena, Ponte di Legno i oferuje ok.
                        115 km tras narciarskich. W ostatnich kilku latach realizowano tutaj wiele inwestycji związanych
                        z infrastrukturą narciarską. Powstała gondola Ponte di Legno – Tonale, łącząca ten region w
                        jedną całość, zbudowano nową kolejkę na Presenę, kilka wyciągów w Ponte di Legno i Temu, co
                        bardziej uatrakcyjniło uprawianie sportów zimowych w tym miejscu. W regionie tym jest wiele
                        stoków dla dobrych i bardzo dobrych narciarzy i snowboardzistów, a także trasy dla
                        początkujących. Świetna infrastruktura, snowparki oraz parki zabaw dla dzieci przyciągają do
                        tego miejsca także młodych adeptów białego szaleństwa. Podczas pobytu realizujemy program
                        narciarski oparty o skipass Adamello Ski.</PageParagraph>


                    <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.3em 0" }>HOTEL ANGELO 3*</PageParagraph>

                    <PageParagraph margin={ "0 0 1em 0" }>Położony jest w centrum miejscowości Passo del Tonale, w
                        bliskiej odległości od wyciągów narciarskich, sklepików i kawiarenek. Hotel prowadzony
                        rodzinnie, urządzony w alpejskim stylu. Do dyspozycji gości restauracja, bar, centrum wellness,
                        pokój zabaw dla dzieci, narciarnia. Kilkadziesiąt metrów od hotelu znajduje się także dyskoteka.
                        W hotelu dostępne są pokoje 2,3 i 4 os. z łazienką, suszarką do włosów, TV, telefonem.
                        Wyżywienie: śniadania w formie bufetu, 3 daniowe obiadokolacje z daniami do wyboru, bufet
                        sałatkowy. Napoje do obiadokolacji dodatkowo płatne.</PageParagraph>


                    <PageParagraph fontWeight={ "700" } margin={ "1em 0 0.3em 0" }>SZKÓŁKA NARCIARSKA JUNIOR SKI ORAZ
                        PRZEDSZKOLE NARCIARSKIE BABY SKI</PageParagraph>

                    <PageParagraph margin={ "0 0 1em 0" }>Program dedykowany jest dzieciom w wieku 7-14 lat, a
                        przedszkola
                        dzieciom w wieku 4-7 lat, wyjeżdżającym na wczasy z rodzicami/opiekunami. W ramach programu
                        zapewniamy opiekę nad dziećmi w godz. 10.00-15.30, każdego dnia przeznaczonego na jazdę na
                        nartach. Dzieci pozostają pod opieką naszych instruktorów, mających doświadczenie w pracy z
                        dziećmi, którzy prowadzą szkolenie narciarskie w grupach 5–10 osobowych (podział na grupy zależy
                        od wieku i umiejętności narciarskich). Uczestnicy szkółki i przedszkola ubierani są na stok w
                        rozpoznawalne, odblaskowe kamizelki z logo biura.</PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>
                        Zajęcia - zwłaszcza dla dzieci młodszych - prowadzone są w formie zabawy. Najmłodsi narciarze
                        potrzebują częstszych przerw oraz zmian charakteru zajęć, dlatego oprócz nauki narciarstwa
                        planowanej na 2-4 godziny dziennie planujemy dla nich rozmaite zabawy na śniegu.
                    </PageParagraph>

                    <PageParagraph margin={ "0 0 1em 0" }>
                        Starsi większość czasu spędzają na nauce i doskonaleniu techniki jazdy na nartach. Dla
                        zaawansowanych wprowadzamy jazdę sportową.</PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>
                        Dzieci w każdym wieku oprócz narciarstwa chętnie biorą udział w organizowanych przez naszych
                        instruktorów saneczkarstwie, rozmaitych zabawach i zawodach na śniegu.
                    </PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>
                        W niektórych przypadkach – szczególnie w odniesieniu do najmłodszych narciarzy - potrzebna bywa
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

                    <PageParagraph fontWeight={ "800" } margin={ "0 0 0.3em 0" }>
                        RAMOWY PROGRAM DNIA:
                    </PageParagraph>
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
                        Szkółkę narciarską JUNIOR SKI oraz przedszkole narciarskie BABY SKI uruchamiamy przy minimum 5
                        uczestnikach.
                    </PageParagraph>


                    CENA PAKIETU ZAWIERA:

                    7 noclegów w pokojach 2,3,4 os.

                    wyżywienie 2 x dziennie (7 śniadań, 7 obiadokolacji)

                    napoje do obiadokolacji dodatkowo płatne

                    korzystanie z hotelowego wellness 10Euro/wejście

                    program narciarski SKI SAFARI w rejonie Adamello Ski

                    opiekę rezydenta/instruktora

                    Internet WI-FI

                    5% zniżki na skipass

                    ubezpieczenie podstawowe KL 20 000 EUR i NNW 5 000 EUR

                    opłatę Gwarancyjną Funduszu Turystycznego i Pomocowego

                    Dziecko w pokoju z 1 osobą dorosłą – cena jak za osobę dorosłą.


                    Ostateczny program SKI SAFARI ustalany jest przez organizatora po przyjeździe grupy na miejsce
                    pobytu i zależy od bieżących możliwości jego realizacji, w tym m.in. od warunków pogodowych.
                </Gallery>
            </Wrapper>
            <Modal modalIsActive={ modalIsActive }/>
        </PageWrapper>
    );
};

export default Index;