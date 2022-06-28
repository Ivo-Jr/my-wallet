import React from 'react';

import { Container, Tag } from './styles';

export default function HistoryFinaceCard({ 
  cardColor,
  tagFrequency,
  title,
  subtitle,
  amount  
}) {
  return (
    <Container color={cardColor}>
      <Tag frequency={tagFrequency}/>
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
  );
}
