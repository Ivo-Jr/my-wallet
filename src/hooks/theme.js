import React, { createContext, useState, useContext } from 'react';

import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem('@my-wallet:theme');

    if (storageTheme) {
      return JSON.parse(storageTheme)
    } else {
      return light
    }
  });

  const toggleTheme = () => {
    if(theme.title === 'dark'){
      setTheme(light);
      localStorage.setItem('@my-wallet:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@my-wallet:theme', JSON.stringify(dark));
    }
  }

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        toggleTheme
      }}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const { theme, toggleTheme } = context
  return {theme, toggleTheme };
}