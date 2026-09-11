import { useParams } from 'react-router-dom'
import Accordion from '../../components/Accordion/Accordion'
import type { AccommodationData } from '../../types/AccommodationData'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import './Accommodation.css'
import { useEffect, useState } from 'react'

// function Accommodation({accommodation}: {accommodation: AccommodationData}) {
function Accommodation() {
    
    const { id } = useParams() 
    const [accommodation, setAccommodation] = useState<AccommodationData | null>(null);

    useEffect( () => {
        fetch(`http://localhost:8080/api/properties/${id}`).then(response => response.json()).then(data => setAccommodation(data))
    }, [ id ])

    if( !accommodation ){
        return <div>Error</div>
    }

    return (
        <div className="accommodation">
            {/* <Carousel className="accommodation__carousel" /> */}
            <Carousel pictures={accommodation.pictures} />
            
            <div className="accommodation__main-infos-container">
                <div> 
                    <h1>{accommodation.title}</h1>
                    <p>{accommodation.location}</p>
                    <div className="accommodation__tags-container">
                        {accommodation.tags.map( (tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                </div>

                <div className="accommodation__host-rating-container">
                    <div className="accommodation__host-container">
                        <p className="accommodation__host-name">{accommodation.host.name}</p>
                        <img className="accommodation__host-avatar" src={accommodation.host.picture} alt={"Avatar de "+accommodation.host.name}></img>
                    </div>
                    <div className="accommodation__rating" aria-label={`Note de ${accommodation.rating}`}> { /*TODO faire component*/ }
                        {
                            <Rating note={parseInt(accommodation.rating)} noteMax={5} />
                        }
                    </div>
                </div>
            </div>

            <div className="accommodation__accordions-container">
                <div className="accommodation__accordion-container">
                    <Accordion title="Description" contents={[accommodation.description]} />
                </div>


                <div className="accommodation__accordion-container">
                    <Accordion title="Équipements" contents={accommodation.equipments} />
                </div>
            </div>
        </div>
    )
}

export default Accommodation