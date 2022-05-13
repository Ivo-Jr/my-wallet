import React from 'react';

import { Container, Tag } from './styles';

export default function HistoryFinaceCard({ 
  tagColor,
  title,
  subtitle,
  amount  
}) {
  return (
    <Container>
      <Tag color={tagColor}/>
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
  );
}
