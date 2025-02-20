import React from 'react';
import { Cartwidget } from './Cartwidget';
 export const Navbar =() =>{
  return (
  <header>
      <h1 id="titulo"> VILLA CARRIZAL</h1>
   <div id="conteinerNav">
        <nav id="navegacion">
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Pozos</a>
            <a href="#">Contacto</a>
            <a href="#">Medidores</a>  
        </nav>
      <div id="navegacion">
        <Cartwidget />
      </div>
    </div>
</header>
  )
 }


