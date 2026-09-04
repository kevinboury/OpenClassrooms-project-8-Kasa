import Banner from "../../components/Banner/Banner"
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard"

import './Home.css'

function Home() {
  return (
    <div className="home">
        <Banner title="Chez vous, partout et ailleurs" page="home" />

        <div className="accommodation-cards-container">
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
        </div>
    </div>
  )
}

export default Home