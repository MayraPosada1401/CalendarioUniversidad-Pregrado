import React from 'react';
import '../Estilos/loginyregistro.css';
import logo from '../Imagenes/logo.png';
import security from '../Imagenes/security.png';
import user from '../Imagenes/user.png';
import {Link} from 'react-router-dom';

export default function Iniciarsesion() {

  return (
    <div className="ContenedorPrincipalPL">
      
      <div className="ContenedorLogo">
         <img src={logo} className="" id="edit" alt="..." />
      </div>

      <div className="ContenedorLogin">
        <div className="Tarjeta">

          <div className="tarjeta2">
            <h4 className="titulosecu-login">Ingresa a tu cuenta</h4>

            <form className="Contenedor-Camposinput">

              <label htmlFor="usernarme" className="titulosinputs">Usuario de Registro</label>

              <div className="margenes-form">
                <span className="input-group-text">
                  <img className="Tamañoiconologin" src={user} alt=""/>
                </span>
                <input type="text" className="form-control" placeholder="Usuario"/>
              </div>

              <label htmlFor="usernarme" className="titulosinputs">Contraseña de Registro</label>
              
              <div className="margenes-form">
                <span className="input-group-text">
                  <img className="Tamañoiconologin" src={security} alt=""/>
                </span>
                <input type="password" className="form-control" placeholder="Contraseña" name="clave"/>
              </div>

            </form>

            <Link to="/Inicio">
            <div className="contenedorbotoningreso"><input className="btn botoningreso" type="submit" value="Ingresar"/></div>
            </Link>

            <br/>

            <h6 className="ultimotitulo-login">¿Eres nuevo? <Link to="/Registro"> Registrate aquí</Link></h6>
            

          </div>
        </div>
      </div>

      <br/>
      
    </div>
  );
} 