"use client";

import styled from "styled-components";
import { useThemeToggle } from "../providers/ThemeProviders";

const Button = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeToggle();
  return <Button onClick={toggleTheme}>{isDark ? "🌞" : "🌙"}</Button>;
}
