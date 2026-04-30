/**
 * Ce fichier contient le composant ShoppingList qui affiche une liste de plantes à acheter.
 */
//
import styles from '../styles/ShoppingList.module.css'

//importation de React pour pouvoir utiliser les fonctionnalités de React
const plantList = [
    {
        name: 'Monstera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: false
    },

    {
        name: 'Lierre',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false
    },

    {
        name: 'Bouquet de fleurs',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true
    }
];
const ShoppingList = () => {
    return (
        
        <div className={styles.shoppingList}>
        <ul className={styles.plantList}>
        {
        plantList.map((plant) => (
            <li key={plant.id}className={styles.plantItem}>
                { plant.isBestSale ? <span>👍</span> : <span>👎</span> }
                { plant.isSpecialOffer ? <span>solde</span> : <span>non solde</span> }
                {plant.name}</li>
        
        )
    
        )
        }
        </ul>
    </div>
    )

}

export default ShoppingList