import { SecaoSolicitacaoStyle } from "./Style";

import Secao from "../../Geral/Secoes/Secao/Secao";
import {useState} from "react";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

function SecaoSolicitacao(props) {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const itemsPerPage = 5;
    const totalItems = props.solicitacoes.length;

    const avancar = () => {
        if (currentStartIndex + itemsPerPage < totalItems) {
            setCurrentStartIndex(currentStartIndex + itemsPerPage);
        }
    }

    const voltar = () => {
        if (currentStartIndex > 0) {
            setCurrentStartIndex(currentStartIndex - itemsPerPage);
        }
    }


    return <Secao nome="Últimas Solicitações"
                  pai={"/servicos"}
                  info="Aqui você pode visualizar as últimas solicitações realizadas no sistema."
                  navbar={
                    <SecaoSolicitacaoStyle>
                        <div className="filtro">
                        {props.strings.map(props.callbackfn)}
                        </div>
                    </SecaoSolicitacaoStyle>
                  }
                  pagina={true}
                  conteudo={
                      <SecaoSolicitacaoStyle>
                          {props.solicitacoes.slice(currentStartIndex, currentStartIndex + itemsPerPage).map(
                              props.prop3
                          )}
                      </SecaoSolicitacaoStyle>
                  }
                  footer={
                        <>
                        <BotaoAvancarVoltar
                            avancar={avancar}
                            voltar={voltar}
                        />
                        </>
                  }
    />;
}

export default SecaoSolicitacao;