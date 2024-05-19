import { SecaoInfoStyle } from "./Style";
import SecaoGenerio from "../../Geral/Secoes/SecaoGenerico/SecaoGenerio";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import { useState } from "react";
import Secao from "../../Geral/Secoes/Secao/Secao";
import InfoEspecifico from "../Cards/InfoEspecifico/InfoEspecifico";
import InfoGeral from "../Cards/InfoGeral/InfoGeral";

const SecaoInformacao = (props) => {
    // contarSolicitação: função que pega o json de solicitações e conta quantas solicitações estão abertas e fechadas do tipo do parâmetro e do status especificado no parâmetro
    const contarSolicitacao = (solicitacoes, tipo, status) => {
        return solicitacoes.filter((solicitacao) => solicitacao.tipo === tipo && solicitacao.status === status).length;
    }

    // contarSolicitacaoTotal: função que pega o json de solicitações e conta quantas solicitações a partir do status especificado no parâmetro
    const contarSolicitacaoTotal = (solicitacoes, status) => {
        return solicitacoes.filter((solicitacao) => solicitacao.status === status).length;
    }

    // solicitacoes: array que armazena os tipos de solicitações e seus respectivos status "aberto" e "fechado"
    const solicitacoes = [
        {
            tipo: "Clinic Doscimetries",
            aberto: contarSolicitacao(props.solicitacoes, "Clinic Doscimetries", "Pendente") + contarSolicitacao(props.solicitacoes, "Clinic Doscimetries", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Clinic Doscimetries", "Concluído")
        },
        {
            tipo: "Preclinic Doscimetries",
            aberto: contarSolicitacao(props.solicitacoes, "Preclinic Doscimetries", "Pendente") + contarSolicitacao(props.solicitacoes, "Preclinic Doscimetries", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Preclinic Doscimetries", "Concluído")
        },
        {
            tipo: "Radiosynoviorthesis",
            aberto: contarSolicitacao(props.solicitacoes, "Radiosynoviorthesis", "Pendente") + contarSolicitacao(props.solicitacoes, "Radiosynoviorthesis", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Radiosynoviorthesis", "Concluído")
        },
        {
            tipo: "Segmentation",
            aberto: contarSolicitacao(props.solicitacoes, "Segmentation", "Pendente") + contarSolicitacao(props.solicitacoes, "Segmentation", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Segmentation", "Concluído")
        }
    ];

    //solicitacoesTotal: array que armazena o total de solicitações abertas e fechadas
    const solicitacoesTotal = [
        {
            aberto: contarSolicitacaoTotal(props.solicitacoes, "Pendente") + contarSolicitacaoTotal(props.solicitacoes, "Em andamento"),
            fechado: contarSolicitacaoTotal(props.solicitacoes, "Concluído")
        }
    ];

    // index: índice do array solicitacoes
    const [index, setIndex] = useState(0);

    // avancar: função que incrementa o índice do array solicitacoes de forma circular
    const avancar = () => {
        setIndex((prevIndex) => (prevIndex + 1) % solicitacoes.length);
    };

    // voltar: função que decrementa o índice do array solicitacoes de forma circular
    const voltar = () => {
        setIndex((prevIndex) => (prevIndex - 1 + solicitacoes.length) % solicitacoes.length);
    };

    return (
            <Secao
                nome="Informações"
                conteudo={
                    <SecaoInfoStyle>
                        <div className="geral">
                            <InfoGeral solicitacoes={solicitacoesTotal} index={0}/>
                        </div>
                        <div className="especifico">
                            <InfoEspecifico solicitacoes={solicitacoes} index={index}/>
                        </div>
                    </SecaoInfoStyle>
                }
                footer={
                    <>
                        <BotaoAvancarVoltar voltar={voltar} avancar={avancar} />
                    </>
                }
            />
        );
}

export default SecaoInformacao;
