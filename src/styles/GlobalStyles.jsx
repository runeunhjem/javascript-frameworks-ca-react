import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  /* --color-pink-dark: #440a4b; */
  --color-pink: #800091;
  /* --color-pink-light: #c5bfc5; */
  --color-pink-light: #ccade9;
  --color-pink-xlight: #f5e6f5;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-success: #28a745;
  /* --color-gold: #d8c34e; */
  --color-gold: #ffc107;
  --color-gold-search: #800091;
  --color-gray: #6c757d;
  --color-gray-light: #c5bfc5;
  --color-gray-dark: #343a40;
  --color-red: #771313;

  --font-size-xsmall: calc(0.6rem + 1vmin);
  --font-size-small: calc(0.8rem + 1vmin);
  --font-size-medium: calc(1rem + 1vmin);
  --font-size-large: calc(1.2rem + 1vmin);
  --font-size-xlarge: calc(1.5rem + 1vmin);
  --font-size-xxlarge: calc(2rem + 1vmin);
  --font-size-xxxlarge: calc(3rem + 1vmin);

  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  --box-shadow-light: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  --box-shadow-dark: 0 0 5px 0 rgba(245, 230, 245, 0.6);
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  header, footer, .sort-and-filter-container {
    background-color: ${(props) => props.theme.header};
    // color: ${(props) => props.theme.text};
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-size: var(--font-size-small);
    min-height: 100vh;
  }

  .view-product {
    background-color: ${(props) => props.theme.viewProductButton};
    color: ${(props) => props.theme.text};
  }
  .product-card {
    box-shadow: ${(props) => props.theme.productCardShadow};
  }
`;
