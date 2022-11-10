import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import ContactInfo from "../components/molecules/ContactInfo/ContactInfo";
import Footer from "../components/organisms/Footer/Footer";
import styled from "styled-components";
const CatalogWrapper = styled.div`
  width: 70%;
  margin: 0 auto 4em auto;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  padding-top: 100px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;
const CatalogContainer = styled.div`
  width: 100%;
  padding: 0 2em;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;
const UnderlinedLink = styled.a`
  text-decoration: underline;
  color: #0173d6;
`;
const Catalog = () => {
    return (
        <div>
            <Navigation/>
            <CatalogWrapper>
                <CatalogContainer>
                    <Title>Katalog ofert na sezon 2022 / 2023</Title>
                    <div>
                        <PageParagraph margin={"0 0 0.5em 0"} fontWeight={"700"} fontSize={"1.2rem"}>Plik do pobrania:</PageParagraph>
                        <PageParagraph>
                            <UnderlinedLink href="/assets/catalog/Katalog_Promotor_2022-2023.pdf">Zima 2022/2023 (25,8 MB) →</UnderlinedLink>
                        </PageParagraph>
                    </div>
                </CatalogContainer>
                <ContactInfo/>
            </CatalogWrapper>
            <Footer/>
        </div>
    );
};

export default Catalog;