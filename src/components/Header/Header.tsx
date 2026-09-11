import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <div className="header">
        
        <NavLink to="/">
            <img src="/src/assets/images/logo_red.png" alt="Logo de Kasa" />
        </NavLink>
        
        <div className="header__links-container">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À Propos</NavLink>
        </div>
    </div>
  )
}

export default Header