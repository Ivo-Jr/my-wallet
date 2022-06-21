import React from 'react';
import { 
  Container, 
  Header, 
  LogoImg,
  Title,
  MenuContainer,
} from './styles.js';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { 
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp 
} from 'react-icons/md'

import logoImg from "../../assets/logo.svg"

export default function Aside() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira"/>
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <Link to='/'>
          <MdDashboard />
          Dashboard
        </Link>

        <Link to='/list/entry-balance' >
          <MdArrowUpward />
            Entrys
        </Link>
        

        <Link to='/list/exit-balance' >
          <MdArrowDownward />
          Exits
        </Link>

        <Link to='#' onClick={signOut}>
          <MdExitToApp />
          Logout
        </Link>
      </MenuContainer>
    </Container>
  )
} 
