import React from 'react';
import { Container } from './styles.js';

export default function Content({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
} 
