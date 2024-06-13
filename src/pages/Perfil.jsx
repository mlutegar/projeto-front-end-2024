import Base from './Base';
import Botao from "../components/Geral/Botoes/Botao/Botao";
import {useState} from "react";
import BotaoAtencao from "../components/Geral/Botoes/BotaoAtencao/BotaoAtencao";
import InformacoesPerfil from "../components/Perfil/InformacoesPerfil/InformacoesPerfil";
import {PerfilStyle} from "../components/Perfil/Style";

const ServicoPage = () => {
    // botaoClicado: variável que armazena o nome do botão que foi clicado, e é usada para determinar qual seção será exibida, sendo "Dados do usúario" a seção padrão exibida e "Arquivos" a seção exibida ao clicar no botão "Arquivos"
    const [botaoClicado, setBotaoClicado] = useState("Dados do usúario");

    // servico: variável que armazena as informações da solicitação que será exibida na página, buscando a solicitação com o id passado pela URL
    const usuario = {
        id: 1,
        nome: "Michel",
        sobrenome: "Lutegar",
        email: "mlutegar@gmail.com",
        telefone: "21999795887",
        dataNascimento: "01/01/1990",
        cpf: "123.456.789-00",
        endereco: "Rua dos Bobos, nº 0",
        cidade: "Rio de Janeiro",
    }

    // trocarSecao: função que recebe o nome da seção que foi clicada e altera o estado do botaoClicado para exibir a seção correspondente
    // parâmetros:
    // - secao: string que representa o nome da seção que foi clicada
    const trocarSecao = (secao) => {
        console.log(secao);
        if (secao === "Dados do usúario") {
            setBotaoClicado("Dados do usúario")
        }
        if (secao === "Arquivos") {
            setBotaoClicado("Arquivos")
        }
    }

    // deslogar: função que exibe um prompt para confirmar a exclusão do serviço e o deleta, disparando um alerta de sucesso e em seguida redirecionando para a página de serviços
    const deslogar = () => {
        const confirmacao = window.confirm("Tem certeza que deseja deslogar?");
        if (confirmacao) {
            alert("Deslogado!");
            window.location.href = "https://www.dosimagem.com/contact";
        }
    }

    return (
        <Base
            titulo={"Usúario: " + usuario.nome}
        >
            <div style={{display: 'flex', justifyContent: "space-between", marginBottom: 25, marginTop: 30}}>
                <div style={{display: 'flex', gap: 10, flexWrap: "wrap"}}>
                    <Botao
                        text="Dados do usúario"
                        isActive={botaoClicado === "Dados do usúario"}
                        onClick={() => trocarSecao("Dados do usúario")}
                    />

                    <BotaoAtencao
                        text="Deslogar"
                        onClick={() => deslogar()}
                    />
                </div>
            </div>

            <PerfilStyle>
                <div id="container-perfil">
                    <div id="header-perfil">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>Dados do usuário</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>
                    <div id="body-perfil">
                        <InformacoesPerfil
                            Nome={usuario.nome}
                            Sobrenome={usuario.sobrenome}
                            Email={usuario.email}
                            Telefone={usuario.telefone}
                            DataNascimento={usuario.dataNascimento}
                            CPF={usuario.cpf}
                        />
                    </div>
                </div>
            </PerfilStyle>
        </Base>
    );

};

export default ServicoPage;
