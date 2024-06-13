import {InformacoesPerfilStyle} from "./Style";
import {ComponenteInput} from "../../ServicoDetalhado/InformacoesServico/ComponenteInput";

const InformacoesPerfil = (props) => (
        <InformacoesPerfilStyle>
            <div id="container">
                <div id="item1">
                    <ComponenteInput
                        label="Nome"
                        placeholder={props.Nome}
                        nome={props.Nome}
                    />
                </div>
                <div id="item2">
                    <ComponenteInput
                        label="Sobrenome"
                        placeholder={props.Sobrenome}
                        nome={props.Sobrenome}
                    />
                </div>
                <div id="item3">
                    <ComponenteInput
                        label="Email"
                        placeholder={props.Email}
                        nome={props.Email}
                    />
                </div>
                <div id="item4">
                    <ComponenteInput
                        label="Telefone"
                        placeholder={props.Telefone}
                        nome={props.Telefone}
                    />
                </div>
                <div id="item5">
                    <ComponenteInput
                        label="Data de Nascimento"
                        placeholder={props.Endereco}
                        nome={props.Endereco}
                    />
                </div>
                <div id="item6">
                    <ComponenteInput
                        label="CPF"
                        placeholder={props.CPF}
                        nome={props.CPF}
                    />
                </div>
            </div>
        </InformacoesPerfilStyle>
);

export default InformacoesPerfil;