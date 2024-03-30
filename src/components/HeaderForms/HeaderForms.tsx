import * as logo from '../../assets/img/salesforce-with-type-logo.svg';
import { useNavigate } from "react-router-dom";
import { HeaderFormsStyled } from './HeaderForms.style';

export const HeaderForms = () => {
	const navigate = useNavigate();

    const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<>
			<HeaderFormsStyled>
				<a onClick={() => handleNavigate('/')}><img className='logo' src={logo.default} alt="Logo da Salesforce" /></a>
				<h2>Experimente nossa solução completa de CRM e vendas grátis por 30 dias.</h2>
			</HeaderFormsStyled>
		</>
	);
};
