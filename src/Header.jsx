import React from "react";
import { NavLink } from "react-router-dom";
import  Cart from "./components/Cart"


export const Header = () => {
  return (
    <header>
      <nav id="conteinerNav">
        <div>
          <h1>
          <NavLink to="/">
              <img
                src="/Carrizal-Logo.png"
                alt="logo de carrizal"
                className="imgCarrizal"
              />
            </NavLink>           
          </h1>
        </div>
        <div id="navegacion">
           <NavLink to="/components/Hombres">Hombres</NavLink>
          <NavLink to="/components/Mujeres">Mujeres</NavLink>
          <NavLink to="/components/Accesorios">Accesorios</NavLink>
           <Cart /> 
      </div>
      </nav>
    </header>
  )
};
