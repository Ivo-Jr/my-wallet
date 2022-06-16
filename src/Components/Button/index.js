import React from 'react';

import { ButtonComponent } from './styles';

function Button({type, children}) {
  return (
    <ButtonComponent type={type}>
      {children}
    </ButtonComponent>
  );
}

export default Button;