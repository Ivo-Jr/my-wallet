import React from 'react';

import { Container } from './styles';

export default function SelectInput({ options }) {
  return(
    <Container>
      <select>
        { 
          options.map((option, ind) => (
            <option value={option.value} key={ind}>
              {option.label}
            </option>
          ))
        }
      </select>
    </Container>
  );
}
