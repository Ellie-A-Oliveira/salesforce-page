import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.style';
import { fonts } from './fonts.style';
import { colors } from './colors.style';
import { variables } from './variables.style';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fonts}

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

    .justify-between {
        justify-content: space-between;
    }

    .main-padding {
        --padding: 9.5rem;
        padding-left: var(--padding);
        padding-right: var(--padding);
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
