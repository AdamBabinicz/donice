import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    align-items: center;
    background-color: ${({ theme }) => {
      console.log(theme.body); // Sprawdź, czy temat jest prawidłowo przekazywany
      return theme.body;
    }};
    color: ${({ theme }) => theme.text};
    display: flex;
    ${
      "" /* flex-direction: column;
    justify-content: center;
    height: 100vh; */
    }
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
    transition: color 0.25s linear;
    text-decoration: none;
  }

  button {
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;
