import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	const handleNavigateToHome = () => {
		navigate('/');
	};

	return (
		<header>
			<h1>Salesforce</h1>
			<nav>
				<a onClick={handleNavigateToHome}>Home</a>
			</nav>
		</header>
	);
};
