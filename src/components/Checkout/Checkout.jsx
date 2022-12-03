import React from 'react';

const Checkout = () => {
  const datosFormulario = React.useRef()
  const consultarFormulario = (e) => {
    e.preventDefault()
    const datForm = new FormData(datosFormulario.current)
    const valores = Object.fromEntries(datForm)
    e.target.reset()
  }

  return (
    <div className="container">
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
        
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Apellido y Nombre</label>
          <input type="text" className="form-control" name="nombre" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email </label>
          <input type="email" className="form-control" name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="number" className="form-control" name="dni" />
        </div>

        <div className="mb-3">
          <label htmlFor="numeroTelefonico" className="form-label">Numero Telefonico</label>
          <input type="number" className="form-control" name="telefono" />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Direccion</label>
          <input type="text" className="form-control" name="direccion" />
        </div>
         
        <button type="submit" className="btn btn-primary btnForm">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default Checkout;
