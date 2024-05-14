import {SecaoCalibracaoStyle} from "./Style";

import Secao from "../../Secao/Secao";
import Tabela from "../../Tabela/Tabela";
import dadosCalibracoes from "../../../data/calibracoes.json";
import BotaoAvancarVoltar from "../../BotaoAvancarVoltar/BotaoAvancarVoltar";
import {useState} from "react";

function SecaoCalibracao(props) {
    const [sliceIndex, setSliceIndex] = useState(0);
    const itemsPerPage = 5;

    const avancar = () => {
        if (sliceIndex < dadosCalibracoes.length - itemsPerPage) {
            setSliceIndex(sliceIndex + itemsPerPage);
        }
    }

    const voltar = () => {
        if (sliceIndex > 0) {
            setSliceIndex(sliceIndex - itemsPerPage);
        }
    }

    return <Secao
        pai="/calibracoes"
        nome="Calibrações"
        conteudo={
            <div>
                <Tabela
                    tipo="calibracao"
                    linha={
                        <>
                            {dadosCalibracoes.slice(sliceIndex, sliceIndex + itemsPerPage).map(
                                props.prop)}
                        </>
                    }
                />

                <BotaoAvancarVoltar
                    avancar={avancar}
                    voltar={voltar}
                />
            </div>
        }
    />;
}

export default SecaoCalibracao;