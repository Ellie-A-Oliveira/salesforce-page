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
import * as img8 from '../../assets/img/sumup-customers-home.webp';
import * as img9 from '../../assets/img/gympass-customers-home.webp';
import * as img10 from '../../assets/img/vipal-customers-home.webp';
import * as img11 from '../../assets/img/tigre-customers-home.webp';
import * as img12 from '../../assets/img/hp-newsletter-card.webp';
import CircleButton from '../../components/Circle-Button/Circle-Button';
import { faCheckCircle, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { colors } from '../../styles/colors.style';

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
						<Button className="mr-2" variant={ButtonVariants.PRIMARY}>Inicie o teste gratuito</Button>
						<Button variant={ButtonVariants.PRIMARY_INVERTED}>Assista à demo</Button>
					</div>
				</header>
				<section>
					<img src={img1.default} alt="Foto do Salesforce Starter" />
				</section>
			</article>
			<article>
				<header className="main-padding text-center my-4">
					<h2>O que há de novo na Salesforce?</h2>
				</header>
				<section className='flex justify-between main-padding gap-3'>
					<Card
						imgProps={{ imgsrc: img1.default, aspectRatio: '16/9' }}
						title='Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.'
						linkTitle='Conheça agora'
						link='https://www.google.com'
						borders={true}
					/>
					<Card
						imgProps={{ imgsrc: img2.default, aspectRatio: '16/9' }}
						title='Encontre uma solução de IA adaptada às suas necessidades de negócios.'
						linkTitle='Crie seu próprio Customer 360'
						link='https://www.google.com'
						borders={true}
					/>
					<Card
						imgProps={{ imgsrc: img3.default, aspectRatio: '16/9' }}
						title='Expanda sua pequena empresa com um CRM projetado para você.'
						linkTitle='Explore a solução'
						link='https://www.google.com'
						borders={true}
					/>
				</section>
			</article>
			<article>
				<header className="main-padding text-center my-4">
					<h2>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</h2>
				</header>
				<section className="main-padding flex justify-between gap-3">
					<Card
						imgProps={{ imgsrc: img4.default }}
						title='Pequenas empresas'
						description='Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.'
						linkTitle='Assistir a demo'
						link='https://www.google.com'
					/>
					<Card
						imgProps={{ imgsrc: img5.default }}
						title='Vendas'
						description='Feche mais negócios e acelere o crescimento com o CRM nº1.'
						linkTitle='Assistir a demo'
						link='https://www.google.com'
					/>
					<Card
						imgProps={{ imgsrc: img6.default }}
						title='Atendimento'
						description='Gaste menos com serviços escaláveis que os clientes adoram.'
						linkTitle='Assistir a demo'
						link='https://www.google.com'
					/>
					<Card
						imgProps={{ imgsrc: img7.default }}
						title='Veja todos os produtos'
						description='Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.'
						linkTitle='Assistir a demo'
						link='https://www.google.com'
					/>
				</section>
			</article>
			<article>
				<header className="main-padding text-center my-4">
					<h2>Veja como os clientes da Salesforce se tornam empresas clientes.</h2>
				</header>
				<section className="main-padding flex justify-between gap-3">
					<Card
						imgProps={{ imgsrc: img8.default, objectfit: 'contain' }}
						title='Sumup'
						description='Indústria'
						subtext='Serviços Financeiros'
						linkTitle='Veja a história'
						link='https://www.google.com'
						centered={true}
						borders={true}
					/>
					<Card
						imgProps={{ imgsrc: img9.default, objectfit: 'contain' }}
						title='Gympass'
						description='Indústria'
						subtext='Saúde'
						linkTitle='Veja a história'
						link='https://www.google.com'
						centered={true}
						borders={true}
					/>
					<Card
						imgProps={{ imgsrc: img10.default, objectfit: 'contain' }}
						title='Vipal Borrachas'
						description='Indústria'
						subtext='Manufatura'
						linkTitle='Veja a história'
						link='https://www.google.com'
						centered={true}
						borders={true}
					/>
					<Card
						imgProps={{ imgsrc: img11.default, objectfit: 'contain' }}
						title='Grupo Tigre'
						description='Indústria'
						subtext='Construção Civil'
						linkTitle='Veja a história'
						link='https://www.google.com'
						centered={true}
						borders={true}
					/>
				</section>
			</article>
			<article className='main-padding text-center my-4'>
				<header>
					<h2>Encontre inovações para qualquer setor de indústria.</h2>
					<p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
				</header>
				<section className='my-4'>
					<Button variant={ButtonVariants.PRIMARY_INVERTED}>Veja todas as indústrias</Button>
					<div className='flex justify-center'>
						<div className='flex gap-4 my-4'>
							<CircleButton color={colors.text.secondary} iconName={faCoins}>Serviços Financeiros</CircleButton>
							<CircleButton color={colors.text.secondary} iconName={faShopify}>Varejo</CircleButton>
							<CircleButton color={colors.text.secondary} iconName={faHeart}>Saúde e Ciências da Vida</CircleButton>
							<CircleButton color={colors.text.secondary} iconName={faCheckCircle}>Manufatura</CircleButton>
						</div>
					</div>
				</section>
			</article>
			<article className='main-padding my-4'>
				<section>
					<Card
						imgProps={{ imgsrc: img12.default, aspectRatio: '3/2', objectfit: 'contain' }}
						title='Venda de forma mais inteligente'
						link='https://www.google.com'
						linkTitle='Entre em contato'
						linkStyle='button'
						centered={true}
						borders={true}
						horizontal={true}
					/>
				</section>
			</article>
		</>
	);
};
