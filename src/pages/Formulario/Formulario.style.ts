import styled from "styled-components";
import { colors } from "../../styles/colors.style";
import { variables } from "../../styles/variables.style";

export const FormularioStyle = styled.article`

    background-image: url('src/assets/img/bg-forms.jpeg');
    background-size: cover;
    position: relative;

    .forms-title{
        font-size: ${variables.textSize.formsTitle};
    }

    .forms-text{
        color: ${colors.text.emphasis};
    }
    p, li{
        font-size: ${variables.textSize.small};
    }

    .highlighted{
        font-weight: bold;
    }
    .underlined{
        text-decoration: underline;
    }
    .list-text{
        color: ${colors.text.light} ;
    }

    .formulario{
        width: 700px;
        background-color: ${colors.background.forms};
        padding: 2rem;

    }
    .descricao{
        font-size: ${variables.textSize.small};
        color: ${colors.text.light};
    }

    ::after {
        content: "";
        height: 100px;
        bottom: -100px;
        position: absolute;
        left: 0;
        right: 0;
        background: linear-gradient(0deg, rgba(255,255,255,1) 12%, rgba(172,243,229,1) 100%);
    }
`