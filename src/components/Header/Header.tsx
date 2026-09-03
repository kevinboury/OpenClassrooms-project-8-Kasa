import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <div className="header">
        
        <img src="src/assets/images/logo_red.png" alt="Logo de Kasa" />
        <div className="header__links-container">
            <NavLink to="/" className="header__link">Accueil</NavLink>
            <NavLink to="/about" className="header__link">À Propos</NavLink>
        </div>
    </div>
  )
}

export default Header