import { Header } from "./Header";
import  ItemListConteiner  from "./components/ItemListConteiner";
import { Routes, Route } from "react-router-dom";
import  ItemLinkProductos  from "./components/ItemLinkProductos";
import  CarritoItem from "./components/CarritoItem";
import  CarritoContext  from "./components/Context";
import Footer from "./components/Footer";



const App = () => {
  return (
    <CarritoContext>
       <Header />     
       <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/CarritoItem" element={<CarritoItem />} />
        <Route path="components/:id" element={<ItemListConteiner />} />
        <Route path="productos/:id" element={<ItemLinkProductos />} />
       </Routes>
        <Footer />
    </CarritoContext>
  )
}

export default App;