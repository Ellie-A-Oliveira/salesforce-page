import styled from "styled-components";
import { colors } from "../../styles/colors.style";

export const HeaderStyled = styled.header`
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: ${colors.background.default};
    padding: .75rem 2rem;

    .logo {
        width: 80px;
        margin-right: 2rem;
    }

    ul {
        list-style: none;
        padding-left: 0;

        li > a {
            font-weight: bold;

            &:hover {
                color: ${colors.text.secondary};
            }
        }
    }
`;