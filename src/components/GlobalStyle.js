import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }

    input {
        margin-top: 4px;
        border: 2px solid lightgray
        border-radius: 4px;
    }

    ul {
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;

    }

    .delContactBtnIcon {
        fill: gray;
    }
  
`;