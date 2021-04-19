import React from 'react';
import Header from '../Componentes/header'
import Inicio from '../Componentes/inicio'
import Footer from '../Componentes/footer'

export default function PaginaInicio() {
    return (
        <div className="Inicio">
            <Header/>
            <Inicio/>
            <Footer/>
        </div>
    );
}