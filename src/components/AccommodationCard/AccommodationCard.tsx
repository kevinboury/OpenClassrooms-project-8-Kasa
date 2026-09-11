import { NavLink } from 'react-router-dom'
import './AccommodationCard.css'

function AccommodationCard(
    {
        title, 
        id, 
        cover
    }: 
    {
        title: string, 
        id: string, 
        cover: string
    }) {
        return (
            <NavLink to={`/accommodation/${id}`} className="accommodation-card">
                <h2>{title}</h2>
                <img src={cover} alt="Photo du logement" />
            </NavLink>
        )
}

export default AccommodationCard
