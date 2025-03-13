import React from "react";
import { Header } from "./Header";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { Routes, Route } from "react-router-dom";
import Nosotros from "./components/nosotros";
import Pozos from "./components/pozos";

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ItemListConteiner nombre="Alejandro" />}></Route>
        <Route path="/components/nosotros" element={<Nosotros />}></Route>
        <Route path="/components/pozos" element={<Pozos />}></Route>
      </Routes>
    </>
  );
};
