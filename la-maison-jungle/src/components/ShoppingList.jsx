/**
 * Ce fichier contient le composant ShoppingList qui affiche une liste de plantes à acheter.
 */
//
import styles from '../styles/ShoppingList.module.css';



import CareScale from './CareScale';

import PlantItem from './PlantItem';

import logo from '../assets/fleur-logo.jpg';


//importation de React pour pouvoir utiliser les fonctionnalités de React
// Tableau qui contient les plantes affichées dans la liste.
const plantList = [
    {
        // Informations de la première plante.
        name: 'Montsera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: false ,
        water : 3,
        light : 3,
        cover : logo
    },

    {
        // Informations de la deuxième plante.
        name: 'Lierre',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water : 3,
        light : 1,
        cover : logo
    },

    {
        // Informations de la troisième plante.
        name: 'Bouquet de fleurs',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true,
        water : 2,
        light : 2,
        cover : logo
       
    
    }
];
// Composant qui transforme le tableau de plantes en éléments visuels.
const ShoppingList = () => {
    // Retourne la liste HTML contenant chaque plante.
    return (
       
    
        <ul className={styles.plantList}>
        {/* Parcours du tableau pour créer un PlantItem par plante. */}
        {plantList.map(({id, name, cover, water, light}) => (
              
            <PlantItem
            key={id}
            id={id}
            name={name}
            cover={cover}
            water={water}
            light={light}
            
            />

            
        
        )
    
        )
        }
        </ul>
    
    )

}

// Export du composant pour l'afficher dans App.
export default ShoppingList
