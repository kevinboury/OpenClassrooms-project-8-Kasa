function Rating( {note, noteMax} : {note: number, noteMax: number} ) {
    
    const starFull = "/src/assets/icons/star-active.png"
    const starEmpty = "/src/assets/icons/star-inactive.png"

    return (
        //crée un tableau de 5 éléments undefined puis exécute la fonction sur chacun d'eux en fournissant sa valeur et son index.
        // _ est par convention le nom donnée à une valeur dont je ne vais pas me servir dans ce contexte
        Array.from(
            {length: noteMax},
            (_, index) => (
                index < note 
                ? <img key={index} src={starFull} alt="Étoile pleine" />
                : <img key={index} src={starEmpty} alt="Étoile vide" />
            )
        )
    )
}

export default Rating;