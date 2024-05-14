import Base from "./Base"
import Secao from "../components/Secao/Secao";
import SolicitacaoCard from "../components/SolicitacaoCard/SolicitacaoCard";
import dadosSolicitacoes from "../data/solicitacoes.json";
import dadosCalibracoes from "../data/calibracoes.json";
import dadosAtualizacoes from "../data/atualizacoes.json";
import Tabela from "../components/Tabela/Tabela";
import {useEffect, useState} from "react";
import Botao from "../components/Botao/Botao";
import DashboadLayout from "../components/Dashboard/DashboadLayout/DashboadLayout";
import AtualizacaoCard from "../components/AtualizacaoCard/AtualizacaoCard";
import SecaoInformacao from "../components/Dashboard/SecaoInformacao/SecaoInformacao";
import BotaoAvancarVoltar from "../components/BotaoAvancarVoltar/BotaoAvancarVoltar";
import SecaoCalibracao from "../components/Dashboard/SecaoCalibracao/SecaoCalibracao";
import SecaoAtualizacao from "../components/Dashboard/SecaoAtualizacao/SecaoAtualizacao";

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
                  <Secao nome="Solicitações"
                         pai={"/servicos"}
                         navbar={
                             tipos.map((tipo, indexo) => (
                                 <Botao
                                     key={indexo}
                                     isActive={tipoConsulta.includes(tipo)}
                                     onClick={() => adicionarTipoConsulta(tipo)}
                                     text={tipo}
                                 />
                             ))
                         }
                         conteudo={
                             <>
                                 {solicitacoes.slice(0, 5).map(
                                     (solicitacao) => (
                                         <SolicitacaoCard
                                             key={solicitacao.id}
                                             id={solicitacao.id}
                                             cliente={solicitacao.cliente}
                                             data={solicitacao.date}
                                             link={"/servico/" + solicitacao.id}
                                         />
                                     )
                                 )}
                             </>
                         }
                  />
              }
              calibracao={
                  <SecaoCalibracao prop={(calibracao) => (
                      <tr key={calibracao.id}>
                          <td>{calibracao.id}</td>
                          <td>{calibracao.nome}</td>
                          <td>{calibracao.usuario}</td>
                          <td>{calibracao.isotopo}</td>
                          <td>{calibracao.imagem}</td>
                          <td>{calibracao.date}</td>
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
                          icone={
                              <a href={"/servico/" + atualizacao.id}> a </a>

                          }
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