import React from "react";
import styled from "styled-components";
import filterIcon from "../../../public/assets/filterIcon.svg";
import Image from "next/image";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import { faHandPointer} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MobileFilterPanelWrapper = styled.button`
  position: relative;
  width: 100%;
  padding: 0.7em;
  display: none;
  border: 1px dashed #f5e23f;
  cursor: pointer;
  background-color: #0173d6;
  @media (max-width: 60em) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;
const FontWrapper = styled.div`
  margin: 3px 10px 0 10px;
`;
const MobileFilterPanel = () => {
    return (
        <MobileFilterPanelWrapper>
            <Container>
                <FontWrapper>
                    <Image src={ filterIcon } alt={ "" } width={ "30px" } height={ "30px" }/>
                </FontWrapper>
                <PageParagraph color={ "white" }>Filtruj</PageParagraph>

            </Container>
        </MobileFilterPanelWrapper>
    );
};

export default MobileFilterPanel;