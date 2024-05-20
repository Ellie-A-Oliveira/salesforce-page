/* eslint-disable @typescript-eslint/no-explicit-any */
import * as imgTablet from '../../assets/img/img-forms.png';
import { FormularioStyle } from "./Formulario.style";
import { Button } from "../../components";
import { ButtonVariants } from "../../constants";
import { FormInput } from '../../components/FormInput/FormInput';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ClienteService } from '../../services/Cliente.service';
import { Provider } from '../../scripts/provider';
import { Cliente } from '../../interfaces/Cliente.interface';
import { EmpresaService } from '../../services/Empresa.service';
import { Empresa } from '../../interfaces/Empresa.interface';
import { useNavigate } from 'react-router-dom';

interface FormInputs {
    nome?: string;
    sobrenome?: string;
    email?: string;
    tipo?: string;
    idioma?: string;
    pais?: string;
    telefone?: string;
}

export const Formulario = () => {

    const [inputs, setInputs] = useState<FormInputs>({});
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const clienteService = useRef(Provider.provide(ClienteService));
    const empresaService = useRef(Provider.provide(EmpresaService));

    const navigate = useNavigate();

    useEffect(() => {
		const getClientes = async () => {
			setClientes(await clienteService.current.getAll());
			console.log(clientes);
		};

		getClientes();
	}, []);    
    
    useEffect(() => {
		const getEmpresa = async () => {
			setEmpresas(await empresaService.current.getAll());
			console.log(empresas);
		};

		getEmpresa();
	}, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const clienteData: Partial<Cliente> = {
            nome: inputs.nome,
            sobrenome: inputs.sobrenome,
            email: inputs.email,
            tipo:'Indústria',
            idioma: 'Português',
            pais: inputs.pais,
            telefone: inputs.telefone
        }
    
        const empresaData: Partial<Empresa> = {
            nome: inputs.nome,
            tipoIndustria: 'Comércio',
            tamanho: 'Pequeno',
            paisSede: inputs.pais,
        };
        
        try {
            const clienteResponse = await clienteService.current.create(clienteData);
            empresaData.clienteId = clienteResponse.id;

            try {
                await empresaService.current.create(empresaData);
            } catch (error) {
                console.error('Erro:', error);
            }
            
            navigate('/success');
    
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <FormularioStyle>
            <div className='main-padding flex gap-1'>
                <div>
                    <h2 className='mb-2 forms-title'>Experimente nossa solução completa de CRM e vendas grátis por 30 dias.</h2>
                    <p className='forms-text'>Com o Sales Cloud Professional Edition, você tem acesso a:</p>
                    <ul className='my-2 list-text'>
                        <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                        <li>Processos, relatórios e dashboards pré-configurados;</li>
                        <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                        <li>Guias e outras materiais sobre boas práticas de vendas;</li>
                        <li>Onboarding integrado, treinamentos e webinars online;</li>
                        <li>Configuração de pontuação e roteamento de leads;</li>
                        <li>Ferramentas para automação de tarefas recorrentes;</li>
                        <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
                    </ul>

                    <p className='forms-text'><span className='highlighted'>Dúvidas?</span> Clique o <span className='underlined'>ícone de chat</span> para acionar o Salesbot, ou <span className='underlined'>entre em contato</span> e fale com um de nossos especialistas: <span className='highlighted'>0800 891 1887.</span></p>

                    <img src={imgTablet.default} alt="Portal da Salesforce funcionando em tablet e smartphone" />
                </div>

                <div className='formulario'>
                    <h3>Inscreva-se para começar sua avaliação gratuita.</h3>
                    <p className='descricao'>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className='flex justify-between gap-2 mb-2'>
                            <FormInput inputType="text" name='nome' onChange={handleChange} required={true}>Nome</FormInput>
                            <FormInput inputType="text" name='sobrenome' onChange={handleChange} required={true}>Sobrenome</FormInput>
                        </div>
                        <FormInput inputType="text" className='mb-2' name='cargo' onChange={handleChange} required={true}>Cargo</FormInput>
                        <FormInput inputType="text" className='mb-2' name='email' onChange={handleChange} required={true}>Email corporativo</FormInput>
                        <FormInput inputType="text" className='mb-2' name='telefone' onChange={handleChange} required={true}>Telefone</FormInput>
                        <FormInput inputType="text" className='mb-2' name='empresa' onChange={handleChange} required={true}>Nome da Empresa</FormInput>
                        <FormInput inputType="text" className='mb-2' name='contato' onChange={handleChange} required={true}>Nome do Contato</FormInput>
                        <FormInput inputType="text" className='mb-2' name='cargo-contato' onChange={handleChange} required={true}>Cargo do Contato</FormInput>
                        <FormInput inputType="text" className='mb-2' name='email-contato' onChange={handleChange} required={true}>Email do Contato</FormInput>
                        <FormInput inputType="text" className='mb-2' name='pais' onChange={handleChange} required={true}>País</FormInput>
                        <FormInput inputType="text" className='mb-2' name='estado' onChange={handleChange} required={true}>Estado</FormInput>
                        <FormInput inputType="checkbox" className='mb-2' name='agreement' onChange={handleChange} required={true}>Estou de acordo com o <a href="https://www.google.com">Main Services Agreement</a></FormInput>


                        <p className='mb-2'> Atenção: Sua avaliação gratuita pode ser provisionada ou migrada para o Hyperforce, a Infraestrutura de nuvem pública do Salesforce.
                            Ao inscrever-se, você confirma que concorda com o processamento de seus dados pessoais pela Salesforce, conforme descrito na Declaração de privacidade.
                        </p>

                        <Button variant={ButtonVariants.PRIMARY} className='w-100' type='submit'>INICIAR TESTE GRATUITO</Button>
                    </form>
                </div>
            </div>

        </FormularioStyle>

    )
}