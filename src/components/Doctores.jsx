import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
export default class Doctores extends Component {
    state = {
        doctores: []
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
    componentDidMount = () =>{
        this.loadDoctores();
    }
    componentDidUpdate = (oldProps)=>{
        if (this.props.idhospital != oldProps.idhospital) {
            this.loadDoctores();
        }
    }

    render() {
        return (
            <div>
                <h2>Doctores del hospital: {this.props.idhospital}</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Id Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>Dr. {doc.apellido}</td>
                                        <td>{doc.especialidad}</td>
                                        <td>{doc.salario} €</td>
                                        <td>{doc.idHospital}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
