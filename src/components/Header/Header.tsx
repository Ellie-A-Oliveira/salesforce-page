import { useNavigate } from 'react-router-dom';
import { ButtonVariants, Sizes } from '../../constants';
import { Button } from '..';

export const Header = () => {
	const navigate = useNavigate();

	const handleNavigateToHome = () => {
		navigate('/');
	};

	return (
		<header>
			<nav>
				<a onClick={handleNavigateToHome}>Home</a>
			</nav>
			<Button variant={ButtonVariants.SUCCESS} size={Sizes.SMALL}>
				Teste grátis
			</Button>
		</header>
	);
};
