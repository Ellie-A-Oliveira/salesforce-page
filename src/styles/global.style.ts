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
    .block{
        display: block;
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
    .flex-wrap{
        flex-wrap: wrap;
    }
    .inline{
        display: inline;
    }
    .text-left{
        text-align: left;
    }
    .w-100{
        width: 100%;
    }
    .h-100{
        height: 100%;
    }

    .main-padding {
        --padding: .5rem;
        padding-left: var(--padding);
        padding-right: var(--padding);

        @media (min-width: 768px) {
            --padding: 1rem;
        }

        @media (min-width: 1052px) {
            --padding: 5rem;
        }

        @media (min-width: 1268px) {
            --padding: clamp(2rem, min(15%, 15vw), 40%);
        }
        
        @media (min-width: 1920px) {
            --padding: clamp(2rem, min(20%, 20vw), 40%);
        }
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

    .collapse-md {
        @media (max-width: 1268px) {
            display: none;
        }
    }

    .show-md {
        @media (min-width: 1269px) {
            display: none;
        }
    }
`
