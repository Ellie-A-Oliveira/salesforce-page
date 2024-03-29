import styled from "styled-components";
import { variables } from "../../styles/variables.style";
import { colors } from "../../styles/colors.style";

interface CardProps {
    borders?: boolean;
    centered?: boolean;
    objectfit?: string;
    aspectRatio?: string;
    horizontal?: boolean;
    linkStyle?: string;
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

    .content {
        display: flex;
        flex-direction: column;
        gap: calc(var(--padding) / 2);
        order: 2;
    }

    .title {
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    .text-content {
        padding-left: var(--padding);
        padding-right: var(--padding);

        p {
            font-size: ${variables.textSize.small};
        }
    }

    .link {
        font-weight: 800;
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
            padding-top: var(--padding);
            align-items: center;
            justify-content: center;
            text-align: center;
        `}

    ${(props) =>
        props.horizontal &&
        `
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            max-width: 100%;
            text-align: left;
            padding: 0;
            justify-content: space-between;
            padding-left: calc(var(--padding) * 3);
            
            .content {
                order: 1;

                .title {
                    padding-left: 0;
                    padding-right: 0;
                    font-size: ${variables.textSize.h1};
                }
            }
            .img {
                order: 2;
            }
        `}

    ${(props) =>
        props.linkStyle === 'button' &&
        `
            .link {
                background-color: ${colors.background.primary};
                color: ${colors.text.inverse};
                padding: 0.75rem 2rem;
                border-radius: ${variables.borderRadius.button};
                width: max-content;
                
                text-decoration: none;
                transition: background-color 0.1s ease-in-out;
                &:hover {
                    background-color: ${colors.background.primaryHover};
                }
            }
        `}
`;