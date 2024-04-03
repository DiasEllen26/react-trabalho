import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :root {
    --background-secondary: #199B91;
    --background-secondary-dark: #1c2833;
    --white: #ffffff;
    --quite-gray: #555555;
    --background-secondary-light: #34495e;
    --primary: #3498db;
    --black: #000000;
    --transition-main: 0.68, -0.55, 0.27, 1.55;
    --background: #F6432E;
    --red: #e52e4d;
    --blue: #0B5ED7;
    --green: #03bb85;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #363f5f;
  }

  body {
    margin: 0;
    width: 100%;
    color: hsl(var(--text-primary));
    background-color: hsl(var(--background));
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }


`;

export const ContentWrapper = styled.div`
	margin-left: 20dvw;
`