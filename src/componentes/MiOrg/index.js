import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    // usar funt useState
    // const [nombreVariable,funcionActualiza] = useState(valorInicial)

    // const [mostrar,actualizarMostar] = useState(true);
    // const manejarClick = () => {
    //     console.log("Mostrar/ocultar elemento", mostrar)
    //     actualizarMostar(!mostrar);
    // }
    

    return <section className="orgSection">
        <section className="box">
            <h3 className="title">Mi organización</h3>
            <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
        </section>
    </section>
}

export default MiOrg