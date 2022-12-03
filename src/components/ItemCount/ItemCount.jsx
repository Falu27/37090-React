import { useState } from 'react';

const Contador = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1) //Valor inicial

    const agregarCarrito = () =>{
        onAdd(contador)       
    }

    const incrementar = () => contador < stock && setContador(contador + 1)
    const decrementar = () => contador > 1 && setContador(contador - 1)

    return (
        <>
            <button onClick= { decrementar } className='btn btn-link btnCount'>-</button>
            {contador}
            <button onClick= { incrementar } className='btn btn-link btnCount'>+</button>
            <button className='btn btn-dark btnAgr' onClick={agregarCarrito}>Agregar Producto</button>
        </>
    );
}

export default Contador;
