import React from 'react';

import { useTheme } from '../hooks/theme';
import { ThemeProvider } from 'styled-components'

import { Container } from './styles';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <Container>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Container>
  )
}
