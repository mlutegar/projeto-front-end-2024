import { useEffect, useState } from "react";
import Base from "./Base"
import Tabela from "../components/Geral/Tabela/Tabela";
import dadosSolicitacoes from "../data/solicitacoes.json";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import Busca from "../components/Geral/Busca/Busca";
import {Link, Route} from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import {BsChevronDown, BsCloudDownloadFill} from "react-icons/bs";

const Atletas = () => {

    // Array com as possíveis opções da filtragem
    const tipos = [
        "Clinic Doscimetries",
        "Preclinic Doscimetries",
        "Radiosynoviorthesis",
        "Segmentation"
    ]

    // Array com os nomes das colunas da tabela
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
    ]

    // Array com os nomes dos status das solicitações
    const status = [
        "Pendente",
        "Em andamento",
        "Concluído"
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

    // Criação de um estado para armazenar o tipo de consulta
    const [tipoConsulta, setTipoConsulta] = useState(tipos)

    // Criação de um estado para armazenar as solicitações
    const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);

    // Criação de um estado que define a opção de busca
    const [opcao, setOpcao] = useState(colunas[0])

    // Criação de um estado que define a opção de busca de status
    const [opcaoStatus, setOpcaoStatus] = useState("")

    // Função que adiciona o filtro
    const adicionarTipoConsulta = (tipo) => {
        if(!tipoConsulta.includes(tipo)){
            setTipoConsulta([...tipoConsulta, tipo])
        } else {
            setTipoConsulta(tipoConsulta.filter((ele) => ele !== tipo))
        }
    }

    useEffect(() => {
        filtrar();
    }, [tipoConsulta]);

    // Filtragem dos dados a partir do tipo de consulta
    const filtrar = () => {
        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => tipoConsulta.includes(ele.tipo)
        ));
    }

    const alterarOpcao = (index) => {
        console.log("opção alterada")
        setOpcaoStatus("")
        setSolicitacoes(dadosSolicitacoes)
        setOpcao(colunas[index])
    }

    const alterarOpcaoStatus = (index) => {
        console.log("opção alterada")
        setOpcaoStatus(status[index])

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
    }

    const pesquisar = (e) => {
        let i = colunas.indexOf(opcao)
        if (e !== "") {
            setSolicitacoes(solicitacoes.filter(
                (ele) => String(ele[propriedades[i]]).includes(e)
            ));
        } else {
            filtrar()
        }
    }


    // uploadArquivo: função que faz o usuário selecionar um arquivo para ser upado
    const uploadArquivo = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.click();
    }

    // baixarArquivo: função que baixa um arquivo a partir de um link e o salva no computador do usuário assim que o botão é clicado
    // parametros: link : string - link do arquivo a ser baixado
    const baixarArquivo = (link) => {
        fetch(link)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = link.split("/").pop();
                    a.click();
                });
            });
    }

  return (
      <Base titulo="Serviços">
          <div style={{display: 'flex', justifyContent: "space-between", marginBottom: 25, marginTop:30}}>
              <div style={{display: 'flex', gap: 10}}>
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

          <div style={{display: 'flex', flexDirection: "row-reverse", marginBottom: 50}}>
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

          <Tabela
              tipo="servico"
              head={
    <>
                      <th>ID</th>
                      <th>Código</th>
                      <th>Nome da Análise</th>
                      <th>Usuário</th>
                      <th>Atividade Injetada</th>
                      <th>Calibração</th>
                      <th>
                          Status
                      {/*Um botão que coloca as solicitações em ordem alfabética*/}
                        <button
                            onClick={() => setSolicitacoes(solicitacoes.sort((a, b) => a.status.localeCompare(b.status)))}
                            style={{color:"white"}}
                        >
                            <BsChevronDown />
                        </button>
                      </th>
                      <th>Imagem do Paciente</th>
                      <th>Relatório</th>
                      <th>Criado em</th>
                      <th>Tipo</th>
                  </>
              }
            linha={
                <>

          {solicitacoes.map(
              (solicitacao, index) => (
                  <tr key={index}>
                      <td><Link to={"/servico/" + solicitacao.id}>{solicitacao.id}</Link></td>
                      <td>{solicitacao.codigo}</td>
                      <td>{solicitacao.analise}</td>
                      <td>{solicitacao.cliente}</td>
                      <td>{solicitacao.atividade}</td>
                      <td>
                          {solicitacao.calibracao}
                          <button
                              onClick={() => baixarArquivo(solicitacao.imagem)}
                          >
                              <BsCloudDownloadFill />
                          </button>
                      </td>
                            {solicitacao.status === "Pendente" ? (
                                <td className="nao-visto">
                                    {solicitacao.status}
                                </td>
                            ) : solicitacao.status === "Em andamento" ? (
                                <td className="andamento">
                                    {solicitacao.status}
                                </td>
                            ) : solicitacao.status === "Concluído" ? (
                                <td className="realizado">
                                    {solicitacao.status}
                                </td>
                            ) : (
                                solicitacao.status
                            )}
                      <td>
                          {solicitacao.imagem}
                          <button onClick={() => baixarArquivo(solicitacao.imagem)}><BsCloudDownloadFill /></button>
                      </td>
                      <td>{solicitacao.relatorio}</td>
                      <td>{solicitacao.date}</td>
                      <td>{solicitacao.tipo}</td>
                  </tr>
              ))}

                </>
        }/>

      </Base>
  )
}

export default Atletas;