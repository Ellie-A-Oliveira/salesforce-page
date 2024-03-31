import styled from "styled-components";
import { variables } from "../../styles/variables.style";
import { colors } from "../../styles/colors.style";

export const FormInputStyle = styled.div`


    .input{
        width: 100%;
        padding: 0.25rem 0.5rem ;
        border-radius: ${variables.borderRadius.button};
        border: 1px solid ${colors.border.primaryDark} ;
    }
    .label{
        color: ${colors.text.light};
    }




`
