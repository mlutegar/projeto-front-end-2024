import {InformacoesPerfilStyle} from "./Style";

const InformacoesPerfil = (props) => (
        <InformacoesPerfilStyle>
            <div>
                <h1>{props.titulo}</h1>
                <div id="container">
                    <div id="secao-selecionada">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>Dados do usuário</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>

                    <div id="item2">
                        <label
                            for="Nome"
                        >
                            Nome: {props.Nome}
                        </label>
                    </div>
                    <div id="item3">
                        <label
                            for="Email"
                        >
                            Email: {props.Email}
                        </label>
                    </div>
                    <div id="item4">
                        <label
                            for="Data de Nascimento"
                        >
                            Data de Nascimento: {props.DataNascimento}
                        </label>
                    </div>
                    <div id="item5">
                        <label
                            for="CPF"
                        >
                            CPF: {props.CPF}
                        </label>
                    </div>
                </div>
            </div>
        </InformacoesPerfilStyle>
);

export default InformacoesPerfil;