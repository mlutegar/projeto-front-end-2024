import { useEffect, useState } from "react";
import Base from "./Base";
import Tabela from "../components/Geral/Tabela/Tabela";
import dadosSolicitacoes from "../data/solicitacoes.json";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import Busca from "../components/Geral/Busca/Busca";
import { Link } from "react-router-dom";
import {
    AiFillDelete,
} from "react-icons/ai";
import {
    BsArrowUpRightCircle,
    BsCheckCircleFill,
    BsChevronDown,
    BsCloudDownloadFill,
    BsCloudUploadFill
} from "react-icons/bs";
import BotaoAvancarVoltar from "../components/Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import {TabelaServicosStyle} from "../components/Servicos/Style";
import {uploadArquivo} from "../utils/TabelaUtils";
import Cartao, {CartaoServicosStyle} from "../components/Cartao";
import SolicitacaoCard from "../components/SolicitacaoCard/SolicitacaoCard";
import SolicitacaoDetalhadaCard from "../components/SolicitacaoCard/SolicitacaoDetalhadaCard/SolicitacaoDetalhadaCard";
import SolicitacoesCardList from "../components/SolicitacoesCardList/SolicitacesCardList";
import SolicitacoesTabela from "../components/SolicitacoesTabela/SolicitacoesTabela";

const Servicos = () => {
    const tipos = [
        "Dosimetrias Clínicas",
        "Dosimetrias Pré-clínicas",
        "Radiosinoviortese",
        "Segmentação"
    ];

    const colunas = [
        "ID",
        "Código",
        "Nome da Análise",
        "Usuário",
        "Atividade Injetada",
        "Calibração",
        "Status",
        "Imagem do Paciente",
        "Relatório",
        "Criado em",
        "Tipo"
    ];

    const status = [
        "Pendente",
        "Em andamento",
        "Concluído",
        "Não iniciado",
        "Imagens de pacientes erradas, enviar novamente",
        "Imagens de calibração errada, enviar novamente",
        "Calculo em processo"
    ];

    const propriedades = [
        "id",
        "codigo",
        "analise",
        "cliente",
        "atividade",
        "calibracao",
        "status",
        "imagem",
        "relatorio",
        "date",
        "tipo"
    ];

    const [tipoConsulta, setTipoConsulta] = useState(tipos);
    const [solicitacoes, setSolicitacoes] = useState(dadosSolicitacoes);
    const [boolOrdenado, setBoolOrdenado] = useState(false);
    const [boolOrdenadoCrescente, setBoolOrdenadoCrescente] = useState(false);
    const [opcao, setOpcao] = useState(colunas[0]);
    const [opcaoStatus, setOpcaoStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        filtrar();
        if (!boolOrdenado) {
            ordenarStatus();
            setBoolOrdenado(true);
        }

    }, [tipoConsulta]);

    const filtrar = () => {
        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => tipoConsulta.includes(ele.tipo)
        ));
    };

    const alterarOpcao = (index) => {
        setOpcaoStatus("");
        setSolicitacoes(dadosSolicitacoes);
        setOpcao(colunas[index]);
    };

    const alterarOpcaoStatus = (index) => {
        setOpcaoStatus(status[index]);

        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => ele.status === status[index]
        ));
    };

    const pesquisar = (e) => {
        let i = colunas.indexOf(opcao);
        if (e !== "") {
            setSolicitacoes(solicitacoes.filter(
                (ele) => String(ele[propriedades[i]]).toLowerCase().includes(e.toLowerCase())
            ));
        } else {
            filtrar();
        }
    };

    const concluirSolicitacao = (id) => {
        setSolicitacoes(prevSolicitacoes =>
            prevSolicitacoes.map(solicitacao =>
                solicitacao.id === id ? { ...solicitacao, status: "Concluído" } : solicitacao
            )
        );
    };

    const baixarArquivo = (link) => {
        fetch(link)
            .then(response => response.blob())
            .then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = link.split("/").pop();
                a.click();
            });
    };

    const ordenarStatusDecrescente = () => {
        const solicitacoesOrdenadas = [...solicitacoes].sort((a, b) => a.status.localeCompare(b.status));
        setSolicitacoes(solicitacoesOrdenadas);
    }

    const ordenarStatusCrescente = () => {
        const solicitacoesOrdenadas = [...solicitacoes].sort((b, a) => a.status.localeCompare(b.status));
        setSolicitacoes(solicitacoesOrdenadas);
    };

    const ordenarStatus = () => {
        if (!boolOrdenadoCrescente) {
            ordenarStatusCrescente();
            setBoolOrdenadoCrescente(true);
        } else {
            ordenarStatusDecrescente();
            setBoolOrdenadoCrescente(false);
        }
    }


    const avancar = () => {
        if ((currentPage + 1) * itemsPerPage < solicitacoes.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const voltar = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const adicionarTipoConsulta = (tipo) => {
        if(!tipoConsulta.includes(tipo)){
            setTipoConsulta([...tipoConsulta, tipo])
        } else {
            setTipoConsulta(tipoConsulta.filter((ele) => ele !== tipo))
        }
    }

    const deletarArquivo = (id) => {
        localStorage.removeItem(id);
        setSolicitacoes(prevSolicitacoes =>
            prevSolicitacoes.map(solicitacao =>
                solicitacao.id === id ? { ...solicitacao, relatorio: "-" } : solicitacao
            )
        );
    }

    const displayedSolicitacoes = solicitacoes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);



    return (
        <Base titulo="Serviços">
            <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: 25, marginTop: 30 }}>
                <div style={{ display: 'flex', gap: 10, flexWrap: "wrap" }}>
                    {tipos.map((tipo, indexo) => (
                        <Botao
                            key={indexo}
                            isActive={tipoConsulta.includes(tipo)}
                            onClick={() => adicionarTipoConsulta(tipo)}
                            text={tipo}
                        />
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: "row-reverse", marginBottom: 50 }}>
                <Busca
                    opcoes={
                        <>
                            {colunas.map((coluna, index) => (
                                <button key={index} onClick={() => alterarOpcao(colunas.indexOf(coluna))}>{coluna}</button>
                            ))}
                        </>
                    }
                    opcoesStatus={
                        <>
                            {status.map((opcao, index) => (
                                <button key={index} onClick={() => alterarOpcaoStatus(status.indexOf(opcao))}>{opcao}</button>
                            ))}
                        </>
                    }
                    opcao={opcao}
                    opcaoStatus={opcaoStatus}
                    onClick={filtrar}
                    onChance={(e) => pesquisar(e.target.value)}
                />
            </div>


            <TabelaServicosStyle>
                <SolicitacoesTabela
                    displayedSolicitacoes={displayedSolicitacoes}
                    ordenarStatus={ordenarStatus}
                    baixarArquivo={baixarArquivo}
                    concluirSolicitacao={concluirSolicitacao}
                    uploadArquivo={uploadArquivo}
                    deletarArquivo={deletarArquivo}
                    setSolicitacoes={setSolicitacoes}
                />

            </TabelaServicosStyle>
            <SolicitacoesCardList displayedSolicitacoes={displayedSolicitacoes} />
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <BotaoAvancarVoltar
                    avancar={avancar}
                    voltar={voltar}
                />
            </div>
        </Base>
    );
}

export default Servicos;
