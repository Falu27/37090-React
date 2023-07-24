import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder, getProducto, updateProducto } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';

const Checkout = () => {
  const datosFormulario = React.useRef()
  let navigate = useNavigate()
  const { cart, emptyCart, totalPrice } = useContext(CartContext);

  const consultarFormulario = (e) => {
    e.preventDefault()
    const datForm = new FormData(datosFormulario.current)
    const valores = Object.fromEntries(datForm)
    const aux = [...cart]
    aux.forEach(producto => {
      getProducto(producto.id)
        .then(prod => {
          prod.stock -= producto.cant
          updateProducto(producto.id, prod)
        })
    })

    createOrder(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden => {
      toast.success(`Felicidades! Su orden ID ${orden.id} se a realizado exitosamente!`, {
        position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark"
      })
      emptyCart()
      e.target.reset()
      navigate("/")

    })

  }


  return (
    <div className="container">
      <form onSubmit={consultarFormulario} ref={datosFormulario}>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Apellido y Nombre</label>
          <input type="text" className="form-control" name="nombre" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email </label>
          <input type="email" className="form-control" name="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="number" className="form-control" name="dni" />
        </div>

        <div className="mb-3">
          <label htmlFor="numeroTelefonico" className="form-label">Numero Telefonico</label>
          <input type="number" className="form-control" name="telefono" required />
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
