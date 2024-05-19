import { SecaoSolicitacaoStyle } from "./Style";

import Secao from "../../Geral/Secoes/Secao/Secao";
import {useState} from "react";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

function SecaoComponente(props) {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const itemsPerPage = 4;
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
                  navbar={
                      props.strings.map(props.callbackfn)
                  }
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

export default SecaoComponente;