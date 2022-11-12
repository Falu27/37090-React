import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/category/mountain" > Mountain Bike </Link></li>
            <li><Link className="dropdown-item" to="/category/ruteras">Ruteras</Link></li>
            <li><Link className="dropdown-item" to="/category/urbana">Urbanas</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/category/accesorios">Accesorios</Link></li>
          </ul>
        </li>
    );
}

export default Dropdown;
