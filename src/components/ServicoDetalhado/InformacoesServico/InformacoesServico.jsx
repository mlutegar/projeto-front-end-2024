import {InformacoesServicoStyle} from "./Style";
import {useState} from "react";

import styled from 'styled-components';

const ComponenteInputStyle = styled.div`

`;

const ComponenteInput = (props) => {
    return (
        <ComponenteInputStyle>
            <label htmlFor="Analyses">{props.label}</label>
            <input
                type="text"
                placeholder={props.placeholder}
                name={props.nome}
            />
        </ComponenteInputStyle>
    );
};


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
                        <ComponenteInput
                            label="Analyses Name"
                            placeholder={props.Analyses}
                            nome={props.Analyses}
                        />
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
                        <ComponenteInput
                            label="Injetected"
                            placeholder={props.Injetected}
                            nome={props.Injetected}
                        />
                    </div>
                    <div id="item5">
                        <ComponenteInput
                            label="Data"
                            placeholder={props.Data}
                            nome={props.Data}
                        />
                    </div>
                    <div id="item6">
                        <ComponenteInput
                            label="Hora"
                            placeholder={props.Hora}
                            nome={props.Hora}
                        />
                    </div>
                </div>
                <div id="footer"> <button> Salvar </button> </div>
            </div>
        </div>
    </InformacoesServicoStyle>
    );
};

export default InformacoesServico;