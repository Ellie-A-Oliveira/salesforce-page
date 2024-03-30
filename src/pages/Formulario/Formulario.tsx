// import * as img_tablet from '../../assets/img-forms.png';

import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { FormularioStyle } from "./Formulario.style";
import { Button } from "../../components";
import { ButtonVariants } from "../../constants";


export const Formulario = () => {

    // function search(formData: any}) {
    //     const query = formData.get({email-corp});
    //     alert(`You searched for '${email-corp}'`);
    // }

    return (
        <>
            <p>Com o Sales Cloud Professional Edition, você tem acesso a:</p>
            <ul>
                <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                <li>Processos, relatórios e dashboards pré-configurados;</li>
                <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                <li>Guias e outras materiais sobre boas práticas de vendas;</li>
                <li>Onboarding integrado, treinamentos e webinars online;</li>
                <li>Configuração de pontuação e roteamento de leads;</li>
                <li>Ferramentas para automação de tarefas recorrentes;</li>
                <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
            </ul>

            <p><span>Dúvidas?</span> Clique o ícone de chat para acionar o Salesbot, ou entre em contato e fale com um de nossos especialistas: <span>0800 891 1887.</span></p>

            <img src="src\assets\img-forms.png" alt="Portal da Salesforce funcionando em tablet e smartphone" />

            <FormularioStyle>
                <h3>Inscreva-se para começar sua avaliação gratuita.</h3>
                <p>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>

                <form className="form">
                    <label htmlFor="nome">Nome</label>
                    <input name="nome"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input name="sobrenome"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="cargo">Cargo</label>
                    <input name="cargo"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="email-corp">Email corporativo</label>
                    <input name="email-corp"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="telefone">Telefone</label>
                    <input name="telefone"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="empresa">Empresa</label>
                    <input name="empresa"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="tamanho-empresa">Tamanho da empresa</label>
                    <input name="tamanho-empresa"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="pais-regiao">País/Região</label>
                    <input name="pais-regiao"
                        type="text"
                        placeholder="Digite um valor..." />
                    <label htmlFor="idioma">Idioma</label>
                    <input name="idioma"
                        type="text"
                        placeholder="Digite um valor..." />
                    <input type="checkbox" id="terms" name="terms" />
                    <label htmlFor="terms">Estou de acordo com o Main Services Agreement.</label>

                    <p> Atenção: Sua avaliação gratuita pode ser provisionada ou migrada para o Hyperforce, a Infraestrutura de nuvem pública do Salesforce.

                        Ao inscrever-se, você confirma que concorda com o processamento de seus dados pessoais pela Salesforce, conforme descrito na Declaração de privacidade.
                    </p>
                    <Button variant={ButtonVariants.PRIMARY}>INICIAR TESTE GRATUITO</Button>
                </form>
            </FormularioStyle>
        </>
    )
}