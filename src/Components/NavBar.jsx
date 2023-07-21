import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from 'react-router-dom'

export const NavBar = () => (
  <header>
    <nav className="navbar navbar-expand-lg  navbar-dark menu shadow fixed-top"> {/* eliminar container */}
      <div className="container">
        <Link to='/'> {/* Link directo a inicio o reset del filtro */}
        <img src="./Logo Empresa DC.png" alt="LogoEmpresa_Nav" width="60px" />
        <a className="navbar-brand" href="MantencionesDC">
          Mantenciones DC
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="Categories">
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item m-2">
            <NavLink to={'Category/Accesorios'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Accesorios</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'Category/Componentes'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Componentes</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'Category/Ropa'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ropa</NavLink>
            </li>
            <li className="nav-item m-2">
            <NavLink to={'Category/Mantenciones'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mantenciones</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../src/Components/CartWidget.jsx">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="notificacion">7</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  </header>
);
