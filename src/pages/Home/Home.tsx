import Banner from "../../components/Banner/Banner"
import LocationCard from "../../components/LocationCard/LocationCard"


function Home() {
  return (
    <div>
        Home
        <Banner />

        <div>
            <LocationCard />
            <LocationCard />
        </div>
    </div>
  )
}

export default Home