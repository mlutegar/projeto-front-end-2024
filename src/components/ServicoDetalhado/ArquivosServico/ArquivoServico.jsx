import {ArquivoServicoStyle} from "./Style";
import {ComponenteArquivo} from "./ComponenteArquivo";


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


function handleDeletar() {
    const confirmacao = window.confirm("Tem certeza que deseja deletar este arquivo?");
    if (confirmacao) {
        alert("Arquivo deletado com sucesso!");
    }
}

const ArquivoServico = (props) => (
        <ArquivoServicoStyle>
            <div>
                <div id="container">
                    <div id="header">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>{props.titulo}</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>

                    <div id="body">
                        <div id="img-paciente">
                            <ComponenteArquivo
                                titulo="Imagem do paciente"
                                arquivo={props.imgPaciente}
                                status={props.situacao}
                                uploadArquivo={uploadArquivo}
                                baixarArquivo={baixarArquivo}
                                removerArquivo={handleDeletar}
                            />
                        </div>

                        <div id="img-calibracao">
                            <ComponenteArquivo
                                titulo="Imagem de calibração"
                                arquivo={props.imgCalibracao}
                                status={props.situacao}
                                uploadArquivo={uploadArquivo}
                                baixarArquivo={baixarArquivo}
                                removerArquivo={handleDeletar}
                            />
                        </div>

                        <div id="relatorio">
                            <ComponenteArquivo
                                titulo="Relatório"
                                arquivo={props.relatorio}
                                status={props.situacao}
                                uploadArquivo={uploadArquivo}
                                baixarArquivo={baixarArquivo}
                                removerArquivo={handleDeletar}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ArquivoServicoStyle>
);

export default ArquivoServico;