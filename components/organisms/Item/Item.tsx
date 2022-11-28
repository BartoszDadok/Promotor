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
  @media (max-width: 49em) {
    width: 100%;
    display: flex;
    margin: 1em 0 ;
    flex-direction: column;

  }

`;
export const ParagraphWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

const HotelTitleWrapper = styled.a`
  margin: 1em 0;
  width: 100%
`;
const SingleItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  border: 1px #b8b8b8 solid;
  padding: 1em 1em 0.5em 1em;
  margin-bottom: 2em;
  @media (max-width: 49em) {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
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

  @media (max-width: 49em) {
    justify-content: left;
    align-items: center;
    margin-bottom: 0.3em;

    span {
      text-align: center;
    }
  }
`;
const Price = styled.p`
  display: inline-block;
  justify-content: right;
  margin-bottom: 0.2em;
  line-height: 1.2;

  span {
    font-weight: 700;
    padding-left: 3px;
  }

  @media (max-width: 49em) {
    justify-content: left;
    margin-bottom: 0.3em;
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
  @media (max-width: 49em) {
    justify-content: left;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.2em;
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
const AdditionalInformation = styled.div`
  padding: 0.2em 0.2em;
  background-color: #0173d6;
  border: 1px solid #0173d6;
  position: absolute;
  top: -15px;
  right: -1px;
`;

const DesktopTitle = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 0.2em;
  @media (max-width: 49em) {
    display: none;
  }
`;
const MobileTitle = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 49em) {
    display: block;
    margin-bottom: 1em;
  }
`;


const Item = ({ itemData, src }: { itemData: ItemTypes, src: any }) => {
    const dateWithoutSpaces = itemData.date[0].replace(/ /g, "");
    const objectWithoutSpaces = itemData.object.replace(/ /g, "").toLowerCase();

    return (
        <SingleItem>
            { itemData.additionalInformation && <AdditionalInformation>
                <PageParagraph color={ "white" }
                               margin={ "0 0.3em" }>{ itemData.additionalInformation }</PageParagraph>
            </AdditionalInformation>
            }
            <MobileTitle>
                <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                    <HotelTitleWrapper>
                        <ParagraphWrapper>
                            <PageParagraph fontSize={ "1.3rem" }
                                           fontWeight={ "700" }>{ itemData.accommodation } { itemData.object }</PageParagraph>
                            <PageParagraph fontSize={ "1rem" }
                                           fontWeight={ "700" }>{ itemData.country }</PageParagraph>
                        </ParagraphWrapper>
                    </HotelTitleWrapper>
                </Link>
            </MobileTitle>
            <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                <LinkWrapper>
                    <Image loading={ "lazy" } style={ { borderRadius: "5px", cursor: "pointer" } }
                           objectFit={ "cover" } width={ 360 }
                           height={ 270 }
                           src={ src }
                           alt={ "hotel Angelo Włochy" }/>
                    { itemData.transport.includes("Autokar") &&
                    <ImageWrapper busSrc={ busIcon.src }/>
                    }
                </LinkWrapper>
            </Link>

            <InfoWrapper>
                <DesktopTitle>
                    <Link passHref href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
                        <HotelTitleWrapper>
                            <ParagraphWrapper>
                                <PageParagraph fontSize={ "1.3rem" }
                                               fontWeight={ "700" }>{ itemData.accommodation } { itemData.object }</PageParagraph>
                                <PageParagraph fontSize={ "1rem" }
                                               fontWeight={ "700" }>{ itemData.country }</PageParagraph>
                            </ParagraphWrapper>
                        </HotelTitleWrapper>
                    </Link>
                </DesktopTitle>
                <PageParagraph fontSize={ "1rem" } fontWeight={ "500" } margin={ "0 0 0.2em 0" }>Termin z dojazem
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
                        { itemData.transport.includes("Autokar") &&
                        <IconWrapper>
                            <Image alt={ "ikona busa" } src={ busIcon } width={ "16px" }
                                   height={ "16px" }/>
                        </IconWrapper>
                        }
                        { itemData.transport.length === 1 ?
                            <span style={ { margin: "0 0.1em" } }>{ itemData.transport }</span>
                            :
                            itemData.transport.map((item, i) => {
                                if (i === 0) {
                                    return (<span style={ { margin: "0 0.1em" } } key={ item }>{ item }</span>);
                                } else {
                                    return (
                                        <span key={ item }>
                                            <span>|</span>
                                            <span style={ { margin: "0 0.1em" } }>{ item } </span>
                                        </span>
                                    );
                                }

                            })
                        }
                    </Data>
                    { itemData.skipass === "Skipass" &&
                    <Data>
                        <FontAwesomeIcon width={ "15px" } color={ "#8c8c8c" } icon={ faTicketSimple }/>
                        <PageParagraph
                            margin={ "0 0.3em" }>Skipass w cenie (Free Ski)</PageParagraph>
                    </Data>
                    }
                </DataWrapper>
                <Price>Cena z dojazdem własnym od<span>{ itemData.price }zł</span></Price>
                { itemData.transport.includes("Autokar") &&
                <Price>Cena z dojazdem autokarem od<span>{ itemData.priceWithBus }zł</span></Price>
                }
                <ButtonWrapper>
                    <Link href={ objectWithoutSpaces + "/" + dateWithoutSpaces }>
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