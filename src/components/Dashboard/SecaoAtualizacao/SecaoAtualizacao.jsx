import Secao from "../../Secao/Secao";
import { SecaoAtualizacaoStyle } from "./Style";

function SecaoAtualizacao(props) {
    return <Secao nome="Atualizações" conteudo={
        <>
            {props.atualizacoes.slice(0, 4).map(props.prop1)}
        </>
    }
    />;
}

export default SecaoAtualizacao;