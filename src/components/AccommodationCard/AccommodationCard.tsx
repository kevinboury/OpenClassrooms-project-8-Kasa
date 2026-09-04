import { NavLink } from 'react-router-dom'
import './AccommodationCard.css'

function AccommodationCard({title, id}: {title: string, id: string}) {
  return (
    <NavLink to={`/accommodation/${id}`} className="accommodation-card">
        <h2>{title}</h2>
    </NavLink>
  )
}

export default AccommodationCard
