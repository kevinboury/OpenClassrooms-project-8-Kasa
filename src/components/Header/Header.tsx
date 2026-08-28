import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <img src="src/assets/images/logo_red.png" alt="Logo de Kasa" />
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
    </div>
  )
}

export default Header