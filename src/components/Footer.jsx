import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
  <>
    <footer className= "main-footer">
    <nav className= "nav-foot"> 
      <ul className= "nav-foot__nav-list">
        <li className= "nav-foot__nav-item">
          <NavLink to="/" className= "nav-foot__nav-link">Inicio </NavLink>
        </li>
        <li className= "nav-foot_nav-item">
          <NavLink to="/alta" className= "nav-foot__nav-link">Alta </NavLink>
        </li>
        <li className= "nav-foot__nav-item">
          <NavLink to="/contacto" className= "nav-foot__nav-link"> Contacto </NavLink>
        </li>
        <li className= "nav-foot__nav-item">
          <NavLink to="/nosotros" className= "nav-foot__nav-link">Nosotros </NavLink>
        </li>
      </ul>
    </nav> 

    <p className= "main-footer__p"> Todos los derechos reservados para Cony INC. </p>

  </footer>
  </>
  )
}

export default Footer