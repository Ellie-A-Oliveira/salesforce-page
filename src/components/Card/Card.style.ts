import styled from "styled-components";
import { variables } from "../../styles/variables.style";

interface CardProps {
    borders?: boolean;
    imgheight?: string;
    imgwidth?: string;
}

export const CardStyled = styled.article<CardProps>`
    --padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding) / 1.5);
    max-width: 368px;
    border-radius: ${variables.borderRadius.default};
    padding-bottom: var(--padding);
    overflow: hidden;

    img {
        width: ${({ imgwidth }) => imgwidth ?? '100%'};
        max-width: ${({ imgwidth }) => imgwidth ?? '100%'};
        height: ${({ imgheight }) => imgheight ?? '368px'};
        max-height: ${({ imgheight }) => imgheight ?? '368px'};
        object-fit: cover;
        order: 1;
    }

    h4 {
        font-weight: 800;
        order: 2;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    p {
        order: 3;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    a {
        font-weight: 800;
        order: 4;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    ${(props) =>
        props.borders &&
        `
            box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
        `}
`;