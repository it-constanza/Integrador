import { NavLink } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
  return (

    <nav className="nav-bar"> 
      <div className="nav-bar__logo-container"> <img src="/img/logo.png" alt="logo" /></div>
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-item">
          <NavLink to="#" className="nav-bar__nav-link">Inicio</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="views/NavLinklta.html" className="nav-bar__nav-link">Alta</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="views/contacto.html" className="nav-bar__nav-link">Contacto</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink to="views/nosotros.html" className="nav-bar__nav-link">Nosotros</NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
