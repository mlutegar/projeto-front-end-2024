import {Link, useParams} from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/ServicoDetalhado/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";
import SecaoGenerio from "../components/Geral/Secoes/SecaoGenerico/SecaoGenerio";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import {useRef, useState} from "react";
import ArquivoServico from "../components/ServicoDetalhado/ArquivosServico/ArquivoServico";
import BotaoAtencao from "../components/Geral/Botoes/BotaoAtencao/BotaoAtencao";
import InformacoesPerfil from "../components/Perfil/InformacoesPerfil/InformacoesPerfil";

const ServicoPage = () => {
    // user: variável que armazena o usuario logado
    const { id } = useParams();

    // botaoClicado: variável que armazena o nome do botão que foi clicado, e é usada para determinar qual seção será exibida, sendo "Dados do usúario" a seção padrão exibida e "Arquivos" a seção exibida ao clicar no botão "Arquivos"
    const [botaoClicado, setBotaoClicado] = useState("Dados do usúario");

    // servico: variável que armazena as informações da solicitação que será exibida na página, buscando a solicitação com o id passado pela URL
    const usuario = {
        id: 1,
        nome: "mlutegar",
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
            <div style={{marginTop: 50}}>

            </div>
            <SecaoGenerio>
                <div style={{display: "flex", justifyContent: "space-between", marginLeft: 50, marginRight: 50, marginBottom: 40}}>
                    <div style={{display: "flex", justifyContent: "left", marginLeft: 50, gap: 10}}>
                        <Botao
                            text="Dados do usúario"
                            isActive={botaoClicado === "Dados do usúario"}
                            onClick={() => trocarSecao("Dados do usúario")}
                        />
                    </div>

                    <div>
                        <BotaoAtencao
                            text="Deslogar"
                            onClick={() => deslogar()}
                        />
                    </div>
                </div>

                <div style={{marginBottom:40, marginLeft: 20, marginRight: 20, fontSize: 30}}>
                    {botaoClicado === "Dados do usúario" && (
                        usuario ? (
                            <InformacoesPerfil
                                Nome={usuario.nome}
                                Email={usuario.email}
                                DataNascimento={usuario.dataNascimento}
                                CPF={usuario.cpf}
                            />
                        ) : (
                            <p>Serviço não encontrado ou ID inválido.</p>
                        )
                    )}
                </div>


            </SecaoGenerio>
        </Base>
    );

};

export default ServicoPage;
