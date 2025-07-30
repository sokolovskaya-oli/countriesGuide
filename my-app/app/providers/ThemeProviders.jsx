"use client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  link: "#1e90ff",
};

const darkTheme = {
  background: "#1a1a1a",
  text: "#ffffff",
  link: "#90c1ff",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.link};
  }
`;

export const useThemeToggle = () => useContext(ThemeContext);

export default function ThemeProviders({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
