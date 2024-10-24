import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import DetallesDoctor from './DetallesDoctor'
export default class Doctores extends Component {
    state = {
        doctores: [],
        idDoctor : -1
    }

    loadDoctores = () => {
        let idHospital = this.props.idhospital
        let request = "api/doctores/doctoreshospital/" + idHospital;
        let url = Global.apiDoctores + request
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadDoctores();
    }
    componentDidUpdate = (oldProps) => {
        if (this.props.idhospital != oldProps.idhospital) {
            this.loadDoctores();
        }
    }

    mostrarDestalleDoctor = (idDoctor) => {
        this.setState({
            idDoctor: idDoctor
        })
    }

    render() {
        return (
            <div>
                <h2>Doctores del hospital: {this.props.idhospital}</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>Dr. {doc.apellido}</td>
                                        <td>
                                            <button onClick={()=>{
                                                this.mostrarDestalleDoctor(doc.idDoctor)
                                            }}>
                                                Detalles
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.idDoctor != -1 && (
                        <DetallesDoctor iddoctor = {this.state.idDoctor}></DetallesDoctor>
                    )
                }
            </div>
        )
    }
}
