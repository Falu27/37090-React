const Dropdown = () => {
    return (
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Bicicletas</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Servis</a></li>
          </ul>
        </li>
    );
}

export default Dropdown;
