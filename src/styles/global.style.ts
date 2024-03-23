import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.style';
import { fonts } from './fonts.style';
import { colors } from './colors.style';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fonts}

    body {
        font-family: 'Salesforce Sans';
        color: ${colors.text.regular};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'ITC Avant Garde' sans-serif;
        color: ${colors.text.emphasis};
    }

    a {
        cursor: pointer;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }
`
