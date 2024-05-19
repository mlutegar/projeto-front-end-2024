import Base from "./Base"
import Secao from "../components/Geral/Secoes/Secao/Secao";
import SolicitacaoCard from "../components/Dashboard/Cards/SolicitacaoCard/SolicitacaoCard";
import dadosSolicitacoes from "../data/solicitacoes.json";
import dadosCalibracoes from "../data/calibracoes.json";
import dadosAtualizacoes from "../data/atualizacoes.json";
import Tabela from "../components/Geral/Tabela/Tabela";
import {useEffect, useState} from "react";
import Botao from "../components/Geral/Botoes/Botao/Botao";
import DashboadLayout from "../components/Dashboard/DashboadLayout/DashboadLayout";
import AtualizacaoCard from "../components/Dashboard/Cards/AtualizacaoCard/AtualizacaoCard";
import SecaoInformacao from "../components/Dashboard/SecaoInformacao/SecaoInformacao";
import BotaoAvancarVoltar from "../components/Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import SecaoCalibracao from "../components/Dashboard/SecaoCalibracao/SecaoCalibracao";
import SecaoAtualizacao from "../components/Dashboard/SecaoAtualizacao/SecaoAtualizacao";
import SecaoComponente from "../components/Dashboard/SecaoSolicitacao/SecaoSolicitacao";
import {BsCloudDownloadFill} from "react-icons/bs";

const Dashboard = () => {
    // Array com as possíveis opções da filtragem
    const tipos = [
        "Clinic Doscimetries",
        "Preclinic Doscimetries",
        "Radiosynoviorthesis",
        "Segmentation"
    ]

    // Criação de um estado para armazenar o tipo de consulta
    const [tipoConsulta, setTipoConsulta] = useState(tipos)

    // solicitacoes: estado para armazenar as solicitações
    const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);

    // atualizacoes: estado para armazenar as atualizações
    const [atualizacoes, setAtualizacoes] = useState(dadosAtualizacoes);

    // Função que adiciona o filtro
    const adicionarTipoConsulta = (tipo) => {
        if(!tipoConsulta.includes(tipo)){
            setTipoConsulta([...tipoConsulta, tipo])
        } else {
            setTipoConsulta(tipoConsulta.filter((ele) => ele !== tipo))
        }
    }

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

    useEffect(() => {
        filtrarSolicitacao();
    }, [tipoConsulta]);

    // filtrarSolicitacao: Filtragem dos dados a partir do tipo de consulta filtrada selecionada
    const filtrarSolicitacao = () => {
        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => tipoConsulta.includes(ele.tipo)
        ));
    }

  return (
      <Base titulo="Dashboard">
          <DashboadLayout
              solicitacao={
                  <SecaoComponente strings={tipos} callbackfn={(tipo, indexo) => (
                      <Botao
                          key={indexo}
                          isActive={tipoConsulta.includes(tipo)}
                          onClick={() => adicionarTipoConsulta(tipo)}
                          text={tipo}
                      />
                  )} solicitacoes={solicitacoes} prop3={(solicitacao) => (
                      <SolicitacaoCard
                          key={solicitacao.id}
                          id={solicitacao.id}
                          cliente={solicitacao.cliente}
                          data={solicitacao.date}
                          link={"/servico/" + solicitacao.id}
                      />
                  )}/>
              }
              calibracao={
                  <SecaoCalibracao prop={(calibracao) => (
                      <tr key={calibracao.id}>
                          <td>{calibracao.id}</td>
                          <td>{calibracao.nome}</td>
                          <td>{calibracao.usuario}</td>
                          <td>{calibracao.isotopo}</td>
                          <td>{calibracao.date}</td>
                          <td>
                              <button onClick={() => baixarArquivo(calibracao.imagem)}><BsCloudDownloadFill/></button>
                          </td>
                      </tr>
                  )}/>
              }
              informacao={
                  <SecaoInformacao
                      solicitacoes={solicitacoes}
                  />
              }
              atualizacao={
                  <SecaoAtualizacao atualizacoes={atualizacoes} prop1={(atualizacao) => (
                      <AtualizacaoCard
                          id={atualizacao.id}
                          acao={atualizacao.acao}
                          tempo={atualizacao.tempo}
                      />
                  )}/>
              }
          />
      </Base>
  )
}

export default Dashboard