import { ButtonEnviarFormulario, ContainerContent, Formulario, InputFormulario } from "../../components/Formulario/index.ts";
import { Menu } from "../../components/Menu/index.tsx";

export const Contato =  () => {

    function enviarFormulario() {
        window.alert("Enviado contato.");
    }
    return (
        <>
        <Menu />
        <ContainerContent>
            <Formulario onSubmit={enviarFormulario}>
                {/* Campo do nome */}
                <label htmlFor="email">Nome</label>
                <InputFormulario
                    name="nome"
                    type="text"
                    placeholder="Digite seu nome..."
                />

                {/* Campo de telefone */}
                <label htmlFor="endereco">Telefone</label>
                <InputFormulario
                    name="telefone"
                    type="number"
                    placeholder="(xx) x xxxx-xxxx"
                />
            
                {/* Campo do email */}
                <label htmlFor="email">Email</label>
                <InputFormulario
                    name="Email"
                    type="email"
                    placeholder="Digite seu e-mail..."
                ></InputFormulario>

                {/* Cidades */}
                <label htmlFor="cidades">
                    Selecione uma cidade: 
                    <select name="SelecionaCidade">
                        <option value="Umuarama">Umuarama</option>
                        <option value="MariaHelena">Maria Helena</option>
                        <option value="NovaYork">Nova York</option>

                    </select>
                </label>     

                {/* Descrição */}
                <label htmlFor="descrição">Texto</label>
                <textarea
                    name="texto"
                    placeholder="Digite sua texto..."
                    rows={6}
                    cols={50}
                >
                </textarea>
                {/* Campo de enviar */}
                <ButtonEnviarFormulario
                    type="submit"
                >Enviar
                </ButtonEnviarFormulario>
                
                </Formulario>
            </ContainerContent>
        </>
    )
}