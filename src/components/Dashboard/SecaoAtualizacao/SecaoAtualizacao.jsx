    import React, { useState } from 'react';
    import Secao from "../../Geral/Secoes/Secao/Secao";
    import { SecaoAtualizacaoStyle } from "./Style";
    import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";

    function SecaoAtualizacao(props) {
        const [currentStartIndex, setCurrentStartIndex] = useState(0);
        const itemsPerPage = 3;
        const totalItems = props.atualizacoes.length;

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

        return <Secao
                    pagina={false}
                    nome="Atualizações"
                    info="Aqui você pode visualizar as atualizações disponíveis. Quem foram os responsáveis por essas atualizações e a data em que foram realizadas."
                    conteudo={
                        <SecaoAtualizacaoStyle>
                            <div id="cards">
                                {props.atualizacoes.slice(currentStartIndex, currentStartIndex + itemsPerPage).map(props.prop1)}
                            </div>
                        </SecaoAtualizacaoStyle>
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

    export default SecaoAtualizacao;
