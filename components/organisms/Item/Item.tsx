import React from "react";
import Image from "next/image";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faMugHot, faPersonSkiing, faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { ItemTypes } from "../Offer/OfferTypes";
import Link from "next/link";
import busIcon from "../../../public/assets/bus-icon.svg";

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
  margin-bottom: 1em;
`;
const Data = styled.div`
  display: flex;
  position: relative;
`;
const Price = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 0.2em;

  span {
    font-weight: 700;
    padding-left: 3px;
  }
`;
const Button = styled.div`
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
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.2em;
  padding-top: 2px;
`;

const LinkWrapper = styled.a`
  display: flex;
  height: fit-content;
  position: relative;
`;

const ImageWrapper = styled.div<{ busSrc?: string }>`
  position: relative;

  ::after {
    content: url(${ ({ busSrc }) => busSrc });
    background-color: #f5e23f;
    border-radius: 3px;
    padding: 0 0.3em;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;


const Item = ({ itemData, src }: { itemData: ItemTypes, src: any }) => {
    const dateWithoutSpaces = itemData.date[0].replace(/ /g, "");
    const objectWithoutSpaces = itemData.object.replace(/ /g, "").toLowerCase();

    return (
        <SingleItem>
            <Link passHref href={ objectWithoutSpaces + "-" + dateWithoutSpaces }>
                <LinkWrapper>
                    <Image loading={ "lazy" } style={ { borderRadius: "5px", cursor: "pointer" } }
                           objectFit={ "cover" } width={ 360 }
                           height={ 270 }
                           src={ src }
                           alt={ "hotel Angelo Włochy" }/>
                    { itemData.transport === "Dojazd własny/autokar" &&
                    <ImageWrapper busSrc={ busIcon.src }/>
                    }
                </LinkWrapper>
            </Link>
            <InfoWrapper>
                <Link passHref href={ objectWithoutSpaces + "-" + dateWithoutSpaces }>
                    <a>
                        <ParagraphWrapper>
                            <PageParagraph fontSize={ "1.3rem" }
                                           fontWeight={ "700" }>{ itemData.accommodation } { itemData.object }</PageParagraph>
                            <PageParagraph fontSize={ "1rem" }
                                           fontWeight={ "700" }>{ itemData.country }</PageParagraph>
                        </ParagraphWrapper>
                    </a>
                </Link>
                <PageParagraph fontSize={ "1rem" } fontWeight={ "500" }>Termin z dojazem
                    własnym: <b>{ itemData.date[0] }</b></PageParagraph>
                <PageParagraph fontSize={ "1rem" } fontWeight={ "500" }>Termin z dojazdem
                    autokarem: <b>{ itemData.date[1] }</b></PageParagraph>
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
                        <FontAwesomeIcon style={ { paddingTop: "3px" } } width={ "15px" } color={ "#8c8c8c" }
                                         icon={ faCarSide }/>
                        { itemData.transport === "Dojazd własny/autokar" &&
                        <IconWrapper>
                            <Image alt={ "ikona busa" } src={ busIcon } width={ "16px" }
                                   height={ "16px" }/>
                        </IconWrapper>
                        }
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
                <Price>Cena z dojazdem własnym od <span>{ itemData.price }zł</span></Price>
                { itemData.transport === "Dojazd własny/autokar" &&
                <Price>Cena z dojazdem autokarem od <span>{ itemData.priceWithBus }zł</span></Price>
                }
                <ButtonWrapper>
                    <Link href={ objectWithoutSpaces + "-" + dateWithoutSpaces }>
                        <a>
                            <Button>Zobacz szczegóły</Button>
                        </a>
                    </Link>
                </ButtonWrapper>
            </InfoWrapper>


        </SingleItem>
    );
};

export default Item;