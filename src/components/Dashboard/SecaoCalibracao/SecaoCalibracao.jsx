import {SecaoCalibracaoStyle} from "./Style";

import Secao from "../../Geral/Secoes/Secao/Secao";
import Tabela from "../../Geral/Tabela/Tabela";
import dadosCalibracoes from "../../../data/calibracoes.json";
import BotaoAvancarVoltar from "../../Geral/Botoes/BotaoAvancarVoltar/BotaoAvancarVoltar";
import {useState} from "react";

function SecaoCalibracao(props) {
    const [sliceIndex, setSliceIndex] = useState(0);
    const itemsPerPage = 3;

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
        info="Aqui você pode visualizar uma tabela rápida com as calibrações upadas no sistema. Você pode baixar a calibração clicando no botão de download."
        pagina={true}
        conteudo={
            <SecaoCalibracaoStyle>
                <div>
                    <Tabela
                        tipo="calibracao"
                        head={
                            <>
                                <th>ID</th>
                                <th>Calibração</th>
                                <th>Usuário</th>
                                <th>Isótopo</th>
                                <th>Data</th>
                                <th></th>
                            </>
                        }
                        linha={
                            <>
                                {dadosCalibracoes.slice(sliceIndex, sliceIndex + itemsPerPage).map(
                                    props.prop)}
                            </>
                        }
                    />
                </div>
            </SecaoCalibracaoStyle>
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

export default SecaoCalibracao;