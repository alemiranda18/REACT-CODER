import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./components/Cartwidget";

export const Header = () => {
  return (
    <header>
      <h1 id="titulo"> VILLA CARRIZAL</h1>
      <div id="conteinerNav">
        <nav id="navegacion">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/components/Nosotros">Nosotros</NavLink>
          <NavLink to="/components/Pozos">Pozos</NavLink>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
