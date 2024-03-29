import styled from "styled-components";
import { colors } from "../../styles/colors.style";
import { variables } from "../../styles/variables.style";

interface FloatingMenuProps {
    height?: number;
    open?: boolean;
}

export const FloatingMenuStyled = styled.div<FloatingMenuProps>`
    position: relative;
    --balloon-point-size: 10px;

    .floating-menu {
        display: none;
        z-index: 3;
        position: absolute;
        top: calc(calc(${props => props.height ?? 0}px + var(--balloon-point-size)) * -1);

        box-shadow: ${variables.boxShadow.default};
        border-radius: ${variables.borderRadius.default};

        padding: 2rem;

        color: ${colors.text.regular};
        background-color: ${colors.background.default};

        .title {
            font-size: ${variables.textSize.h3};
            margin-bottom: 1rem;
            font-weight: bold;
        }

        .menu {
            display: flex;
            gap: 1rem;

            .column {
                &:not(:first-child) {
                    padding-left: 1rem;
                }
                position: relative;
                padding-right: 1rem;
                width: max-content;

                display: flex;
                flex-direction: column;
                gap: .5rem;

                &:not(:last-child):after {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    content: '';
                    border-right: 1px solid ${colors.text.lighter};
                }
            }

            .link {
                color: ${colors.text.regular};
            }
        }
    }

    .open {
        display: block;
    }
    
    ${props => props.open && `
        &::after {
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            content: '';
            position: absolute;
            top: calc(var(--balloon-point-size) * -1);
            right: 50%;
            left: calc(30% - var(--balloon-point-size));
            height: var(--balloon-point-size);
            width: calc(var(--balloon-point-size) * 1.5);
            background-color: ${colors.background.default};
        }
    `}

`