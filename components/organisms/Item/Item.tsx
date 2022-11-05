import React from "react";
import Image from "next/image";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faMugHot, faPersonSkiing, faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { ItemTypes } from "../Offer/OfferTypes";
import Link from "next/link";
import angelo from "../../../public/assets/hotels/angelo.jpg";
import cevedale from "../../../public/assets/hotels/cevedale.jpg";
import derbyclub from "../../../public/assets/hotels/derbyclub.jpg";
import frontdeneige from "../../../public/assets/hotels/frontdeneige.jpg";
import golf from "../../../public/assets/hotels/golf.jpg";
import gentianes from "../../../public/assets/hotels/gentianes.jpg";
import hausanderluck from "../../../public/assets/hotels/hausanderluck.jpg";
import lagranbecca from "../../../public/assets/hotels/lagranbecca.jpg";
import laroccasport from "../../../public/assets/hotels/laroccasport.jpg";
import leschaletsladonis from "../../../public/assets/hotels/leschaletsladonis.jpg";
import margarethenbad from "../../../public/assets/hotels/margarethenbad.jpg";
import misurina from "../../../public/assets/hotels/misurina.jpg";
import pampeago from "../../../public/assets/hotels/pampeago.jpg";
import prom from "../../../public/assets/hotels/prom.jpg";
import solaris from "../../../public/assets/hotels/solaris.jpg";
import topresidence from "../../../public/assets/hotels/topresidence.jpg";
import villaggiodolomitico from "../../../public/assets/hotels/villaggiodolomitico.jpg";

const images = {
    angelo,
    cevedale,
    derbyclub,
    frontdeneige,
    golf,
    gentianes,
    hausanderluck,
    lagranbecca,
    laroccasport,
    leschaletsladonis,
    margarethenbad,
    misurina,
    pampeago,
    prom,
    solaris,
    topresidence,
    villaggiodolomitico,
};
export const InfoWrapper = styled.div`
  width: 80%;
  padding: 0 0.8em;

`;
export const ParagraphWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
const SingleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  border: 1px #b8b8b8 solid;
  padding: 1em 1em 0.5em 1em;
  margin-bottom: 2em;
`;
const DataWrapper = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
`;
const Data = styled.div`
  display: flex;
  position: relative;
`;
const Price = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1.5em;

  span {
    font-weight: 700;
    padding-left: 3px;
  }
`;
const Button = styled.a`
  display: flex;
  background-color: #0173d6;
  justify-content: center;
  padding: 0.8em 1em;
  color: white;
  margin: 0.5em 0;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;


const Item = ({ itemData }: { itemData: ItemTypes }) => {
    const dateWithoutSpaces = itemData.date.replace(/ /g, "");
    const objectWithoutSpaces = itemData.object.replace(/ /g, "");
    const objectPhoto = itemData.object.replace(/ /g, "").toLowerCase().replace("'", '');;
    // @ts-ignore
    const pathToPhoto = images[objectPhoto];
    console.log(pathToPhoto);


    return (
        <SingleItem>
            <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                <a>
                    <Image loading={ "lazy" } style={ { borderRadius: "5px", cursor: "pointer" } }
                           objectFit={ "cover" } width={ 360 }
                           height={ 270 }
                           src={ pathToPhoto.src }
                           alt={ "hotel Angelo Włochy" }/>
                </a>
            </Link>
            <InfoWrapper>
                <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                    <ParagraphWrapper>
                        <PageParagraph fontSize={ "1.3rem" }
                                       fontWeight={ "700" }>{ itemData.accommodation } { itemData.object }</PageParagraph>
                        <PageParagraph fontSize={ "1rem" }
                                       fontWeight={ "700" }>{ itemData.country }</PageParagraph>
                    </ParagraphWrapper>
                </Link>
                <PageParagraph fontSize={ "1rem" } fontWeight={ "500" }>Termin: { itemData.date }</PageParagraph>
                <DataWrapper>
                    <Data>
                        <FontAwesomeIcon width={ "15px" } color={ "#8c8c8c" } icon={ faMugHot }/>
                        <PageParagraph
                            margin={ "0 0.3em" }>{ itemData.board === "Pełne" ? "Wyżywienie pełne" : itemData.board }</PageParagraph>
                    </Data>
                    <Data>
                        <FontAwesomeIcon width={ "15px" } color={ "#8c8c8c" } icon={ faPersonSkiing }/>
                        <PageParagraph margin={ "0 0.3em" }>
                            { itemData.category.length === 1 ? itemData.category
                                :
                                itemData.category.map((item, i) => {
                                    if (i === 0) {
                                        return (<span key={ item }>{ item }</span>);
                                    } else {
                                        return (<span key={ item }> | { item }</span>);
                                    }

                                })
                            }
                        </PageParagraph>
                    </Data>
                    <Data>
                        <FontAwesomeIcon width={ "15px" } color={ "#8c8c8c" } icon={ faBus }/>
                        <PageParagraph margin={ "0 0.3em" }>{ itemData.transport }</PageParagraph>
                    </Data>
                    { itemData.skipass === "Skipass" &&
                    <Data>
                        <FontAwesomeIcon width={ "15px" } color={ "#8c8c8c" } icon={ faTicketSimple }/>
                        <PageParagraph
                            margin={ "0 0.3em" }>Skipass w cenie (Free Ski)</PageParagraph>
                    </Data>
                    }
                </DataWrapper>
                <Price>Cena za osobę od <span>{ itemData.price }zł</span></Price>
                <ButtonWrapper>
                    <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                        <Button>Zobacz szczegóły</Button>
                    </Link>
                </ButtonWrapper>
            </InfoWrapper>


        </SingleItem>
    );
};

export default Item;