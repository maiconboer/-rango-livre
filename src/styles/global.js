import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color1: #FFA600;
    --color2: #323232;
    --color3: #A1A1A1;
    --color4: #E5E5E5;
    --color5: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color4);
    color: var(--color2);
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
  }

  h1, h2, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
