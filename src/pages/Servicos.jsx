import { useEffect, useState } from "react";
import Base from "./Base";
import Tabela from "../components/Geral/Tabela/Tabela";
import dadosSolicitacoes from "../data/solicitacoes.json";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import Busca from "../components/Geral/Busca/Busca";
import { Link } from "react-router-dom";
import {
    AiFillCheckCircle,
    AiFillDelete,
    AiOutlineCloudDownload,
    AiOutlineCloudUpload,
    AiOutlineDownload
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
        "Concluído"
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
    const [opcao, setOpcao] = useState(colunas[0]);
    const [opcaoStatus, setOpcaoStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        filtrar();
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

        if (status[index] === "Pendente") {
            setSolicitacoes(dadosSolicitacoes.filter(
                (ele) => ele.status === "Pendente"
            ));
        }

        if (status[index] === "Em andamento") {
            setSolicitacoes(dadosSolicitacoes.filter(
                (ele) => ele.status === "Em andamento"
            ));
        }

        if (status[index] === "Concluído") {
            setSolicitacoes(dadosSolicitacoes.filter(
                (ele) => ele.status === "Concluído"
            ));
        }
    };

    const pesquisar = (e) => {
        let i = colunas.indexOf(opcao);
        if (e !== "") {
            setSolicitacoes(solicitacoes.filter(
                (ele) => String(ele[propriedades[i]]).includes(e)
            ));
        } else {
            filtrar();
        }
    };

    const uploadArquivo = (id) => {
        const input = document.createElement("input");
        input.type = "file";
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64 = e.target.result;
                localStorage.setItem(id, base64);
                alert("Arquivo salvo no localStorage!");
            };

            reader.readAsDataURL(file);


            atualizarNomeArquivo(id);
            atualizarStatus(id);

                    };
        input.click();
    };

    // Função que atualiza o nome do relatório na coluna "Relatório" com o id passado
    const atualizarNomeArquivo = (id) => {
        setSolicitacoes(prevSolicitacoes =>
            prevSolicitacoes.map(solicitacao =>
                solicitacao.id === id ? { ...solicitacao, relatorio: `relatorio_${id}.pdf` } : solicitacao
            )
        );
    };

    // Função que atualiza o status da solicitação com o id passado para "Em andamento"
    const atualizarStatus = (id) => {
        setSolicitacoes(prevSolicitacoes =>
            prevSolicitacoes.map(solicitacao =>
                solicitacao.id === id ? { ...solicitacao, status: "Em andamento" } : solicitacao
            )
        );
    };

    // Função que conclui a solicitação com o id passado
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

    const ordenarStatus = () => {
        const solicitacoesOrdenadas = [...solicitacoes].sort((b, a) => a.status.localeCompare(b.status));
        setSolicitacoes(solicitacoesOrdenadas);
    };

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

    // Função que adiciona o filtro
    const adicionarTipoConsulta = (tipo) => {
        if(!tipoConsulta.includes(tipo)){
            setTipoConsulta([...tipoConsulta, tipo])
        } else {
            setTipoConsulta(tipoConsulta.filter((ele) => ele !== tipo))
        }
    }

    // Função que deleta o arquivo salvo no localStorage com o id passado
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
                <Tabela
                    tipo="servico"
                    head={
                        <>
                            <th>Acessar</th>
                            <th>Código</th>
                            <th>Nome da Análise</th>
                            <th>Usuário</th>
                            <th>Atividade Injetada</th>
                            <th>Calibração</th>
                            <th>
                                <div className="status">
                                    Status
                                    <button
                                        onClick={ordenarStatus}
                                        style={{ color: "white" }}
                                    >
                                        <BsChevronDown />
                                    </button>
                                </div>
                            </th>
                            <th>Imagem do Paciente</th>
                            <th>Relatório</th>
                            <th>Criado em</th>
                            <th>Tipo</th>
                        </>
                    }
                    linha={
                        <>
                            {displayedSolicitacoes.map(
                                (solicitacao, index) => (
                                    <tr key={index}>
                                        <td><Link to={"/servico/" + solicitacao.id}>
                                            <button>
                                                <BsArrowUpRightCircle />
                                            </button>
                                        </Link></td>
                                        <td>{solicitacao.codigo}</td>
                                        <td>{solicitacao.analise}</td>
                                        <td>{solicitacao.cliente}</td>
                                        <td>{solicitacao.atividade}</td>
                                        <td>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 20,
                                                justifyContent: "flex-end"
                                            }}>
                                                <div className="ocultar">
                                                    {solicitacao.calibracao}
                                                </div>
                                                    <button
                                                        onClick={() => baixarArquivo(solicitacao.imagem)}
                                                    >
                                                        <BsCloudDownloadFill/>
                                                    </button>
                                                </div>
                                        </td>
                                        {solicitacao.status === "Pendente" ? (
                                            <td className="nao-visto">
                                                <div className="status-botao">
                                                    {solicitacao.status}
                                                </div>
                                            </td>
                                        ) : solicitacao.status === "Em andamento" ? (
                                            <td className="andamento">
                                                <div className="status-botao">
                                                    {solicitacao.status}
                                                    {solicitacao.relatorio === "-" ? (<></>) : (
                                                        <button
                                                            onClick={() => concluirSolicitacao(solicitacao.id)}
                                                        >
                                                            <BsCheckCircleFill/>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        ) : solicitacao.status === "Concluído" ? (
                                            <td className="realizado">
                                                <div className="status-botao">
                                                    {solicitacao.status}
                                                </div>

                                            </td>
                                        ) : (
                                            solicitacao.status
                                        )}
                                        <td>

                                                < div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 20,
                                                justifyContent: "flex-end"
                                            }}>
                                                    <div className="ocultar">
                                                        {solicitacao.imagem}
                                                    </div>
                                                <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                        <BsCloudDownloadFill/></button>
                                            </div>
                                        </td>
                                        <td>
                                            {solicitacao.relatorio === "-" ? (
                                                <div style={{display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end"}}>
                                                    <div className="ocultar">
                                                    {solicitacao.relatorio}
                                                    </div>
                                                    <button onClick={() => uploadArquivo(solicitacao.id)}>
                                                            <div style={{
                                                                display: "relative", left: 10
                                                            }}>
                                                                <BsCloudUploadFill />
                                                            </div>
                                                    </button>
                                                </div>
                                            ) : solicitacao.status === "Em andamento" ? (
                                                    <div style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 20,
                                                        justifyContent: "flex-end"
                                                    }}>
                                                            <div className="ocultar">
                                                        {solicitacao.relatorio}
                                                            </div>
                                                        <button onClick={() => deletarArquivo(solicitacao.id)}>
                                                            <AiFillDelete /></button>
                                                    </div>) : (
                                                <div className="ocultar">
                                                    {solicitacao.relatorio}
                                                </div>)}
                                        </td>
                                        <td>{solicitacao.date}</td>
                                        <td>{solicitacao.tipo}</td>
                                    </tr>
                                )
                            )}
                        </>
                    }
                />
            </TabelaServicosStyle>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 50
            }}>
                <BotaoAvancarVoltar
                    avancar={avancar}
                    voltar={voltar}
                />
            </div>

        </Base>
    );
}

export default Servicos;
