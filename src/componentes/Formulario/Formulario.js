import { useState } from "react";
import ListaOpciones from "../ListaOpciones";
import CampoTexto from "../CampoTexto";
import Boton from "../Boton";
import "./Formulario.css"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");
    
    const {registrarColaborador} = props;
    
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre"
                placeholder="Ingresar el nombre" 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                required
            />
            <CampoTexto 
                titulo='Puesto' 
                placeholder="Ingrese el puesto" 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
                required
            />
            <CampoTexto 
                titulo='Foto' 
                placeholder="Ingresar enlace de foto" 
                valor={foto} 
                actualizarValor={actualizarFoto}
                required
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;