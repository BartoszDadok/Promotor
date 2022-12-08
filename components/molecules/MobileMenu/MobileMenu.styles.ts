import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.isActive {
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    display: flex;
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.25em;
  list-style: none;
`;

export const List = styled.ul`
  width: 100%;
`;


export const StyledLink = styled.a`
  color: black;
  border: none;
  padding: 0.8em;
  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
`;