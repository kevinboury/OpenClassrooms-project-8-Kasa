import {useState} from 'react';
import './Accordion.css'

import Arrow from '../Arrow/Arrow';

function Accordion ( {title, contents} : {title: string, contents: string[] } ) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="accordion">
                
                <div className="accordion__title">
                    <h2>{title}</h2>
                    <button
                        type="button"
                        onClick={ () => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Fermer l'accordéon" : "Ouvrir l'accordéon"}
                    >
                        {/* { isOpen ? 
                            <Arrow className='accordion__arrow' direction='DOWN' /> : 
                            <Arrow className='accordion__arrow' direction='UP' />
                        } */}
                        <Arrow className={`accordion__arrow ${isOpen ? "accordion__arrow--open" : "" }`} direction='UP' />

                    </button>
                </div>
                
                <div className={`accordion__content ${isOpen ? "accordion__content--open" : ""}`}>
                    <div className="accordion__content-inner">
                        {contents.map(
                            (content, index) => (
                                <p key={index}>{content}</p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Accordion