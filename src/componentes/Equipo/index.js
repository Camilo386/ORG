import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import rgbHex from "rgb-hex";

const Equipo = (props) =>{
    //Destructuración 
    const {colorPrimario,titulo,id} = props.datos;
    const estiloBackground = {backgroundColor: hexToRgba(colorPrimario,0.5)}
    const estiloTitulo= {borderBottomColor: colorPrimario};
    const {colaboradores,eliminarColaborador,actualizarColor,like} = props;



    return <>
        {
            (colaboradores.length > 0 && <section className="equipo" style={ estiloBackground }>
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <input
                        type="color"
                        className="input-color"
                        value={colorPrimario}
                        onChange={(evento) => {
                            actualizarColor(evento.target.value,id);
                            console.log(rgbHex(estiloBackground.backgroundColor))
                        }}
                        style={{color:colorPrimario}}
                    />
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador,index) => <Colaborador 
                                datos={colaborador} 
                                key={index} 
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            />)
                        }
                    </div>
                </section>
                )
        }
    </>
}

export default Equipo