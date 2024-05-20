import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as logo from '../../assets/img/salesforce-with-type-logo.svg';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FooterStyled } from './Footer.style';
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import FloatingMenu from '../Floating-Menu/Floating-Menu';

interface FooterProps {
	className?: string
}

export const Footer = ({className}: FooterProps) => {
	return <FooterStyled className={className}>
		<div className='flex main-padding justify-between'>
			<article>
				<section className='mb-3'>
					<img className='logo' src={logo.default} alt="Logo Salesforce" />
				</section>
				<section className='mb-3 social-links'>
					<a href="https://www.facebook.com/SalesforceBrasil/"><FontAwesomeIcon icon={faFacebook} /></a>
					<a href="https://twitter.com/salesforce"><FontAwesomeIcon icon={faTwitter} /></a>
					<a href="https://www.linkedin.com/company/salesforce/"><FontAwesomeIcon icon={faLinkedin} /></a>
					<a href="https://www.instagram.com/salesforcebrasil/"><FontAwesomeIcon icon={faInstagram} /></a>
					<a href="https://www.youtube.com/SalesforceBrasil"><FontAwesomeIcon icon={faYoutube} /></a>
				</section>
				<address>
					Entre em contato <a href={"tel:+" + "0800 891 1887"}>0800 891 1887</a>
				</address>
			</article>
			<article>
				<header className='mb-3'>
					<h5>Ainda não conhece a Salesforce?</h5>
				</header>
				<section className='links-list'>
					<ul>
						<li><a href='https://www.google.com'>O que é CRM?</a></li>
						<li><a href='https://www.google.com'>O que é a Salesforce?</a></li>
						<li><a href='https://www.google.com'>Software de automação de marketing?</a></li>
						<li><a href='https://www.google.com'>Explorar todos os produtos</a></li>
						<li><a href='https://www.google.com'>O que é computação na nuvem?</a></li>
						<li><a href='https://www.google.com'>Histórias de Clientes</a></li>
						<li><a href='https://www.google.com'>Edições e Preços</a></li>
						<li><a href='https://www.google.com'>Política de Privacidade</a></li>
					</ul>
				</section>
			</article>
			<article>
				<header className='mb-3'>
					<h5>Sobre a Salesforce</h5>
				</header>
				<section className='links-list'>
					<ul>
						<li><a href='https://www.google.com'>Nossa história</a></li>
						<li><a href='https://www.google.com'>Blog</a></li>
						<li><a href='https://www.google.com'>Carreiras</a></li>
						<li><a href='https://www.google.com'>Segurança</a></li>
						<li><a href='https://www.google.com'>Salesforce.org</a></li>
						<li><a href='https://www.google.com'>Sustentabilidade</a></li>
						<li><a href='https://www.google.com'>Investidores</a></li>
						<li><a href='https://www.google.com'>Dê-nos o seu feedback</a></li>
					</ul>
				</section>
			</article>
			<article>
				<header className='mb-3'>
					<h5>Links populares</h5>
				</header>
				<section className='links-list'>
					<ul>
						<li><a href='https://www.google.com'>Novos recursos e lançamentos</a></li>
						<li><a href='https://www.google.com'>Salesforce para pequenas empresas</a></li>
						<li><a href='https://www.google.com'>Encontre ou torne-se um parceiro</a></li>
						<li><a href='https://www.google.com'>CRM Software</a></li>
						<li><a href='https://www.google.com'>Salesforce LIVE</a></li>
						<li><a href='https://www.google.com'>Dreamforce</a></li>
						<li><a href='https://www.google.com'>Salesforce Mobile</a></li>
					</ul>
				</section>
			</article>
		</div>
		<article className='legal py-3 mt-4'>
			<section className="main-padding legal-section">
				<FloatingMenu
					title='Mudar de região'
					menuItems={[
						{
							columnTitle: 'Américas',
							options: [
								{ type: 'link', title: 'América Latina (Español)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Brasil (Português)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Canada (English)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Canada (Français)', link: 'https://www.google.com' },
								{ type: 'link', title: 'United States (English)', link: 'https://www.google.com' },
							],
						},
						{
							columnTitle: 'Europa, Oriente Médio e África',
							options: [
								{ type: 'link', title: 'España (Español)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Deutschland (Deutsch)', link: 'https://www.google.com' },
								{ type: 'link', title: 'France (Français)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Italia (Italiano)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Nederland (Nederlands)', link: 'https://www.google.com' },
								{ type: 'link', title: 'Sverige (Svenska)', link: 'https://www.google.com' },
								{ type: 'link', title: 'United Kingdom (English)', link: 'https://www.google.com' },
								{ type: 'link', title: 'All other countries (English)', link: 'https://www.google.com' },
							],
						},
						{
							columnTitle: 'Ásia Pacífico',
							options: [
								{ type: 'link', title: 'Australia (English)', link: 'https://www.google.com' },
								{ type: 'link', title: 'India (English)', link: 'https://www.google.com' },
								{ type: 'link', title: '日本 (日本語)', link: 'https://www.google.com' },
								{ type: 'link', title: '中国 (简体中文)', link: 'https://www.google.com' },
								{ type: 'link', title: '台灣 (繁體中文)', link: 'https://www.google.com' },
								{ type: 'link', title: '한국 (한국어)', link: 'https://www.google.com' },
								{ type: 'link', title: 'ประเทศไทย (ไทย)', link: 'https://www.google.com' },
								{ type: 'link', title: 'All other countries (English)', link: 'https://www.google.com' },
							],
						},
					]}
				>
					<FontAwesomeIcon icon={faGlobe} /> Mudar de região <FontAwesomeIcon icon={faAngleDown} />
				</FloatingMenu>
				<div className='links'>
					<ul className='flex gap-3'>
						<li><a href='https://www.google.com'>Legal</a></li>
						<li><a href='https://www.google.com'>Termos de serviços</a></li>
						<li><a href='https://www.google.com'>Declaração de privacidade</a></li>
						<li><a href='https://www.google.com'>Divulgação responsável</a></li>
						<li><a href='https://www.google.com'>Segurança</a></li>
						<li><a href='https://www.google.com'>Contato</a></li>
						<li><a href='https://www.google.com'>Preferências de cookies</a></li>
					</ul>
					<small>© Copyright 2023 Salesforce, Inc. <a href="https://www.google.com">Todos os direitos reservados</a>.
					As diversas marcas comerciais pertencem a seus respectivos proprietários.
					<address>
						Salesforce Brasil, Av. Jornalista Roberto Marinho, 85 – 14º andar – Cidade Monções, São Paulo – SP, 04575-000 Brasil.
					</address>
					</small>
				</div>
			</section>
		</article>
	</FooterStyled>;
};
