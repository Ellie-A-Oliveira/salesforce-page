import styled from "styled-components";
import { ButtonVariants, Sizes } from "../../constants";

export const ButtonElement = styled.button<{
    variant?: ButtonVariants,
    size?: Sizes,
    format?: 'round'
}>`
    border-width: 1px;
    border-style: solid;
    border-color: unset;
    border-radius: 5px;
    
    padding: .75rem 2rem;
    
    font-size: var(--text-size-small);
    font-weight: bold;

    cursor: pointer;

    transition: background-color .1s ease-in-out,
                color .1s ease-in-out;

    /* SECTION - Variants */

    ${(props) => 
        props.variant === 'primary' &&
        `
        background-color: var(--background-color-primary);
        color: var(--text-color-inverse);
        border-color: var(--background-color-primary);
        
        &:hover {
            background-color: var(--background-color-primary-hover);
        }
        `
    }

    ${(props) => 
        props.variant === 'primary-inverted' &&
        `
        background-color: var(--text-color-inverse);
        color: var(--background-color-primary);
        border-color: var(--background-color-primary);
        
        &:hover {
            background-color: var(--background-color-primary);
            color: var(--text-color-inverse);
        }
        `
    }

    ${(props) => 
        props.variant === 'success' &&
        `
        background-color: var(--background-color-success);
        color: var(--text-color-inverse);
        border-color: var(--background-color-success);

        &:hover {
            background-color: var(--background-color-success-hover);
        }
        `
    }

    ${(props) => 
        props.variant === 'success-inverted' &&
        `
        background-color: var(--text-color-inverse);
        color: var(--background-color-success);
        border-color: var(--background-color-success);

        &:hover {
            background-color: var(--background-color-success);
            color: var(--text-color-inverse);
        }
        `
    }

    /* !SECTION - Variants */

    /* SECTION - Sizes */

    ${(props) =>
        props.size === 'sm' &&
        `
        padding: .25rem .75rem;
        `
    }

    /* !SECTION - Sizes */

    /* SECTION - Formats */

    ${(props) =>
        props.format === 'round' &&
        `
        border-radius: 50%;
        padding: .75rem;
        `
    }

    /* !SECTION - Formats */
`;