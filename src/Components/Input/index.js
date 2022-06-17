import React from 'react';

import { InputComponent } from './styles';

const Input = ({ required, placeholder, type, onChange }) => {
  return (
    <InputComponent 
      required={required} 
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
}

export default Input;