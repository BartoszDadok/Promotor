import React from "react";
import Image from "next/image";
import styled from "styled-components";

const GalleryWrapper = styled.div`
  display: block;
  @media (max-width: 1000px) {
    display: none;

  }
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0 0 0.3em 0;
`;

const FirstRow = styled.div`
  width: 100%;
  display: grid;
  height: 400px;
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
  position: relative;
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
  height: 100%;
  margin: 0;
  padding: 0;
`;


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