import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import { ButtonVariants } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Home = () => {
	return (
		<>
			<h1>Entregue sucesso agora com o Salesforce Customer 360.</h1>
			<p>
				O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar
				suas metas de ROI.
			</p>
			<Button variant={ButtonVariants.PRIMARY}>Faça o teste grátis</Button>
			<Button variant={ButtonVariants.PRIMARY_INVERTED}>Saiba Mais</Button>
			<Button variant={ButtonVariants.PRIMARY} format="round">
				<FontAwesomeIcon icon={faPhone} />
			</Button>
		</>
	);
};
