import styled from "styled-components";

export const NavigationMobileWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 4.3em;
  display: flex;
  padding: 0.3em;

  z-index: 1000;
  @media (min-width: 1000px) {
    display: none;

  }
  @media (max-width: 1000px) {
    background-color: #0173d6;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  :first-child {
    margin-top: -6px;
  }
`;