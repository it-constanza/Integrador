import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext()
/* 2da -> El armado del Provider */

const CarritoProvider = ( { children} ) => {
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    const agregarCarritoContext = (producto) => {
        agregarAlCarrito(producto)
    }

    const eliminarCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = () => {
        /* Petición asincronica a nuestro banckend */
        /* limpie el localStorage */
        limpiarCarrito()
        
    }

    const data = {carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }

export default CarritoContext