import { useEffect, useState } from 'react'

import Banner from "../../components/Banner/Banner"
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard"

import './Home.css'
import type { AccommodationData } from '../../types/AccommodationData'

function Home() {
    const [accommodations, setAccommodations] = useState<AccommodationData[]>([]);

    // http://localhost:8080/api/properties/c67ab8a7 

    useEffect( () => {
        fetch("http://localhost:8080/api/properties/").then(response => response.json()).then(data => setAccommodations(data))
    }, []);
    
    return (
        <div className="home">
            <Banner title="Chez vous, partout et ailleurs" page="home" />

            <div className="accommodation-cards-container">
                {/* <AccommodationCard title="Titre" id="c67ab8a7" /> */}
                {accommodations.map(
                    (accommodation) => (
                        <AccommodationCard key={accommodation.id} title={accommodation.title} id={accommodation.id} cover={accommodation.cover}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Home