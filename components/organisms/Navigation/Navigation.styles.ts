import styled from "styled-components";

export const NavigationDesktop = styled.nav<{ stripeSrc?: string }>`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  height: 5em;
  width: 100%;
  padding: 0 1em;

  @media (max-width: 1000px) {
    display: none;
  }

  
  &.isScrolled {
    background-image: url(${ ({ stripeSrc }) => stripeSrc });
    background-size: cover;
  }
`;