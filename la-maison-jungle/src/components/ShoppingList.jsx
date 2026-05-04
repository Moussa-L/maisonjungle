/**
 * Ce fichier contient le composant ShoppingList qui affiche une liste de plantes à acheter.
 */
//
import styles from '../styles/ShoppingList.module.css'

import CareScale from './CareScale';


//importation de React pour pouvoir utiliser les fonctionnalités de React
const plantList = [
    {
        name: 'Monstera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: false ,
        water : 3,
        light : 6
    },

    {
        name: 'Lierre',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water : 6,
        light : 1
    },

    {
        name: 'Bouquet de fleurs',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true,
        water : 2,
        light : 4
    }
];
const ShoppingList = () => {
    return (
       
    
        <ul className={styles.plantList}>
        {
        plantList.map((plant) => (
            /**
             * 
             *  */          <li key={plant.id}className={styles.plantItem}>
                { plant.isBestSale ? <span>👍</span> : <span>👎</span> } 
                {plant.name}
                { plant.isSpecialOffer ? <span className={styles.lmjSales}>
                solde</span> : <span>non solde</span> }

                <CareScale careType="light" scaleValue={plant.light}></CareScale>
                <CareScale careType="water" scaleValue={plant.water}></CareScale>
               </li>
        
        )
    
        )
        }
        </ul>
    
    )

}

export default ShoppingList