import React from "react";
import Image from "next/image";
import { GalleryWrapper, Button, BigImage, SingleImage, SingleImage1, SingleImage2, FirstRow, SecondRow } from "./Gallery.styles";

const Gallery = ({
                     setModalData,
                     images,
                 }: { images: any, setModalData: React.Dispatch<React.SetStateAction<{ isActive: boolean, id: number | null }>> }) => {

    const handleModal = (e: any) => {
        window.scrollTo(0, 0);
        const id = +e.currentTarget.dataset.id;
        setModalData({ isActive: true, id });
    };

    return (
        <GalleryWrapper>
            <FirstRow>
                <SingleImage1>
                    <Button data-id="1" onClick={ (e) => handleModal(e) }>
                        <Image alt={ images[1].title } layout={ "fill" } src={ images[1].url }
                               objectFit={ "cover" }/>
                    </Button>
                </SingleImage1>
                <SingleImage2>
                    <Button data-id="2" onClick={ (e) => handleModal(e) }>
                        <Image alt={ images[2].title } layout={ "fill" } src={ images[2].url }
                               objectFit={ "cover" }/>
                    </Button>
                </SingleImage2>
                <BigImage>
                    <Button data-id="0" onClick={ (e) => handleModal(e) }>
                        <Image alt={ images[0].title } src={ images[0].url }
                               layout={ "fill" } objectFit={ "cover" }/>
                    </Button>
                </BigImage>
            </FirstRow>
            <SecondRow>
                {
                    images.map((image: { title: string, url: string }, i: number) => {
                        if (i > 2 && i < 7) {
                            return (
                                <SingleImage key={ i }>
                                    <Button data-id={ i } onClick={ (e) => handleModal(e) }>
                                        <Image alt={ image.title }
                                               src={ image.url } layout={ "fill" }
                                               objectFit={ "cover" }/>
                                    </Button>
                                </SingleImage>
                            );
                        }
                        if (i === 7) {
                            return (
                                <SingleImage key={ i }>
                                    <Button data-id={ i } onClick={ (e) => handleModal(e) }>
                                        <Image style={ { filter: "brightness(35%)" } } alt={ image.title }
                                               src={ image.url } layout={ "fill" }
                                               objectFit={ "cover" }/>
                                        <p>+ { images.length - 8 } zdjęć</p>
                                    </Button>
                                </SingleImage>
                            );
                        }
                    })
                }
            </SecondRow>
        </GalleryWrapper>
    );
};

export default Gallery;