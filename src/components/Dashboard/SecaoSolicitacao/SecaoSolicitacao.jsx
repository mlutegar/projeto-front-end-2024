import { SecaoSolicitacaoStyle } from "./Style";

import Secao from "../../Secao/Secao";
import {useState} from "react";

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


    return <Secao nome="Solicitações"
                  pai={"/servicos"}
                  navbar={
                      props.strings.map(props.callbackfn)
                  }
                  conteudo={
                      <SecaoSolicitacaoStyle>

                          <div>
                              <button className="btn" onClick={voltar}>
                                  {"<"}
                              </button>
                          </div>

                          {props.solicitacoes.slice(currentStartIndex, currentStartIndex + itemsPerPage).map(
                              props.prop3
                          )}

                          <div>
                              <button className="btn" onClick={avancar}>
                                  {">"}
                              </button>
                          </div>
                      </SecaoSolicitacaoStyle>
                  }
    />;
}

export default SecaoComponente;