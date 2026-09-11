import { useEffect, useState } from 'react'

import Banner from "../../components/Banner/Banner"
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard"
import type { AccommodationData } from '../../types/AccommodationData'

import './Home.css'

function Home() {
    const [accommodations, setAccommodations] = useState<AccommodationData[]>([]);

    useEffect(
        () => { 
                fetch("http://localhost:8080/api/properties/").then(response => response.json()).then(data => setAccommodations(data)) 
        },
        []
    );
    
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" page="home" />

            <div className="home__accommodation-cards-container">
                {accommodations.map(
                    (accommodation) => (
                        <AccommodationCard key={accommodation.id} title={accommodation.title} id={accommodation.id} cover={accommodation.cover}/>
                    )
                )}
            </div>
        </>
    )
}

export default Home