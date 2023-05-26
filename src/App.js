import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostar] = useState(false );
  const [colaboradores,actualizarColaboradores] = useState([{
    id:uuid(),
    equipo:"Front End",
    foto:"https://github.com/Camilo386.png",
    nombre:"Juan Camilo Agudelo",
    puesto:"Mecanico",
    fav: true
  },
  {
    id:uuid(),
    equipo:"Programación",
    foto:"https://github.com/Camilo386.png",
    nombre:"Juan Camilo Agudelo",
    puesto:"Doctor",
    fav: false
  },
  {
    id:uuid(),
    equipo:"Devops",
    foto:"https://github.com/Camilo386.png",
    nombre:"Juan Camilo Agudelo",
    puesto:"Estudiante",
    fav: false
  },
  {
    id:uuid(),
    equipo:"Móvil",
    foto:"https://github.com/Camilo386.png",
    nombre:"Juan Camilo Agudelo",
    puesto:"Estudiante",
    fav: false
  }]);

  const [equipos,actualizarEquipos] = useState([

    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9" 
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF" 
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2" 
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8" 
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5" 
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9" 
    },
    {
      id:uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF" 
    },
  ])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario);
  }

  //registrar colaborador

  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
  }
  //Elimiar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid}])
  } 

  const like = (id) => {
    const colaboradoesActualizados = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoesActualizados)
  }
  return (
    <div className="App">
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
      <Footer/>
    </div>
  );
}
 
export default App;
