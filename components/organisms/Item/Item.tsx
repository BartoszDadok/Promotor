import React from "react";
import Image from "next/image";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faMugHot, faPersonSkiing, faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import { ItemTypes } from "../Offer/OfferTypes";
import Link from "next/link";
import busIcon from "../../../public/assets/bus-icon.svg";
import { SingleItem, AdditionalInformation, Button, DataWrapper, Data, ImageWrapper, IconWrapper, InfoWrapper, LinkWrapper, ButtonWrapper, HotelTitleWrapper, MobileTitle, ParagraphWrapper, Price, DesktopTitle } from "./Item.styles";

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