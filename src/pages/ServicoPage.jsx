import {Link, useParams} from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/ServicoDetalhado/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";
import SecaoGenerio from "../components/Geral/Secoes/SecaoGenerico/SecaoGenerio";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import {useRef, useState} from "react";
import ArquivoServico from "../components/ServicoDetalhado/ArquivosServico/ArquivoServico";
import styled from "styled-components";
import {BsBellFill} from "react-icons/bs";
import {MdOutlineWarning} from "react-icons/md";

const BotoesPaginasServicoPageStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const BotoesPaginasServicoPage = (props) => (
    <BotoesPaginasServicoPageStyle>
        <Botao
            text="Dados do usúario"
            isActive={props.botaoClicado === "Dados do usúario"}
            onClick={() => props.onClick("Dados do usúario")}
        />
        
        <Botao
            text="Arquivos"
            isActive={props.botaoClicado === "Arquivos"}
            onClick={() => props.onClick("Arquivos")}
        />
    </BotoesPaginasServicoPageStyle>
)

const ServicoPage = () => {
    // id: variável que armazena o id da solicitação que será passado pela URL, e é usado para buscar as informações da solicitação
    const {id} = useParams();

    // botaoClicado: variável que armazena o nome do botão que foi clicado, e é usada para determinar qual seção será exibida, sendo "Dados do usúario" a seção padrão exibida e "Arquivos" a seção exibida ao clicar no botão "Arquivos"
    const [botaoClicado, setBotaoClicado] = useState("Dados do usúario");

    // servico: variável que armazena as informações da solicitação que será exibida na página, buscando a solicitação com o id passado pela URL
    const servico = dadosSolicitacoes.find((solicitacao) => solicitacao.id === +id);

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

    // deleteServiço: função que exibe um prompt para confirmar a exclusão do serviço e o deleta, disparando um alerta de sucesso e em seguida redirecionando para a página de serviços
    const deleteServico = () => {
        const confirmacao = window.confirm("Tem certeza que deseja deletar este serviço?");
        if (confirmacao) {
            alert("Serviço deletado com sucesso!");
            window.location.href = "/Servicos";
        }
    }

    return (
        <Base
            titulo={"Serviço - " + servico.id}
        >
            <div style={{}}>
                <Link style={{textDecoration: "none", color: "black"}} to={"/Servicos"}>
                <span style={{fontSize: 15}}>
                    {`<-`} Voltar para serviços
                </span>
                </Link>
            </div>

            <div style={{display: 'flex', justifyContent: "space-between", marginBottom: 25, marginTop: 30}}>
                <BotoesPaginasServicoPage onClick={trocarSecao} botaoClicado={botaoClicado}/>
            </div>

            <>
                <div>
                    <h2>
                        <MdOutlineWarning style={{fontSize: 40, color: '#ffce08', position: 'relative', top: 12}} /> FALTANDO: {
                        servico ? (
                            servico.status === " Imagens de pacientes erradas, enviar novamente" ? (
                                <span style={{color: "red"}}>Imagens Paciente</span>
                            ) : servico.status === " Imagens de calibração errada, enviar novamente" ? (
                                <span style={{color: "red"}}>Imagens Calibração</span>
                            ) : servico.status === "Concluído" ? (
                                <span style={{color: "green"}}>Nada!</span>
                            ) : (
                                <span style={{color: "red"}}>Relatório</span>
                            )
                        ) : (
                            <span style={{color: "red"}}>Em andamento</span>
                        )
                    }</h2>
                </div>

                <div style={{marginTop: 40, fontSize: 20}}>
                    {botaoClicado === "Dados do usúario" && (
                        servico ? (
                            <InformacoesServico
                                Analyses={servico.analise}
                                Id={servico.id}
                                Status={servico.status}
                                Injetected={servico.atividade}
                                Data={servico.date}
                                Hora={servico.date}
                            />
                        ) : (
                            <p>Serviço não encontrado ou ID inválido.</p>
                        )
                    )}

                    {botaoClicado === "Arquivos" && (
                        servico ? (
                            <ArquivoServico
                                titulo="Arquivos"
                                cliente={servico.cliente}
                                id={servico.id}
                                situacao={servico.status}
                                imgPaciente={servico.imagem}
                                imgCalibracao={servico.calibracao}
                                relatorio={servico.relatorio}
                            />
                        ) : (
                            <p>Serviço não encontrado ou ID inválido.</p>
                        )
                    )}

                </div>


            </>
        </Base>
    );

};

export default ServicoPage;
