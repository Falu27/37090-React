import { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1) //Valor inicial

    const cuentaContador = (operacion) => {
        if (operacion === "+") {
            if (contador < 10) //Cantidad en Stock
                setContador(contador + 1)
        } else {
            if (contador > 1)
                setContador(contador - 1)
        }
    }

    return (
        <>
            <button onClick={() => cuentaContador("+")} className='btn btn-dark'>+</button>
            {contador}
            <button onClick={() => cuentaContador("-")} className='btn btn-dark'>-</button>
        </>
    );
}

export default Contador;
