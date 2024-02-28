import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-pink-dark: #440a4b;
  --color-pink: #800091;
  --color-pink-light: #ccade9;
  --color-pink-lighter: #c5bfc5;
  --color-pink-xlight: #f5e6f5;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-success: #28a745;
  --color-gold-light: #d8c34e;
  --color-gold: #ffc107;
  --color-gold-search: #800091;
  --color-gray: #6c757d;
  --color-gray-light: #c5bfc5;
  --color-gray-dark: #343a40;
  --color-red: #d30000;
  --color-red-dark: #771313;

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

  --box-shadow-light: 1px 1px 2px 0px rgba(0, 0, 0, 0.6);
  --box-shadow-dark: 1px 1px 2px 0px rgba(245, 230, 245, 0.6);

  --card-shadow-light: 2px 2px 8px 0px rgba(0, 0, 0, 0.6);
  --card-shadow-dark: 2px 2px 8px 0px rgba(245, 230, 245, 0.6);
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }


  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-size: var(--font-size-small);
    height: 100vh;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-pink-light);
      border-radius: 5px;
      &:hover {
        background-color: var(--color-gray);
      }
    }
  }

  header, footer, .sort-and-filter-container {
    background-color: ${(props) => props.theme.header};
  }

  .pageBody {
    flex-grow: 1;
  }

  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

  .main-container, .sort-and-filter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }

  .product-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: calc(100% - 2vmin);
    min-height: 80vh;
  }

  .view-product {
    background-color: ${(props) => props.theme.viewProductButton};
    color: ${(props) => props.theme.text};
  }

  .product-card {
    box-shadow: ${(props) => props.theme.productCardShadow};
  }

  input, textarea {
    background-color: ${(props) => props.theme.input};
    color: ${(props) => props.theme.inputText};
  }
`;
