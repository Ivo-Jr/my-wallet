import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background: ${props => props.theme.color.secondary};
  padding-left: 20px;

  border-right: 1px solid ${props => props.theme.color.gray};
  /* color: ${props => props.theme.color.white}; */

  position: relative;

  @media(max-width: 650px){
    padding-left: 12px;
    position: fixed;
    z-index: 2;

    width: 170px;

    height: ${props => props.menuIsOpen ? '100vh' : '70px'};
    overflow: hidden;
    
    ${props => props.menuIsOpen
      ? css`
        box-shadow: 0 0 1em black;
        `
      : css`
        border: none;
        border-bottom: 1px solid ${props => props.theme.color.gray};
      `
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  
  @media(max-width: 600px){
    height: 25px;
    weight: 25px;
  }
  @media(max-width: 650px){
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.color.white};
  margin: 10px;

  @media(max-width: 650px){
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;

  flex-direction: column;
  margin-top: 50px;

  a {
    color: ${props => props.theme.color.info};
    text-decoration: none;

    margin: 7px 0px;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
      opacity: 0.7
    }

    > svg {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

export const ToggleMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;

  background: ${props => props.theme.color.warning};
  color: ${props => props.theme.color.white};

  transition: opacity .3s;

  &:hover {
    opacity: .7;
  }

  display: none;

  @media(max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center
  }

`;

export const ThemeToggleFooter = styled.div`
  display: none;
  position: absolute;
  bottom: 30px;

  @media(max-width: 650px){
    display: ${props => props.menuIsOpen ? 'block' : 'none'};
  }

`;
