import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.style';
import { fonts } from './fonts.style';
import { colors } from './colors.style';
import { variables } from './variables.style';
import { spacing } from './spacing.style';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fonts}
    ${spacing}

    body {
        font-family: 'Salesforce Sans';
        color: ${colors.text.regular};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'ITC Avant Garde', sans-serif;
        color: ${colors.text.emphasis};
    }

    h1 {
        font-size: ${variables.textSize.h1};
    }
    
    h2 {
        font-size: ${variables.textSize.h2};
    }
    
    h3 {
        font-size: ${variables.textSize.h3};
    }

    p {
        font-size: ${variables.textSize.regular};
    }

    a {
        cursor: pointer;
    }

    .flex {
        display: flex;
    }

    .inline-block {
        display: inline-block;
    }

    .flex-column {
        flex-direction: column;
    }

    .justify-between {
        justify-content: space-between;
    }

    .justify-center {
        justify-content: center;
    }

    .align-center {
        align-items: center;
    }

    .main-padding {
        --padding: 9.5rem;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .text-center {
        text-align: center;
    }

    .landing {
        align-items: center;

        .landing-text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & > * {
            width: 50%;
        }

        img {
            border-radius: ${variables.borderRadius.default};
        }
    }
`
