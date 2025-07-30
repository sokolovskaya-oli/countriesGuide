"use client";
import styled from "styled-components";
import { useThemeContext } from "../providers/ThemeProviders";

const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  // Don't render button if theme not yet determined
  if (!theme) return null;

  return (
    <Button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</Button>
  );
}
