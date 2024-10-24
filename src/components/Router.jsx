import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import Doctores from './Doctores'
export default class Router extends Component {
  render() {
    function DoctoresElement (){
        let  {idhospital} = useParams();
        return <Doctores idhospital ={idhospital}></Doctores>
    }
    return (
      <div>
        <BrowserRouter>
            <MenuHospitales/>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/doctores/:idhospital' element={<DoctoresElement></DoctoresElement>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
