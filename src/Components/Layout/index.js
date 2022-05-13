import React from 'react';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
// import List from '../../Pages/List';

import { Grid } from './styles.js';

export default function Layout({ children }) {
  return (
    <Grid>
      <MainHeader/>
      <Aside/>
      <Content>
        {children}
      </Content>
    </Grid>
  )
} 
