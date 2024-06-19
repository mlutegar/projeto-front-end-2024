import { SecaoSolicitacaoStyle } from "./Style";

import Secao from "../../Geral/Secoes/Secao/Secao";
import {useEffect, useState} from "react";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

function SecaoSolicitacao(props) {

    const ITENS_POR_PAGINA_AMPLO = 5; // Constante para telas amplas
    const ITENS_POR_PAGINA_NORMAL = 4; // Constante para telas normais
    const ITENS_POR_PAGINA_PEQUENO = 3; // Constante para telas pequenas

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

    const getItemsPerPage = () => {
        if (window.innerWidth > 1700) {
            return ITENS_POR_PAGINA_AMPLO;
        } else if (window.innerWidth > 1280) {
            return ITENS_POR_PAGINA_NORMAL;
        } else {
            return ITENS_POR_PAGINA_PEQUENO;
        }
    };

    const handleResize = () => {
        setItemsPerPage(getItemsPerPage());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Chamada inicial para garantir que o valor está correto na montagem
        handleResize();

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
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