import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* ===== CSS Reset Completo ===== */

  /* Box sizing */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Reset de documento */
  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: ${({ theme }) => theme.fonts.basicSans.family};
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
  }

  /* Reset de tipografia */
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  p, span, a, strong, em, b, i, u, s {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: inherit;
    color: inherit;
  }

  /* Reset de listas */
  ul, ol, li {
    list-style: none;
  }

  /* Reset de links */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* Reset de imagens e media */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Reset de formulários */
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  /* Reset de tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td {
    padding: 0;
    text-align: left;
  }

  /* Reset de elementos semânticos */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav,
  section, summary {
    display: block;
  }

  /* Reset de citações */
  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  /* Reset de fieldset */
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  /* Reset de hr */
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 0;
  }

  /* Acessibilidade - foco visível */
  :focus-visible {
    outline: 2px solid #4A90D9;
    outline-offset: 2px;
  }

  /* Remove animações para quem prefere */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Root do React */
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
