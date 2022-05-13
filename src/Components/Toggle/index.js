import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSelector} from './styles';

export default function Toggle() {
  const [checked, setchecked] = useState(false);

  const handleToggleCheck = () => {
    setchecked(!checked)
  }

  return(
    <Container>
      <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => handleToggleCheck()}
        />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}
