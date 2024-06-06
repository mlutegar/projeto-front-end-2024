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

        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => ele.status === status[index]
        ));
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
                                                <BsArrowUpRightCircle/>
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
                                        <td className={
                                            solicitacao.status === "Pendente" ? "status-pendente" :
                                                solicitacao.status === "Em andamento" ? "status-andamento" :
                                                    solicitacao.status === "Concluído" ? "status-concluido" :
                                                        solicitacao.status === "Não iniciado" ? "status-nao-iniciado" :
                                                            solicitacao.status === "Imagens de pacientes erradas, enviar novamente" ? "status-imagens-erradas" :
                                                                solicitacao.status === "Imagens de calibração errada, enviar novamente" ? "status-calibracao-errada" :
                                                                    solicitacao.status === "Calculo em processo" ? "status-calculo" : ""
                                        }>
                                            <div className="status-botao">
                                                {solicitacao.status === "Pendente" ? "Pendente" :
                                                    solicitacao.status === "Em andamento" ? "Em andamento" :
                                                        solicitacao.status === "Concluído" ? "Concluído" :
                                                            solicitacao.status === "Não iniciado" ? "Não iniciado" :
                                                                solicitacao.status === "Imagens de pacientes erradas, enviar novamente" ? "Imagens erradas" :
                                                                    solicitacao.status === "Imagens de calibração errada, enviar novamente" ? "Calibração errada" :
                                                                        solicitacao.status === "Calculo em processo" ? "Cálculo" : solicitacao.status}

                                                {solicitacao.status === "Em andamento" && solicitacao.relatorio !== "-" && (
                                                    <button onClick={() => concluirSolicitacao(solicitacao.id)}>
                                                        <BsCheckCircleFill/>
                                                    </button>
                                                )}
                                            </div>
                                        </td>

                                        <td>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 20,
                                                justifyContent: "flex-end"
                                            }}>
                                                <div className="ocultar">
                                                    {solicitacao.imagem}
                                                </div>
                                                <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                                    <BsCloudDownloadFill/>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            {solicitacao.relatorio === "-" ? (
                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 20,
                                                    justifyContent: "flex-end"
                                                }}>
                                                    <div className="ocultar">
                                                        {solicitacao.relatorio}
                                                    </div>
                                                    <button
                                                        onClick={() => uploadArquivo(solicitacao.id, setSolicitacoes)}>
                                                        <div style={{display: "relative", left: 10}}>
                                                            <BsCloudUploadFill/>
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
                                                        <AiFillDelete/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="ocultar">
                                                    {solicitacao.relatorio}
                                                </div>
                                            )}
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

            <CartaoServicosStyle>
                <Cartao
                    tipo="servico"
                    linha={
                        <>
                            {displayedSolicitacoes.map((solicitacao, index) => (
                                <div className="card" key={index}>
                                    <div className="card-header">
                                        <Link to={"/servico/" + solicitacao.id}>
                                            <button>
                                                <BsArrowUpRightCircle />
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <p><strong>Código:</strong> {solicitacao.codigo}</p>
                                        <p><strong>Nome:</strong> {solicitacao.analise}</p>
                                        <p><strong>Usuário:</strong> {solicitacao.cliente}</p>
                                        <p><strong>Status:</strong> <span className={`status ${solicitacao.status}`}>{solicitacao.status}</span></p>
                                        <div>
                                            <strong>Imagem:</strong>
                                            <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                                <BsCloudDownloadFill />
                                            </button>
                                        </div>
                                        <div>
                                            <strong>Relatório:</strong>
                                            {solicitacao.relatorio === "-" ? (
                                                <button onClick={() => uploadArquivo(solicitacao.id, setSolicitacoes)}>
                                                    <BsCloudUploadFill />
                                                </button>
                                            ) : solicitacao.status === "Em andamento" ? (
                                                <button onClick={() => deletarArquivo(solicitacao.id)}>
                                                    <AiFillDelete />
                                                </button>
                                            ) : (
                                                solicitacao.relatorio
                                            )}
                                        </div>
                                        <p><strong>Criado em:</strong> {solicitacao.date}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                />
            </CartaoServicosStyle>

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
