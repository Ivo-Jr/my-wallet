import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

import { Grid } from './styles.js';

export default function Layout() {
  const { logged } = useAuth();

  if(!logged){
    return <Navigate to="/login" />
  }

  return (
    <Grid>
      <MainHeader/>
      <Aside/>
      <Content>
        <Outlet/>
      </Content>
    </Grid>
  )
} 
