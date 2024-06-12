import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsArrowUpRightCircle, BsCloudDownloadFill, BsCheckCircleFill, BsCloudUploadFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Tabela from "../Geral/Tabela/Tabela";

const SolicitacoesTabela = ({ displayedSolicitacoes, ordenarStatus, baixarArquivo, concluirSolicitacao, uploadArquivo, deletarArquivo, setSolicitacoes }) => {
    return (
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
                            <button onClick={ordenarStatus} style={{ color: "white" }}>
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
                    {displayedSolicitacoes.map((solicitacao, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={"/servico/" + solicitacao.id}>
                                    <button>
                                        <BsArrowUpRightCircle />
                                    </button>
                                </Link>
                            </td>
                            <td>{solicitacao.codigo}</td>
                            <td>{solicitacao.analise}</td>
                            <td>{solicitacao.cliente}</td>
                            <td>{solicitacao.atividade}</td>
                            <td>
                                <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end" }}>
                                    <div className="ocultar">
                                        {solicitacao.calibracao}
                                    </div>
                                    <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                        <BsCloudDownloadFill />
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
                                            <BsCheckCircleFill />
                                        </button>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end" }}>
                                    <div className="ocultar">
                                        {solicitacao.imagem}
                                    </div>
                                    <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                        <BsCloudDownloadFill />
                                    </button>
                                </div>
                            </td>
                            <td>
                                {solicitacao.relatorio === "-" ? (
                                    <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end" }}>
                                        <div className="ocultar">
                                            {solicitacao.relatorio}
                                        </div>
                                        <button onClick={() => uploadArquivo(solicitacao.id, setSolicitacoes)}>
                                            <div style={{ position: "relative", left: 10 }}>
                                                <BsCloudUploadFill />
                                            </div>
                                        </button>
                                    </div>
                                ) : solicitacao.status === "Em andamento" ? (
                                    <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end" }}>
                                        <div className="ocultar">
                                            {solicitacao.relatorio}
                                        </div>
                                        <button onClick={() => deletarArquivo(solicitacao.id)}>
                                            <AiFillDelete />
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
                    ))}
                </>
            }
        />
    );
};

export default SolicitacoesTabela;
