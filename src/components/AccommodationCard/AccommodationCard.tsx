import { NavLink } from 'react-router-dom'
import './AccommodationCard.css'

function AccommodationCard() {
  return (
    <NavLink to="/accommodation/0" className="accommodation-card">
        <h2>Titre de la location</h2>
        {/* <NavLink to="/accommodation"></NavLink> */}
    </NavLink>
  )
}

export default AccommodationCard
