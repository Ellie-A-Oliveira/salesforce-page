import { styled } from "styled-components";
import { variables } from "../../styles/variables.style";

export const CircleButtonStyled = styled.div<{
    color?: string
}>`
    --size: 100px;
    max-width: calc(var(--size) * 1.3);
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        word-break: keep-all;
        overflow-wrap: normal;
        font-size: ${variables.textSize.small};
        font-weight: bold;
    }
    .circle-button {
        color: ${(props) => props.color ?? "inherit"};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: ${variables.boxShadow.default};
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        margin-bottom: 1rem;
    }
`