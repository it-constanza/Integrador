import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>

      <h1>Formulario de alta de productos</h1>
      <h2>Agregar producto</h2>

      <div className="alta-form">  <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} /> </div>


      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
    </>
  )
}

export default Alta