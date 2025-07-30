// app/styles/global.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
