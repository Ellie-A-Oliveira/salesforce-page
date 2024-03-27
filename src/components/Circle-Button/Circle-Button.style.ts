import { styled } from "styled-components";

export const CircleButtonStyled = styled.div`
    --size: 105px;
    max-width: var(--size);

    p {
        word-break: keep-all;
        overflow-wrap: normal;
    }
    .circle-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        margin-bottom: 1rem;
    }
`