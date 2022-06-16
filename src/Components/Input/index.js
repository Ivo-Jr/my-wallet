import React from 'react';

import { InputComponent } from './styles';

const Input = ({ required, placeholder, type }) => {
  return (
    <InputComponent 
      required={required} 
      placeholder={placeholder}
      type={type} 
    />
  );
}

export default Input;