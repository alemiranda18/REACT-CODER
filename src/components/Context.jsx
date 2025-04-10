import { createContext, useState} from 'react'

export const Context = createContext();
export const Provider = Context.Provider;

const CarritoContext = (props) => {   

    //estados    
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    //eventos
    const agregarProd = (producto) => {
    const copia = [...carrito]
    copia.push(producto)
    setCarrito(copia) 
    setCantidad(cantidad + 1)
    setTotal(total + producto.price)
    }
    
    const eliminarProd = (producto) => {
        console.log("agregar producto", producto);
    }

    const vaciarCarrito = (producto) => {
        setCarrito([])
        setCantidad(0)
        setTotal(0);
    }

    const contextValor = {
    cantidad,
    carrito,
    total,
    agregarProd,
    eliminarProd,
    vaciarCarrito, 
}
    

return(
    <Provider value = {contextValor}>
        {props.children}
    </Provider>
    )
}

export default CarritoContext;