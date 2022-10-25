import './navbar.css';
import FormSearch from '../FormSearch/FormSearch';
import Dropdown from './Dropdown/Dropdown';
import LogoWU from '../../img/logoWU.png'

const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className='LogoWake' href='#'> <div> <img src={LogoWU} alt="" width="60" /> </div> </a>
    <a className="navbar-brand" href="#">WakeUp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <Dropdown/>
        
      </ul>
      <FormSearch busqueda={"Buscar Producto"} />
    </div>
    
    <ul className='navbar-nav me-auto'>
      <li className='nav-item'>
        <a href="#"> <button className='btn btn-dark'> <i class="fa-solid fa-cart-shoping"></i>Carro</button> </a>
      </li>
    </ul>
  
  </div>
</nav>
        
    );
}

export default Navbar;
