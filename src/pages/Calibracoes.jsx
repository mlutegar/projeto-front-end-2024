import Base from "./Base"
import dadosCalibracoes from "../data/calibracoes.json";
import Tabela from "../components/Geral/Tabela/Tabela";
import Busca from "../components/Geral/Busca/Busca";
import BotaoAvancarVoltar from "../components/Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

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


  return (
    <Base titulo="Calibrações">

        <div style={{display: "flex", flexDirection: "row-reverse"}}>
            <Busca />
        </div>

                        <div>
                            <Tabela
                                nome="Calibrações"
                                tipo="calibracao"
                                linha={
                                    <>
                                        {dadosCalibracoes.map(
                                            (calibracao) => (
                                                <tr>
                                                    <td>{calibracao.id}</td>
                                                    <td>{calibracao.nome}</td>
                                                    <td>{calibracao.usuario}</td>
                                                    <td>{calibracao.isotopo}</td>
                                                    <td>{calibracao.imagem}</td>
                                                    <td>{calibracao.date}</td>
                                                </tr>
                                            ))}
                                    </>
                                }
                            />

                    <div style={{marginTop: 50, display: "flex", justifyContent: "center"}}>
                            <BotaoAvancarVoltar/>
                            </div>
                        </div>
                    
                  
    </Base>
  )
}

export default Calibracoes