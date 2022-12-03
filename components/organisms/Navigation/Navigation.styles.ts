import styled, { keyframes } from "styled-components";

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
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
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
  text-shadow: none;
  height: 100%;
  

  &.isScrolled {
    ::after {
      content: url(${ ({ arrowSrc }) => arrowSrc });
      position: absolute;
      top: -45px;
      right: -390px;
      width: 400px;
      animation-name: ${ animation };
      animation-duration: 1s;
      animation-iteration-count: initial;
      @media (max-width: 1530px) {
        display: none;
      }
    }
  }
`;


export const StyledLink = styled.a`
  background-color: transparent;
  padding: 0.5em;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
  color: white;


  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.2em;
  }
  
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    padding: 0.2em;
  }

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 95%;
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

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.5em;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
  color: white;


  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.2em;
  }
  
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    padding: 0.2em;
  }

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 95%;
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