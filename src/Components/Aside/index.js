import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Toggle from '../Toggle/index.js';
import { useTheme } from '../../hooks/theme';

import { 
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';

import { 
  Container, 
  Header, 
  LogoImg,
  Title,
  MenuContainer,
  ToggleMenu,
  ThemeToggleFooter
} from './styles.js';
import logoImg from "../../assets/logo.svg"



export default function Aside() {
  const [ toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);
  const { signOut } = useAuth();
  // const { theme } = useTheme(); 

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  }

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          { toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

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

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle />
      </ThemeToggleFooter>
    </Container>
  )
} 
