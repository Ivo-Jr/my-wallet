import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background: ${props => props.theme.color.secondary};
  padding-left: 20px;

  border-right: 1px solid ${props => props.theme.color.gray};
  /* color: ${props => props.theme.color.white}; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.color.white};
  margin-left: 10px;
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