import styled, { css, keyframes } from "styled-components";

const animate = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  grid-area: AS;
  width: 100%;

  display: flex;

  background: ${props => props.theme.color.secondary};
  border-right: 1px solid ${props => props.theme.color.gray};

  padding-left: 20px;

  position: relative;

  @media(max-width: 650px){
    position: fixed;
    z-index: 2;
  }
`;

export const Content = styled.div`
  @media(max-width: 650px){
      padding-left: 12px;
      position: fixed;
      left: 0px;

      z-index: 3;

      min-width: 165px;

      background: ${props => props.theme.color.secondary};
      border-right: 1px solid ${props => props.theme.color.gray};

      height: ${props => props.menuIsOpen ? '100vh' : '70px'};
      overflow: hidden;
      
      ${props => props.menuIsOpen
        ? css`
            animation: ${animate} .5s;
            box-shadow: 0 0 1em black;
          `
        : css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.color.gray};
          `
      }
    }
`;

export const Mask = styled.div`
  @media(max-width: 650px){
    ${props => props.menuIsOpen 
      ? css`
          position: fixed;
          right: 0px;
          width: calc(100% - 165px);
          height: 100vh;
      
          animation: ${animate} .5s;
          
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
        ` 
      : css`
          display: none;
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
