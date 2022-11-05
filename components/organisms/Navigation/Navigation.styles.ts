import styled, { keyframes } from "styled-components";

export const NavigationDesktop = styled.nav<{ stripeSrc?: string }>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  height: 5em;
  width: 100%;
  padding: 0 1em;

  @media (max-width: 49em) {
    display: none;
  }

  
  &.isScrolled {
    background-image: url(${ ({ stripeSrc }) => stripeSrc });
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  @media (max-width: 1550px) {
    width: 100%;
    justify-content: flex-start;
  }
  @media (max-width: 1300px) {
    justify-content: flex-start;
  }
`;

export const LeftSide = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  margin-left: 1em;
`;
export const RightSide = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2px;
  position: relative;
`;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

export const ListItem = styled.li<{ arrowSrc?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0.25em;
  list-style: none;
  color: white;
  height: 100%;
  

  &.isScrolled {
    ::after {
      content: url(${ ({ arrowSrc }) => arrowSrc });
      position: absolute;
      top: -22px;
      right: -390px;
      width: 400px;
      animation-name: ${ animation };
      animation-duration: 1s;
      animation-iteration-count: initial;
      @media (max-width: 1400px) {
        width: 300px;
        top: -12px;
        right: -290px;
      }
      @media (max-width: 1230px) {
        display: none;
      }
    }
  }


`;

export const StyledLogo = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 270px;
  height: 100%;
  @media (max-width: 1100px) {
    width: 220px;
  }
`;

export const StyledLink = styled.a`
  background-color: transparent;
  border: none;
  padding: 0.5em;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
  @media (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.2em;
  }
  @media (max-width: 1300px) {
    font-size: 1rem;
  }

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 80%;
    left: 0;
    background-color: #fff;
    transition: width 0.5s;
  }

  :hover {
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;