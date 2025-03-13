import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./components/Cartwidget";

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
          <NavLink to="/components/Futbol">Futbol</NavLink>
          <NavLink to="/components/Basquet">Basquet</NavLink>
          <NavLink to="/components/Voley">Voley</NavLink>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
