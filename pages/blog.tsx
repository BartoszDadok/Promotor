import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding-top: 100px;
`;

const Blog = () => {
    return (
        <>
            <Navigation/>
            <ContentWrapper>
                <PageParagraph>Blog w trakcie produkcji...</PageParagraph>
            </ContentWrapper>
        </>
    );
};

export default Blog;