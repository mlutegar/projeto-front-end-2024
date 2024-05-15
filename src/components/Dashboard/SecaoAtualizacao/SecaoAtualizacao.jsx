    import React, { useState } from 'react';
    import Secao from "../../Secao/Secao";
    import { SecaoAtualizacaoStyle } from "./Style";

    function SecaoAtualizacao(props) {
        const [currentStartIndex, setCurrentStartIndex] = useState(0);
        const itemsPerPage = 4;
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

        return <Secao nome="Atualizações" conteudo={
            <SecaoAtualizacaoStyle>
                <div>
                    <button onClick={voltar}>
                        {"<"}
                    </button>
                </div>
                {props.atualizacoes.slice(currentStartIndex, currentStartIndex + itemsPerPage).map(props.prop1)}
                <div>
                    <button onClick={avancar}>
                        {">"}
                    </button>
                </div>
            </SecaoAtualizacaoStyle>
        }
        />;
    }

    export default SecaoAtualizacao;
