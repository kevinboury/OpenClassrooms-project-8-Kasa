
import Accordion from '../../components/Accordion/Accordion'
import './Accommodation.css'

function Accommodation() {
    const starFull = "/src/assets/icons/star-active.png"
    const starEmpty = "/src/assets/icons/star-inactive.png"
    
    return (
        <div className="accommodation">
            <img className="accommodation__cover" src="/src/assets/images/accommodation-mock.jpg" alt="accommodation mock"></img>

            <div className="accommodation__title-host-container">
                <div className="accommodation__title-container">
                    <h1>Cozy loft on the Canal of Saint-Martin</h1>
                    <p>Paris, Ile de France</p>
                </div>
                <div className="accommodation__host-container">
                    <p className="accommodation__host-name">Alexandre Dumas</p>
                    <img className="accommodation__host-avatar" src="/src/assets/images/avatar_mock.png" alt="Avatar de l'hôte"></img>
                </div>
            </div>

            <div className="accommodation__tags-rating-container">
                <div className="accommodation__tags-container">
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
                <div className="accommodation__rating" aria-label="Note : 3 sur 5"> { /*TODO faire component*/ }
                    <img src={starFull} alt="Étoile pleine" />
                    <img src={starFull} alt="Étoile pleine" />
                    <img src={starFull} alt="Étoile pleine" />
                    <img src={starEmpty} alt="Étoile vide" />
                    <img src={starEmpty} alt="Étoile vide" />
                </div>
            </div>

            <div className="accommodation__accordions-container">
                <div className="accommodation__accordion-container">
                    <Accordion title="Description" contents={["Lorem ipsum"]} />
                </div>


                <div className="accommodation__accordion-container">
                    <Accordion title="Équipements" contents={["Climatisation", "Climatisation", "Climatisation", "Climatisation"]} />
                </div>
            </div>
        </div>
    )
}

export default Accommodation