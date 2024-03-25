import { Button } from '../../components';
import { ButtonVariants } from '../../constants';
import Card from '../../components/Card/Card';
import * as img1 from '../../assets/img/marquee-salesforce-starter-980.webp';
import * as img2 from '../../assets/img/Find-an-AI-solution.webp';
import * as img3 from '../../assets/img/app-guide-small-business.webp';
import * as img4 from '../../assets/img/php-products-small-business.webp';
import * as img5 from '../../assets/img/php-products-sales-generic.webp';
import * as img6 from '../../assets/img/php-products-service-generic.webp';
import * as img7 from '../../assets/img/php-products-all-products.webp';

export const Home = () => {
	return (
		<>
			<article className='flex main-padding justify-between landing'>
				<header className='landing-text'>
					<h1>Experimente o Salesforce Starter Suite gratuitamente.</h1>
					<p>
					Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.
					</p>
					<div className="flex">
						<Button variant={ButtonVariants.PRIMARY}>Inicie o teste gratuito</Button>
						<Button variant={ButtonVariants.PRIMARY_INVERTED}>Assista à demo</Button>
					</div>
				</header>
				<section>
					<img src={img1.default} alt="Foto do Salesforce Starter" />
				</section>
			</article>
			<div className='flex justify-between main-padding'>
				<Card
					imgsrc={img1.default}
					imgheight='168px'
					imgwidth='368px'
					title='Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.'
					linkTitle='Conheça agora'
					link='https://www.google.com'
					borders={true}
				/>
				<Card
					imgsrc={img2.default}
					imgheight='168px'
					imgwidth='368px'
					title='Encontre uma solução de IA adaptada às suas necessidades de negócios.'
					linkTitle='Crie seu próprio Customer 360'
					link='https://www.google.com'
					borders={true}
				/>
				<Card
					imgsrc={img3.default}
					imgheight='168px'
					imgwidth='368px'
					title='Expanda sua pequena empresa com um CRM projetado para você.'
					linkTitle='Explore a solução'
					link='https://www.google.com'
					borders={true}
				/>
			</div>
			<h2>O que há de novo na Salesforce?</h2>
			<div className="flex justify-between main-padding">
				<Card
					imgsrc={img4.default}
					imgheight='368px'
					imgwidth='368px'
					title='Pequenas empresas'
					description='Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.'
					linkTitle='Assistir a demo'
					link='https://www.google.com'
				/>
				<Card
					imgsrc={img5.default}
					imgheight='368px'
					imgwidth='368px'
					title='Pequenas empresas'
					description='Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.'
					linkTitle='Assistir a demo'
					link='https://www.google.com'
				/>
				<Card
					imgsrc={img6.default}
					imgheight='368px'
					imgwidth='368px'
					title='Pequenas empresas'
					description='Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.'
					linkTitle='Assistir a demo'
					link='https://www.google.com'
				/>
				<Card
					imgsrc={img7.default}
					imgheight='368px'
					imgwidth='368px'
					title='Pequenas empresas'
					description='Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.'
					linkTitle='Assistir a demo'
					link='https://www.google.com'
				/>
			</div>
		</>
	);
};
