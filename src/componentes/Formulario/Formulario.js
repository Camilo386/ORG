import ListaOpciones from "../ListaOpciones";
import CampoTexto from "../CampoTexto";
import Boton from "../Boton";
import "./Formulario.css"

const Formulario = () => {

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar el envío",evento)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar el nombre"/>
            <CampoTexto titulo='Puesto' placeholder="Ingrese el puesto"/>
            <CampoTexto titulo='Foto' placeholder="Ingresar enlace de foto"/>
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;