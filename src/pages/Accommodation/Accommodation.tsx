import { useNavigate, useParams } from "react-router-dom";

import Accordion from '../../components/Accordion/Accordion'
import type { AccommodationData } from '../../types/AccommodationData'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import './Accommodation.css'
import { useEffect, useState } from 'react'

function Accommodation() {
    
    const { id } = useParams() 
    const [accommodation, setAccommodation] = useState<AccommodationData | null>(null);
    const navigate = useNavigate();

    useEffect( () => {
        fetch(`http://localhost:8080/api/properties/${id}`).then
            (
                response => {
                    if( !response.ok ){
                        throw new Error(`Erreur HTTP : ${response.status}`);
                    }

                    return response.json();
                }
            ).then( data => setAccommodation(data) ).catch( (error) => {
                console.error(error);
                navigate("/error")
            })
        }, [ id, navigate ])

    if (!accommodation) {
        return <div>Chargement...</div>;
    }

    return (
        <>
            <div className="accommodation__carousel-container">
                <Carousel pictures={accommodation.pictures} />
            </div>
            
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
        </>
    )
}

    

export default Accommodation