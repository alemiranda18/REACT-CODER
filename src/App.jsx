import React from "react";
import { Header } from "./Header";
import  ItemListConteiner  from "./components/ItemListConteiner";
import { Routes, Route } from "react-router-dom";
import  ItemLinkProductos  from "./components/ItemLinkProductos";
import { CarritoItem } from "./components/CarritoItem";



export const App = () => {
  return (
    <>
       <Header />     
       <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/CarritoItem" element={<CarritoItem />} />
        <Route path="components/:id" element={<ItemListConteiner />} />
        <Route path="productos/:id" element={<ItemLinkProductos />} />
       </Routes>
    </>
  )
}

export default App;