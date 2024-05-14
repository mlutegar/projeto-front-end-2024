import { SecaoInfoStyle } from "./Style";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";
import BotaoAvancarVoltar from "../BotaoAvancarVoltar/BotaoAvancarVoltar";
import { useState } from "react";

const SecaoInfo = (props) => {
    // contarSolicitação: função que pega o json de solicitações e conta quantas solicitações estão abertas e fechadas do tipo do parâmetro e do status especificado no parâmetro
    const contarSolicitacao = (solicitacoes, tipo, status) => {
        return solicitacoes.filter((solicitacao) => solicitacao.tipo === tipo && solicitacao.status === status).length;
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
        <SecaoGenerio titulo="Informações">
            <SecaoInfoStyle>
                <div className="container">
                    <div className="tipo">
                        {solicitacoes[index].tipo}
                    </div>

                    <div className="info">
                        <div className="num">
                            <span>{solicitacoes[index].aberto}</span>
                            <div id="circulo-laranja"></div>
                            Pedidos Abertos
                        </div>
                        <div className="num">
                            <span>{solicitacoes[index].fechado}</span>
                            <div id="circulo-verde"></div>
                            Pedidos Fechados
                        </div>
                    </div>

                    <BotaoAvancarVoltar voltar={voltar} avancar={avancar} />
                </div>
            </SecaoInfoStyle>
        </SecaoGenerio>
    );
}

export default SecaoInfo;
