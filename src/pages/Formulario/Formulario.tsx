// import * as img_tablet from '../../assets/img-forms.png';


export const Formulario = () => {

    function search(formData: { get: (arg0: string) => any; }) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
      }
      
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

        <h3>Inscreva-se para começar sua avaliação gratuita.</h3>
        <p>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito.</p>

        <form>
            <label htmlFor="nome">Nome</label>
            <input name="nome"
                    type="text"
                    placeholder="Digite um valor..." />        
            <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
            <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
                                <label htmlFor="sobrenome">Sobrenome</label>
            <input name="sobrenome"
                    type="text"
                    placeholder="Digite um valor..." />
        </form>
    </>
  )
}