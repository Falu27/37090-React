import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div className="card cardProducto" >
            <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{prod.nombre}</h4>
                <h5 className="card-text">{prod.marca} {prod.modelo} Rod: {prod.rodado} </h5>
                <h6 className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</h6>
                <button className='btn btn-dark'><Link className='nav-link' to={`/product/${prod.id}`}>Ver Producto</Link></button>
            </div>
        </div >
    );
}

export default Item;
