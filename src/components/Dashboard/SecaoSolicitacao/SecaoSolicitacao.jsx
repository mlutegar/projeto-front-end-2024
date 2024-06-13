import { SecaoSolicitacaoStyle } from "./Style";

import Secao from "../../Geral/Secoes/Secao/Secao";
import {useEffect, useState} from "react";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

function SecaoSolicitacao(props) {

    const ITENS_POR_PAGINA_AMPLO = 5; // Constante para telas amplas
    const ITENS_POR_PAGINA_NORMAL = 4; // Constante para telas normais

    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(ITENS_POR_PAGINA_NORMAL); // Estado para controlar a quantidade de itens
    const totalItems = props.solicitacoes.length;

    const avancar = () => {
        if (currentStartIndex + itemsPerPage < props.solicitacoes.length) {
            setCurrentStartIndex(currentStartIndex + itemsPerPage);
        }
    };

    const voltar = () => {
        if (currentStartIndex > 0) {
            setCurrentStartIndex(currentStartIndex - itemsPerPage);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth > 1700 ? ITENS_POR_PAGINA_AMPLO : ITENS_POR_PAGINA_NORMAL);
        };

        handleResize(); // Executa na primeira renderização
        window.addEventListener("resize", handleResize); // Adiciona o listener

        return () => {
            window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar
        };
    }, []); // Array vazio para executar apenas uma vez


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