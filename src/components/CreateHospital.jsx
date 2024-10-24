import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (e)=>{
        e.preventDefault()
        let request ="webresources/hospitales/post";
        let url = Global.apiHospitales+request
        //RESPETAR LOS TIPOS DE DATOS DEL SERVICIO
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value;
        let telefono = this.cajaTelefono.current.value;
        let camas = parseInt(this.cajaCamas.current.value);

        //CREAR OBJETO REACT CON EL MISMO NOMBRE QUE LOS DEL SERVICIO
        let hospital ={
            idhospital:id,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            camas:camas
        }

        axios.post(url,hospital).then(response=>{
            this.setState({
                mensaje:"Hospital insertado",
                status:true
            })
        })

    }

    state={
        mensaje :"",
        status:false
    }
  render() {
    return (
      <div>
        {
            this.state.status == true &&(
                <Navigate to="/hospitales"/>
            )
        }
            <h1>Nuevo Hospital</h1>
            <h3 style={{color:"blue"}}>{this.state.mensaje}</h3>
            <form>
                <label>Id Hospital</label>
                <input type="text" ref={this.cajaId} />
                <label>Nombre</label>
                <input type="text" ref={this.cajaNombre} />
                <label>Direccion</label>
                <input type="text" ref={this.cajaDireccion} />
                <label>Telefono</label>
                <input type="text" ref={this.cajaTelefono} />
                <label >Camas</label>
                <input type="text" ref={this.cajaCamas} />
                <button onClick={this.insertHospital} className='btn btn-warning'>Insertar</button>
            </form>
      </div>
    )
  }
}
