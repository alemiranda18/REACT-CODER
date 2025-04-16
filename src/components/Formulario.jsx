import React from 'react'

const Formulario = () => {
  
  
    return (
    <div>
    <form className='formulario'>
      <label>Nombre:</label>
      <input type="text" placeholder='nombre' className="inputNombre"/>

      <label>Apellido:</label>
      <input type="text" placeholder='apellido' className="inputApellido"/>

      <label>Correo:</label>
      <input type="text" placeholder='correo' className="inputCorreo"/>

      <button type='submit' className='botonEnviar'>Enviar</button>

    </form>
</div>
  )
}

export default Formulario