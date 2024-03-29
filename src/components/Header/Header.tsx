import { useNavigate } from 'react-router-dom';
import { ButtonVariants } from '../../constants';
import { Button } from '..';
import * as logo from '../../assets/img/salesforce-with-type-logo.svg';
import { HeaderStyled } from './Header.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<HeaderStyled>
			<nav className='flex align-center justify-between'>
				<ul className='flex align-center gap-4'>
					<li>
						<a onClick={() => handleNavigate('/')}><img className='logo' src={logo.default} alt="Logo da Salesforce" /></a>
					</li>
					<li>
						<a role='button'>Produtos</a>
					</li>
					<li>
						<a role='button'>Indústrias</a>
					</li>
					<li>
						<a role='button'>Aprendizado</a>
					</li>
					<li>
						<a role='button'>Suporte</a>
					</li>
					<li>
						<a role='button'>Empresa</a>
					</li>
				</ul>
				<div className='flex gap-4 align-center'>
					<div className='flex flex-column align-center'>
						<a>Entre em contato</a>
						<a href={"tel:+" + "0800 891 1887"}>0800 891 1887</a>
					</div>
					<a><FontAwesomeIcon icon={faSearch} size='lg' /></a>
					<a><FontAwesomeIcon icon={faGlobe} size='lg' /></a>
					<div>
						<a>
							<FontAwesomeIcon icon={faPerson} size='lg' /> Login
						</a>
					</div>
					<Button variant={ButtonVariants.SUCCESS}>
						Teste grátis
					</Button>
				</div>
			</nav>
		</HeaderStyled>
	);
};
