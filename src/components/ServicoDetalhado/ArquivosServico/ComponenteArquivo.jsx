import {ComponenteArquivoStyle} from "./ComponenteArquivoStyle";
import {IoCloseCircle} from "react-icons/io5";
import {FaCheckSquare} from "react-icons/fa";

export const ComponenteArquivo = (props) => {
    return (
        <ComponenteArquivoStyle>
            <div id="header">
                {props.titulo} {props.arquivo === "-" || props.status === "Imagens de pacientes erradas, enviar novamente" || props.status === "Imagens de calibração errada, enviar novamente"
                ? <IoCloseCircle className="icon"/> :
                <FaCheckSquare className="icon-acerto"/>}
            </div>
            <div id="body">
                {props.arquivo === "-" ? "Nenhum arquivo enviado" : props.arquivo}
            </div>
            <div id="footer">
                <button onClick={props.uploadArquivo}>
                    Upload file
                </button>
                <button onClick={props.baixarArquivo}>
                    Download File
                </button>
                <button onClick={props.removerArquivo}>
                    Remove File
                </button>
            </div>
        </ComponenteArquivoStyle>
    )
}