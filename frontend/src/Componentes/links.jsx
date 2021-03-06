import React from 'react';
import '../Estilos/links.css';

export default function links() {

  return (
    <div className="ContenedorPrincipalLinks">

      <div className="row contenedor-Linksform">

        <div className="col-md-4 order-md-2 mb-4">
      
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted pt-5">Añadir Link</span>
          </h4>
      
          <form>
        
            <div className="mb-3">
              <label for="">Título<span className="text-muted"></span></label>
              <input type="" className="form-control" id="" placeholder=""/>
            </div>

            <div className="mb-3">
              <label for="">Materia<span className="text-muted"></span></label>
              <input type="" className="form-control" id="" placeholder=""/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Descripción Breve</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label for="">Link 1<span className="text-muted"></span></label>
              <input type="" className="form-control" id="" placeholder=""/>
            </div>

            <div className="mb-3">
              <label for="">Link 2<span className="text-muted"></span></label>
              <input type="" className="form-control" id="" placeholder=""/>
            </div>

            <div className="mb-3">
              <label for="date" className="form-label">Example date </label>
              <input type="date" className="form-control" id="date"/>
            </div>

          </form>

          <form className="card p-2 contenedor-boton-agrelink">
            <div className="input-group contenedor-boton-agrelink">
              <div className="input-group-append contenedor-boton-agrelink">
                <button type="submit" className="btn boton-guardarlink-pl">Agregar Link</button>
              </div>
            </div>
          </form>
        </div>

   
        <div className="col-md-8 order-md-1">
          <div className="row margenes-cards-pls my-5">

            <div className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Página cálculos</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Materia: Cálculo</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Fecha: Septiembre 2 2021</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link color-link-pl">Link 1</a>
                  <a href="#" className="card-link color-link-pl">Link 2</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Página cálculos</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Materia: Cálculo</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Fecha: Septiembre 2 2021</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link color-link-pl">Link 1</a>
                  <a href="#" className="card-link color-link-pl">Link 2</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Página cálculos</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Materia: Cálculo</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Fecha: Septiembre 2 2021</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link color-link-pl">Link 1</a>
                  <a href="#" className="card-link color-link-pl">Link 2</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Página cálculos</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Materia: Cálculo</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Fecha: Septiembre 2 2021</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link color-link-pl">Link 1</a>
                  <a href="#" className="card-link color-link-pl">Link 2</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 my-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Página cálculos</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Materia: Cálculo</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Fecha: Septiembre 2 2021</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link color-link-pl">Link 1</a>
                  <a href="#" className="card-link color-link-pl">Link 2</a>
                </div>
              </div>
            </div>

          </div>
        </div>
   
      </div>

    </div>
  );
} 