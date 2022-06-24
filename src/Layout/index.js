import React from 'react';

import { useTheme } from '../hooks/theme';
import { ThemeProvider } from 'styled-components'

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
