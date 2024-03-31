import styled from "styled-components";
import { colors } from "../../styles/colors.style";
import { variables } from "../../styles/variables.style";

export const FormularioStyle = styled.article`

    background-image: url('src/assets/img/bg-forms.jpeg');
    background-size: cover;

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


`