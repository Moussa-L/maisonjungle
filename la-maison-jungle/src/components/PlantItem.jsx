/*
* je vais identifié chaque plante pour gerer chaque element 
ce qui vas ce passer dans le composant PlantItem.jsx
nous allons créer un composant qui va afficher les informations de chaque plante, comme son nom, son image, son niveau d'eau et de lumière, etc.  
*/

import CareScale from "./CareScale"
import styles from '../styles/PlantItem.module.css'

/*je vais créer une fonction pour afficher les informations de chaque plante*/


/*je vais créer un evenement onclick pour chaque plante*/



// Composant qui représente une plante individuelle dans la liste.
const PlantItem = ({id, cover, name, water, light }) => {

    // Fonction appelée au clic sur une plante.
    const handleClick = (event) => {
    // Affiche dans la console le nom de la plante cliquée.
    console.log("Vous avez cliqué sur la plante:", event);
    }
    // Structure HTML retournée pour une plante.
    return(
        <li key={id} className={styles.lmjPlantItem} onClick={() => handleClick(name)}>
           {/* Image de la plante. */}
           <img className={styles.lmjPlantItemCover} src={cover} alt={`${name}cover`} />
            {/* Nom de la plante. */}
            {name}
            <div>
                {/* Indicateur du besoin en eau. */}
                <CareScale careType="water" scaleValue={water}/>
                {/* Indicateur du besoin en lumière. */}
                <CareScale careType="light" scaleValue={light}/>
            </div>
        </li>
    )
}

// Export du composant pour l'utiliser dans ShoppingList.
export default PlantItem;
