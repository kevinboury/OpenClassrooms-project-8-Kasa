import { NavLink } from "react-router-dom"

import './Error.css'

function Error() {
  return (
    <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demander n'existe pas</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default Error