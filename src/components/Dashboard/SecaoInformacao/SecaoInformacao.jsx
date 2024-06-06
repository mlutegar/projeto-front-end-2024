import { SecaoInfoStyle } from "./Style";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import { useState } from "react";
import Secao from "../../Geral/Secoes/Secao/Secao";
import InfoEspecifico from "../Cards/InfoEspecifico/InfoEspecifico";
import InfoGeral from "../Cards/InfoGeral/InfoGeral";

const SecaoInformacao = (props) => {
    const contarSolicitacao = (solicitacoes, tipo, status) => {
        return solicitacoes.filter((solicitacao) => solicitacao.tipo === tipo && solicitacao.status === status).length;
    }

    const contarSolicitacaoTotal = (solicitacoes, status) => {
        return solicitacoes.filter((solicitacao) => solicitacao.status === status).length;
    }

    const solicitacoes = [
        {
            tipo: "Dosimetrias Clínicas",
            aberto: contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Pendente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Em andamento") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Imagens de pacientes erradas, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Imagens de calibração errada, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Calculo em processo") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Não iniciado"),
            fechado: contarSolicitacao(props.solicitacoes, "Dosimetrias Clínicas", "Concluído")
        },
        {
            tipo: "Dosimetrias Pré-clínicas",
            aberto: contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Pendente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Em andamento") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Imagens de pacientes erradas, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Imagens de calibração errada, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Calculo em processo") +
                contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Não iniciado"),
            fechado: contarSolicitacao(props.solicitacoes, "Dosimetrias Pré-clínicas", "Concluído")
        },
        {
            tipo: "Radiosinoviortese",
            aberto: contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Pendente") +
                contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Em andamento") +
                contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Imagens de pacientes erradas, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Imagens de calibração errada, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Calculo em processo") +
                contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Não iniciado"),
            fechado: contarSolicitacao(props.solicitacoes, "Radiosinoviortese", "Concluído")
        },
        {
            tipo: "Segmentação",
            aberto: contarSolicitacao(props.solicitacoes, "Segmentação", "Pendente") +
                contarSolicitacao(props.solicitacoes, "Segmentação", "Em andamento") +
                contarSolicitacao(props.solicitacoes, "Segmentação", "Imagens de pacientes erradas, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Segmentação", "Imagens de calibração errada, enviar novamente") +
                contarSolicitacao(props.solicitacoes, "Segmentação", "Calculo em processo") +
                contarSolicitacao(props.solicitacoes, "Segmentação", "Não iniciado"),
            fechado: contarSolicitacao(props.solicitacoes, "Segmentação", "Concluído")
        }
    ];

    const solicitacoesTotal = [
        {
            aberto: contarSolicitacaoTotal(props.solicitacoes, "Pendente") +
                contarSolicitacaoTotal(props.solicitacoes, "Em andamento") +
                contarSolicitacaoTotal(props.solicitacoes, "Imagens de pacientes erradas, enviar novamente") +
                contarSolicitacaoTotal(props.solicitacoes, "Imagens de calibração errada, enviar novamente") +
                contarSolicitacaoTotal(props.solicitacoes, "Calculo em processo") +
                contarSolicitacaoTotal(props.solicitacoes, "Não iniciado"),
            fechado: contarSolicitacaoTotal(props.solicitacoes, "Concluído")
        }
    ];

    const [index, setIndex] = useState(0);

    const avancar = () => {
        setIndex((prevIndex) => (prevIndex + 1) % solicitacoes.length);
    };

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
