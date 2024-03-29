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

    .main-padding {
        --padding: 9.5rem;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .text-center {
        text-align: center;
    }

    .pt-1 {
        padding-top: 0.25rem;
    }
    .pt-2 {
        padding-top: 0.5rem;
    }
    .pt-3 {
        padding-top: 1rem;
    }
    .pt-4 {
        padding-top: 2rem;
    }

    .pb-1 {
        padding-bottom: 0.25rem;
    }
    .pb-2 {
        padding-bottom: 0.5rem;
    }
    .pb-3 {
        padding-bottom: 1rem;
    }
    .pb-4 {
        padding-bottom: 2rem;
    }

    .py-1 {
        padding-bottom: 0.25rem;
        padding-top: 0.25rem;
    }
    .py-2 {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
    .py-3 {
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    .py-4 {
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    .pl-1 {
        padding-left: 0.25rem;
    }
    .pl-2 {
        padding-left: 0.5rem;
    }
    .pl-3 {
        padding-left: 1rem;
    }
    .pl-4 {
        padding-left: 2rem;
    }

    .pr-1 {
        padding-right: 0.25rem;
    }
    .pr-2 {
        padding-right: 0.5rem;
    }
    .pr-3 {
        padding-right: 1rem;
    }
    .pr-4 {
        padding-right: 2rem;
    }

    .px-1 {
        padding-right: 0.25rem;
        padding-left: 0.25rem;
    }
    .px-2 {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
    .px-3 {
        padding-right: 1rem;
        padding-left: 1rem;
    }
    .px-4 {
        padding-right: 2rem;
        padding-left: 2rem;
    }


    .mt-1 {
        margin-top: 0.25rem;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
    .mt-3 {
        margin-top: 1rem;
    }
    .mt-4 {
        margin-top: 2rem;
    }
    .mt-5 {
        margin-top: 4rem;
    }
    .mt-6 {
        margin-top: 8rem;
    }

    .mb-1 {
        margin-bottom: 0.25rem;
    }
    .mb-2 {
        margin-bottom: 0.5rem;
    }
    .mb-3 {
        margin-bottom: 1rem;
    }
    .mb-4 {
        margin-bottom: 2rem;
    }

    .my-1 {
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
    }
    .my-2 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
    .my-3 {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    .my-4 {
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .ml-1 {
        margin-left: 0.25rem;
    }
    .ml-2 {
        margin-left: 0.5rem;
    }
    .ml-3 {
        margin-left: 1rem;
    }
    .ml-4 {
        margin-left: 2rem;
    }

    .mr-1 {
        margin-right: 0.25rem;
    }
    .mr-2 {
        margin-right: 0.5rem;
    }
    .mr-3 {
        margin-right: 1rem;
    }
    .mr-4 {
        margin-right: 2rem;
    }

    .mx-1 {
        margin-right: 0.25rem;
        margin-left: 0.25rem;
    }
    .mx-2 {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
    }
    .mx-3 {
        margin-right: 1rem;
        margin-left: 1rem;
    }
    .mx-4 {
        margin-right: 2rem;
        margin-left: 2rem;
    }

    .gap-1 {
        gap: .25rem;
    }
    .gap-2 {
        gap: .5rem;
    }
    .gap-3 {
        gap: 1rem;
    }
    .gap-4 {
        gap: 2rem;
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
