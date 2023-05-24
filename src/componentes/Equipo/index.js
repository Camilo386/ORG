import "./Equipo.css"
import Colaborador from "../Colaborador";

const Equipo = (props) =>{
    //Destructuración 
    const {colorPrimario,colorSecundario,titulo} = props.datos;
    const estiloBackground = {backgroundColor: colorSecundario}
    const estiloTitulo= {borderBottomColor: colorPrimario};
    const {colaboradores,eliminarColaborador} = props;



    return (colaboradores.length > 0 && <section className="equipo" style={ estiloBackground }>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                />)
            }
        </div>
    </section>
    );
}

export default Equipo