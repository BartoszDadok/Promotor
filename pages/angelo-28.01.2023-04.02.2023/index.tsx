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
                            własny</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Kraj: </b>Włochy</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Miejscowość: </b>Cogolo di
                            Pejo</PageParagraph>
                        <PageParagraph margin={ "0 0 0.6em 0" } color={ "white" }><b>Rodzaj
                            zakwaterowania: </b>Hotel</PageParagraph>
                        <PageParagraph margin={ "0 0 0.2em 0" } color={ "white" }><b>Cennik:</b></PageParagraph>
                        <List>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>dorośli - 2398.00
                                zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>0-7 - 80.00
                                zł</PageParagraph>
                            </ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>8-10 - 1798.00
                                zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>11-12 - 2098.00
                                zł</PageParagraph></ListItem>
                            <ListItem><PageParagraph margin={ "0 0 0.1em 0" } color={ "white" }>powyżej 13 - 2248.00
                                zł</PageParagraph></ListItem>
                        </List>
                        <Line/>
                        <PageParagraph margin={ "0 0 0.2em 0" } color={ "white" }><b>Opcje
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
                    <Title>Hotel Angelo - Val di Sole </Title>
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
                </Gallery>

            </Wrapper>
            <Modal modalIsActive={ modalIsActive }/>
        </PageWrapper>

    );
};

export default Index;