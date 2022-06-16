import React, { useState } from 'react';
import { useTheme } from '../../hooks/theme';

import { Container, ToggleLabel, ToggleSelector} from './styles';

export default function Toggle() {
  const [checked, setchecked] = useState(false);
  const { toggleTheme } = useTheme();

  const handleToggleCheck = () => {
    setchecked(!checked);
    toggleTheme();
  }

  return(
    <Container>
      <ToggleLabel>Dark</ToggleLabel>
        <ToggleSelector 
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={() => handleToggleCheck()}
        />
      <ToggleLabel>Light</ToggleLabel>
    </Container>
  );
}
