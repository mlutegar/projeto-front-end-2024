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
            tipo: "Dosimetrias Clínicas",
            aberto: contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Pendente") + contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Concluído")
        },
        {
            tipo: "Dosimetrias Pré-clínicas",
            aberto: contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Pendente") + contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Concluído")
        },
        {
            tipo: "Radiosinoviortese",
            aberto: contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Pendente") + contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Concluído")
        },
        {
            tipo: "Segmentação",
            aberto: contarSolicitacao(props.solicitacoes, "Segmentação", "Pendente") + contarSolicitacao(props.solicitacoes, "Segmentação", "Em andamento"),
            fechado: contarSolicitacao(props.solicitacoes, "Segmentação", "Concluído")
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
                pagina={false}
                info="Aqui você pode visualizar algumas informações sobre as solicitações disponíveis. Quantas solicitações estão abertas e fechadas de cada tipo e o total de solicitações abertas e fechadas."
                conteudo={
                    <SecaoInfoStyle>
                        <div className="geral">
                            <InfoGeral solicitacoes={solicitacoesTotal} index={0}/>
                        </div>
                        <div className="linha">

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
