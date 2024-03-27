import styled from "styled-components";
import { variables } from "../../styles/variables.style";
import { colors } from "../../styles/colors.style";

interface CardProps {
    borders?: boolean;
    centered?: boolean;
    objectfit?: string;
    aspectRatio?: string;
}

export const CardStyled = styled.article<CardProps>`
    --padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: calc(var(--padding) / 1.5);
    width: 368px;
    max-width: 368px;
    border-radius: ${variables.borderRadius.default};
    padding-bottom: var(--padding);
    overflow: hidden;

    .img {
        img {
            width: 100%;
            height: 100%;
            object-fit: ${({ objectfit }) => objectfit ?? 'cover'};
            aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? 'inherit'};
        }
        order: 1;
    }

    h4 {
        font-weight: 800;
        order: 2;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .content {
        order: 3;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .link {
        font-weight: 800;
        order: 4;
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .subtext {
        margin-top: .5rem;
        margin-bottom: .5rem;
        padding: 0;
        color: ${colors.text.light};
    }

    ${(props) =>
        props.borders &&
        `
            box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
        `}

    ${(props) =>
        props.centered &&
        `
            align-items: center;
            justify-content: center;
            text-align: center;
        `}
`;