import styled from "styled-components";
import { variables } from "../../styles/variables.style";
import { colors } from "../../styles/colors.style";

export const FooterStyled = styled.footer`
    ul {
        list-style: none;
        padding-left: 0;

        li {
            margin-bottom: 0.5rem;
        }
    }

    .logo {
        width: 100px;
    }

    .links-list {
        a {
            text-decoration: none;
        }
    }

    .social-links {
        a {
            color: inherit;
            margin-right: 1rem;
            font-size: ${variables.textSize.socialLinks};
        }
    }

    .legal {
        background-color: ${colors.background.primaryDark};
        color: ${colors.text.inverse};

        a:visited {
            color: ${colors.text.inverse};
        }

        .legal-section {
            display: grid;
            grid-template-columns: max-content 1fr;
            gap: 2rem;
        }
    }
`