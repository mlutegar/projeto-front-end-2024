import {ComponenteInputStyle} from "./ComponenteInputStyle";

export const ComponenteInput = (props) => {
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