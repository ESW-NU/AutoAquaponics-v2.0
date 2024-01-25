import React, { createContext, useState, useMemo } from 'react';
import { createModeTheme } from './styling';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const theme = useMemo(() => createModeTheme(darkMode ? 'dark' : 'light'), [darkMode]);
  console.log('Theme object:', theme);
  
  const toggleDarkMode = () => {
    console.log('Current dark mode state:', darkMode); // Before changing state
    setDarkMode(!darkMode);
    console.log('New dark mode state:', !darkMode); // After changing state
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};