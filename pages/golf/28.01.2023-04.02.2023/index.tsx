import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../../../components/organisms/Navigation/Navigation";
import Modal from "../../../components/organisms/Modal/Modal";
import Footer from "../../../components/organisms/Footer/Footer";
import ReservationForm from "../../../components/organisms/ReservationForm/ReservationForm";
import Gallery from "../../../components/organisms/Gallery/Gallery";
import { PageParagraph } from "../../../components/atoms/PageParagraph/PageParagraph";
import top1 from "../../../public/assets/hotels/topresidence/1.jpg";
import top2 from "../../../public/assets/hotels/topresidence/2.jpg";
import top3 from "../../../public/assets/hotels/topresidence/3.jpg";
import top4 from "../../../public/assets/hotels/topresidence/4.jpg";
import top5 from "../../../public/assets/hotels/topresidence/5.jpg";
import top6 from "../../../public/assets/hotels/topresidence/6.jpg";
import top7 from "../../../public/assets/hotels/topresidence/7.jpg";
import top8 from "../../../public/assets/hotels/topresidence/8.jpg";
import top9 from "../../../public/assets/hotels/topresidence/9.jpg";
import top10 from "../../../public/assets/hotels/topresidence/10.jpg";
import top11 from "../../../public/assets/hotels/topresidence/11.jpg";
import top12 from "../../../public/assets/hotels/topresidence/12.jpg";
import top13 from "../../../public/assets/hotels/topresidence/13.jpg";
import top14 from "../../../public/assets/hotels/topresidence/14.jpg";
import top15 from "../../../public/assets/hotels/topresidence/15.jpg";


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

const images = [
    { url: top1.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top2.src, title: "Hotel TopResidence wewnątrz" },
    { url: top3.src, title: "Hotel TopResidence wewnątrz" },
    { url: top4.src, title: "Hotel TopResidence wewnątrz" },
    { url: top5.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top6.src, title: "Hotel TopResidence wewnątrz" },
    { url: top7.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top8.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top9.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top10.src, title: "Hotel TopResidence wewnątrz" },
    { url: top11.src, title: "Hotel TopResidence wewnątrz" },
    { url: top12.src, title: "Hotel TopResidence wewnątrz" },
    { url: top13.src, title: "Hotel TopResidence wewnątrz" },
    { url: top14.src, title: "Hotel TopResidence z zewnątrz" },
    { url: top15.src, title: "Hotel TopResidence wewnątrz" },
];

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

                    </LeftSideWrapper>

                    <RightSideWrapper>

                    </RightSideWrapper>
                </ContentWrapper>
                <Modal images={ images } modalData={ modalData } setModalData={ setModalData }/>
            </PageWrapper>
            <Footer/>
        </>
    );
};

export default Index;