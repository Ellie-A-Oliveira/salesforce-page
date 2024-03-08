import styled from "styled-components";

export const ButtonElement = styled.button`
    border-radius: 3px;
    padding: .75rem 2rem;
    border: none;

    /* Variants */

    ${(props) => 
        props.variant === 'primary' &&
        `
        background-color: var(--background-color-primary);
        color: var(--text-color-inverse);
        `
    }

    ${(props) => 
        props.variant === 'primary-inverted' &&
        `
        background-color: var(--text-color-inverse);
        color: var(--background-color-primary);
        border: 1px solid var(--background-color-primary);
        `
    }

    ${(props) => 
        props.variant === 'success' &&
        `
        background-color: var(--background-color-success);
        color: var(--text-color-inverse);
        `
    }

    ${(props) => 
        props.variant === 'success-inverted' &&
        `
        background-color: var(--text-color-inverse);
        color: var(--background-color-success);
        border: 1px solid var(--background-color-success);
        `
    }

    /* End Variants */

    /* Sizes */

    ${(props) =>
        props.size === 'sm' &&
        `
        padding: .25rem .75rem;
        `
    }

    /* Sizes End */
`;