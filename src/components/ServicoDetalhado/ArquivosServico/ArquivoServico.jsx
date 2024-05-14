import {ArquivoServicoStyle} from "./Style";
import SecaoGenerio from "../../SecaoGenerico/SecaoGenerio";
import {useState} from "react";

// // estadoRelatorio: estado que guarda a situação do relatório
// const [estadoRelatorio, setEstadoRelatorio] = useState();

// uploadArquivo: função que faz o usuário selecionar um arquivo para ser upado
const uploadArquivo = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = () => {
        if (input.files.length > 0) {
            let arquivo = input.files[0];
            // Adicione aqui a validação do arquivo se necessário
            salvarArquivo(arquivo);
        }
    }
    input.click();
    // Garantir que o input seja removido após o uso
    input.remove();
}


// salvarArquivo: função que salva um arquivo escolhido pelo usuário no localstorage do navegador
// parametros:  arquivo : File - arquivo a ser salvo
const salvarArquivo = (arquivo) => {
    const reader = new FileReader();
    reader.onload = () => {
        localStorage.setItem("img", reader.result);
    }
    reader.readAsDataURL(arquivo);
}


// baixarArquivo: função que baixa um arquivo do localstorege a partir de seu id no localstorage, assim que o usuário clica no botão de download
const baixarArquivo = () => {
    const img = localStorage.getItem("img");
    const a = document.createElement
    ("a");
    a.href = img;
    a.download = "img";
    a.click();
}

// // habilitarRelatorio: função que habilita o botão de download do relatório assim que o relatório é enviado, alterando o estado do relatório
// const habilitarRelatorio = () => {
// setEstadoRelatorio("Enviado");
// }


const ArquivoServico = (props) => (
        <ArquivoServicoStyle>
            <div>
                <div id="container">
                    <div id="secao-selecionada">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>{props.titulo}</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>

                    <div id="img-paciente" className="download">
                        <label
                            for="img-paciente"
                        >Imagem do paciente</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>

                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        <button onClick={() => baixarArquivo("img")}>
                            Download File
                        </button>
                    </div>

                    <div id="img-calibracao" className="download">
                        <label
                            for="img-calibracao"
                        >Imagem da calibração</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>
                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        <button onClick={() => baixarArquivo("img")}>
                            Download File
                        </button>
                    </div>

                    <div id="relatorio" className="download">
                        <label
                            for="relatorio"
                        >Relatório</label>
                        <p>
                            Situação: {props.situacao}
                        </p>
                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        {props.situacao === "Enviado" ? (
                            <button onClick={() => baixarArquivo("img")}>
                                Download File
                            </button>
                        ) : (
                            <></>
                        )
                        }
                    </div>
                    <div id="salvar">
                        <button>
                            Salvar
                        </button>
                    </div>
                </div>


            </div>
        </ArquivoServicoStyle>
);

export default ArquivoServico;