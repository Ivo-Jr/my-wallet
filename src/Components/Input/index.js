import React from 'react';

import { InputComponent } from './styles';

const Input = ({ required, placeholder, type, onChange, autoFocus }) => {
  return (
    <InputComponent 
      required={required} 
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
}

export default Input;