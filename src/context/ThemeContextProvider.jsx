import React, { createContext, useState } from 'react'
import axios from 'axios'

export const ThemeContext = createContext();

const themeColorCode = {
    dark: {
        backgroundColor: '#212121',
        color: '#ffffff'
    },
    light: {
        backgroundColor: '#e0e0e0',
        color: '#000000'
    }
}

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = React.useState("dark");
  
    const toggleMode = () => {
      setMode(mode === "dark" ? "light" : "dark");
    };
  
    const value = { mode, toggleMode, themeColorCode };
    return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
  };
  
  export { ThemeContextProvider };


