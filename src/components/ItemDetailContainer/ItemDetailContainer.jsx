import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { consultarBDD } from '../../assets/funciones';
import { getProductos } from '../../assets/firebase';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        getProductos(id).then(productos =>{
            const prod = productos.find(productoArray => productoArray.id === (id))
            setProducto(prod)
        })
    }, [])

    return (
        <div>
            <div className='card mb-3 container ItemDetail'>
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
