import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const {getItemQuantity} = useContext(CartContext)
  return (
        <>
            <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <Link className="nav-link" to="/cart">
            <button className='btn btn-primary'> <i className="fa-solid fa-cart-shopping"><p className="pQuant">{getItemQuantity()}</p></i></button>
            </Link>
          </li>
        </ul>
        </>
    );
}

export default Cart;
