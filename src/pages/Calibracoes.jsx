import Base from "./Base";
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Geral/Tabela/Tabela";
import Busca from "../components/Geral/Busca/Busca";
import BotaoAvancarVoltar from "../components/Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import { TabelaCalibracoesStyle } from "../components/Calibracoes/Style";
import { BsArrowUpRightCircle, BsCloudDownloadFill } from "react-icons/bs";
import { useState, useEffect } from "react"; // Importa useEffect
import Cartao, { CartaoServicosStyle } from "../components/Cartao";
import { Link } from "react-router-dom";

const Calibracoes = () => {
    const colunas = ["ID", "Nome da Calibracao", "Usuário", "Isotopo", "Imagem da Calibracao", "Criado em"];
    const propriedades = ["id", "nome", "usuario", "isotopo", "imagem", "date"]; // Ajusta as propriedades

    const baixarArquivo = (link) => { /* ... (função inalterada) ... */ };

    const [calibracoes, setCalibracoes] = useState(dadosCalibracoes);
    const [currentPage, setCurrentPage] = useState(0);
    const [opcao, setOpcao] = useState(colunas[0]); // Estado para a opção de busca
    const itemsPerPage = 20;

    // Efeito para filtrar ao carregar ou mudar a opção de busca
    useEffect(() => {
        filtrar();
    }, [opcao]);

    const filtrar = () => {
        setCalibracoes(dadosCalibracoes); // Reinicia a lista antes de filtrar
    };

    const pesquisar = (e) => {
        let i = colunas.indexOf(opcao);
        if (e !== "") {
            setCalibracoes(calibracoes.filter(
                (ele) => String(ele[propriedades[i]]).toLowerCase().includes(e.toLowerCase())
            ));
        } else {
            filtrar(); // Se a busca estiver vazia, mostra todas as calibrações
        }
    };

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
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <Busca
                  opcoes={
                      <>
                          {colunas.map((coluna, index) => (
                              <button key={index} onClick={() => setOpcao(colunas[index])}>{coluna}</button>
                          ))}
                      </>
                  }
                  opcao={opcao}
                  onChance={(e) => pesquisar(e.target.value)}
              />
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