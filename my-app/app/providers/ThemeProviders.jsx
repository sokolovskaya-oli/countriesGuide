"use client";

import { ThemeProvider } from "styled-components";
import { createContext, useState, useContext, useEffect } from "react";
import { GlobalStyle } from "../styles/global";

// ✅ Define light and dark themes
const lightTheme = {
  background: "#fff",
  text: "#000",
  card: "#f5f5f5",
};

const darkTheme = {
  background: "#111",
  text: "#fff",
  card: "#1e1e1e",
};

// ✅ Create Theme Context
const ThemeContext = createContext();

// ✅ Export hook to use in components
export const useThemeContext = () => useContext(ThemeContext);

// ✅ Main provider component
export default function ThemeProviders({ children }) {
  const [theme, setTheme] = useState(null);

  // Detect system preference or use localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  // ⛔ Avoid hydration mismatch
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
