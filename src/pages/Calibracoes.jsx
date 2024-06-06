import Base from "./Base"
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Geral/Tabela/Tabela";
import Busca from "../components/Geral/Busca/Busca";
import BotaoAvancarVoltar from "../components/Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import {TabelaCalibracoesStyle} from "../components/Calibracoes/Style";
import {BsArrowUpRightCircle, BsCloudDownloadFill, BsCloudUploadFill} from "react-icons/bs";
import {useState} from "react";
import Cartao, {CartaoServicosStyle} from "../components/Cartao";
import {Link} from "react-router-dom";
import {uploadArquivo} from "../utils/TabelaUtils";
import {AiFillDelete} from "react-icons/ai";

const Calibracoes = () => {
    // Array com os nomes das colunas da tabela
    const colunas = [
        "ID",
        "Nome da Calibracao",
        "Usuário",
        "Isotopo",
        "Imagem da Calibracao",
        "Criado em",
    ]

    // Array com os nomes das propriedades das solicitações
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
    ]

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

    const [calibracoes, setCalibracoes] = useState(dadosCalibracoes);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;

    const avancar = () => {
        if ((currentPage + 1) * itemsPerPage < calibracoes.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const voltar = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayCalibracao = calibracoes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <Base titulo="Calibrações">

        <div style={{display: "flex", flexDirection: "row-reverse"}}>
            <Busca />
        </div>

                        <div>
                            <TabelaCalibracoesStyle>
                                <Tabela
                                    nome="Calibrações"
                                    tipo="calibracao"
                                    head={
                                        <>
                                            {colunas.map((coluna) => (
                                                <th>{coluna}</th>
                                            ))}
                                        </>
                                    }
                                    linha={
                                        <>
                                            {displayCalibracao.map(
                                                (calibracao) => (
                                                    <tr key={calibracao.id}>
                                                        <td>{calibracao.id}</td>
                                                        <td>{calibracao.nome}</td>
                                                        <td>{calibracao.usuario}</td>
                                                        <td>{calibracao.isotopo}</td>
                                                        <td>
                                                            < div style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 20,
                                                                justifyContent: "flex-end"
                                                            }}>
                                                            <div className="ocultar">
                                                                {calibracao.imagem}
                                                            </div>
                                                            <button onClick={() => baixarArquivo(solicitacao.imagem)}>
                                                                <BsCloudDownloadFill/></button>
                                                            </div>
                                                        </td>
                                                        <td>{calibracao.date}</td>
                                                    </tr>
                                                ))}
                                        </>
                                    }
                                />
                            </TabelaCalibracoesStyle>

                            <CartaoServicosStyle>
                                <Cartao
                                    tipo="servico"
                                    linha={
                                        <>
                                            {displayCalibracao.map((calibracao, index) => (
                                                <div className="card" key={index}>
                                                    <div className="card-header">
                                                        <Link to={"/servico/" + calibracao.id}>
                                                            <button>
                                                                <BsArrowUpRightCircle />
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div className="card-body">
                                                        <p><strong>Nome:</strong> {calibracao.nome}</p>
                                                        <p><strong>Usuário:</strong> {calibracao.usuario}</p>
                                                        <p><strong>Isotopo:</strong> {calibracao.isotopo}</p>
                                                        <div>
                                                            <strong>Imagem:</strong>
                                                            <button onClick={() => baixarArquivo(calibracao.imagem)}>
                                                                <BsCloudDownloadFill/>
                                                            </button>
                                                        </div>
                                                        <p><strong>Criado em:</strong> {calibracao.date}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    }
                                />
                            </CartaoServicosStyle>

                    <div style={{marginTop: 50, display: "flex", justifyContent: "center"}}>
                            <BotaoAvancarVoltar/>
                            </div>
                        </div>
                    
                  
    </Base>
  )
}

export default Calibracoes