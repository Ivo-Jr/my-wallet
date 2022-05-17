import React from 'react';
import { 
  Container, 
  Header, 
  LogoImg,
  Title,
  MenuContainer,
  MenuLink
} from './styles.js';

import { 
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp 
} from 'react-icons/md'

import logoImg from "../../assets/logo.svg"

export default function Aside() {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira"/>
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuLink>

        {/* <MenuLink href="#">
          Novo Registro
        </MenuLink> */}
        
        <MenuLink href="/list/entry-balance">
          <MdArrowUpward />
          Entrys
        </MenuLink>
        
        <MenuLink href="/list/exit-balance">
          <MdArrowDownward />
          Exits
        </MenuLink>
        
        <MenuLink href="#">
          <MdExitToApp />
          Logout
        </MenuLink>
      </MenuContainer>
    </Container>
  )
} 
