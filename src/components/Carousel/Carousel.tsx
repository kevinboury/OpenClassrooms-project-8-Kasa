import { useState } from "react";
import Arrow from "../Arrow/Arrow";
import "./Carousel.css";


function Carousel ( {pictures} : {pictures: string[]} ) {

    const [pictureIndex, setPictureIndex] = useState(0);

    const size = pictures.length;

    return (
        <div className="carousel">

            <button
                type="button"
                onClick={ () => setPictureIndex((pictureIndex - 1 + size) % size)}
                aria-label="swipe à gauche"
                className="carousel__button-left"
            >
                <Arrow className="carousel__arrow" direction='LEFT' />
            </button>

            <button
                type="button"
                onClick={ () => setPictureIndex((pictureIndex+1) % size)}
                aria-label="swipe à droite"
                className="carousel__button-right"
            >
                <Arrow className="carousel__arrow" direction='RIGHT' />
            </button>

            {pictures.map( (picture, index) => {
                return (
                    <img 
                        src={picture} 
                        key={index} 
                        alt="Photo du logement" 
                        hidden={ index === pictureIndex ? false : true } 
                    />
                )
            })}
        </div>
    )
}

export default Carousel;