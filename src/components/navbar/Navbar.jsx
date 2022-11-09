import { Link } from 'react-router-dom';
import './navbar.css';
import FormSearch from '../FormSearch/FormSearch';
import Dropdown from './Dropdown/Dropdown';
import LogoWU from '../../img/logoWU.png'
import Cart from '../CartWidget/CartWidget';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className='LogoWake' to="/" > <div> <img src={LogoWU} alt="" width="60" /> </div> </Link>
        <Link className="navbar-brand" to="/">WakeUp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' to="/">
                Inicio
              </Link>

            </li>
            <li className="nav-item">

              <Link className="nav-link" to="/Nosotros"> Nosotros</Link>
            </li>

            <Dropdown />

          </ul>
          <FormSearch busqueda={"Buscar Producto"} />
        </div>

        <Cart />

      </div>
    </nav>

  );
}

export default Navbar;