import {InformacoesServicoStyle} from "./Style";
import {useState} from "react";


const statusOptions = [
    "Não iniciado",
    "Calculo em processo",
    "Concluído",
    "Imagens de pacientes erradas, enviar novamente",
    "Imagens de calibração errada, enviar novamente"
];

const InformacoesServico = (props) => {
    const [estadoRelatorio, setEstadoRelatorio] = useState(props.Status);

    const handleStatusChange = (event) => {
        const selectedStatus = event.target.value;
        // Lógica para atualizar o estado com o status selecionado
        // Por exemplo, se você estiver usando useState:
        // setStatus(selectedStatus);

        setEstadoRelatorio(selectedStatus);
    };

    return(
    <InformacoesServicoStyle>
        <div>
            <div id="container">
                <div id="header">
                    <div id="titulo">
                        <span id="circulo"></span>
                        <h1>Dados do usuário</h1>
                    </div>
                    <div id="linha-azul"></div>
                </div>

                <div id="body">
                    <div id="item2">
                        <label for="Analyses" >Analyses Name</label>
                        <input type="text" placeholder={props.Analyses} name={props.Analyses} />
                    </div>
                    <div id="item3">
                        <label for="Status">Status</label>
                        <select name={estadoRelatorio} value={estadoRelatorio} onChange={handleStatusChange}>
                            {statusOptions.map(status => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="item4">
                        <label for="Injetected">Injetected</label>
                        <input type="text" placeholder={props.Injetected} name={props.Injetected} />
                    </div>
                    <div id="item5">
                        <label for="Data" >Data</label>
                        <input type="text" placeholder={props.Data} name={props.Data}/>
                    </div>
                    <div id="item6">
                        <label for="Hora">Hora</label>
                        <input type="text" placeholder={props.Hora} name={props.Hora}/>
                    </div>
                    <div id="item7">
                        <label for="Ativo?">Ativo?</label>
                        <input type="checkbox" placeholder={props.Ativo} name={props.Ativo} />
                    </div>
                </div>
                <div id="footer"> <button> Salvar </button> </div>
            </div>
        </div>
    </InformacoesServicoStyle>
    );
};

export default InformacoesServico;