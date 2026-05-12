/*
*Le composant Cart est un composant qui affiche le panier de l'utilisateur, il affiche les produits ajoutés au panier et le total du panier. Il permet également de supprimer un produit du panier et de valider la commande.
*/
import styles from '../styles/Cart.module.css'
//importation de React pour pouvoir utiliser les fonctionnalités de React
// Composant qui affiche le panier avec les prix des plantes.
const Cart = () => {
    // Prix de chaque produit affiché dans le panier.
    const montsera = 8
    const lierre = 4
    const bouquet = 12
    // Affichage du panier et du total.
    return (
        <div className={styles.cart}>
                <h2>Votre panier</h2>
            <ul className={styles.ul}>
                {/* Ligne du Monstera dans le panier. */}
                <li>Montsera: {montsera}€</li>
                {/* Ligne du Lierre dans le panier. */}
                <li>Lierre: {lierre}€</li>
                {/* Ligne du bouquet dans le panier. */}
                <li>Bouquet de fleurs: {bouquet}€</li>
            </ul>
            <p>
                {/* Calcul du total des prix. */}
                Total : {montsera + lierre + bouquet}€
            </p>
        </div>
        
       
    )

}

//exportation du composant Cart 
export default Cart
