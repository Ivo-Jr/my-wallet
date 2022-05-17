import React from 'react';

import { Container } from './styles';

export default function SelectInput({ options, onChange, defaultValue }) {
  return(
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
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
