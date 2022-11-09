import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <>
            <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <Link className="nav-link" to="/cart">
            <button className='btn btn-primary'> <i className="fa-solid fa-cart-shopping"></i></button>
            </Link>
          </li>
        </ul>
        </>
    );
}

export default Cart;
