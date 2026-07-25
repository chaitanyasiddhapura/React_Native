import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isEnabled, toggleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};
