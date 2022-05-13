import React from 'react';
import { Container, TitleContainer, Controller } from './styles.js';

export default function ContentHeader({ title, lineColor, children }) {

  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controller>
        {children}
      </Controller>
    </Container>
  )
} 
