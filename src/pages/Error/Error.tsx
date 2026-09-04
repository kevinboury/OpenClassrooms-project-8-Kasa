import { NavLink } from "react-router-dom"


function Error() {
  return (
    <div>
        Error
        <h1>404</h1>
        <p>Oups! La page que vous demander n'existe pas</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default Error