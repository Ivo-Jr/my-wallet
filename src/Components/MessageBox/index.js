import React from 'react';

import { Container } from './styles';

export default function MessageBox({
  title,
  description,
  footerText,
  icon
}) {
  return (
    <Container>
      <header>
        <h1>{title} 
          <img src={icon} alt="title"/>
        </h1>
        <p>{description}</p>
      </header>

      <footer>
        {footerText}
      </footer>
    </Container>
  );
}
