import Accordion from "../../components/Accordion/Accordion"
import Banner from "../../components/Banner/Banner"
import './About.css'

function About() {
  return (
    <div>
        <Banner page="about" />
        <div className="about__accordion-container">
            <Accordion title="Fiabilité" contents={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
            <Accordion title="Respect" contents={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
            <Accordion title="Service" contents={["La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."]} />
            <Accordion title="Sécurité" contents={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelirs sur la sécurité domestique pour nos hôtes."]} />
        </div>
    </div>
  )
}

export default About