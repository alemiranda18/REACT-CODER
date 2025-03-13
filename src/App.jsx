import React from "react";
import { Header } from "./Header";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { Routes, Route } from "react-router-dom";
import Futbol from "./components/Futbol";
import Basquet from "./components/Basquet";
import Voley from "./components/Voley";
import CartWidget from "./components/Cartwidget";

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListConteiner />}></Route>
        <Route path="/components/:id" element={<Futbol />}></Route>
        <Route path="/components/Basquet" element={<Basquet />}></Route>
        <Route path="/components/Voley" element={<Voley />}></Route>
        <Route path="/components/CartWidget" element={<CartWidget />}></Route>
      </Routes>
    </>
  );
};
