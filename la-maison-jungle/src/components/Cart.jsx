/*
*Le composant Cart est un composant qui affiche le panier de l'utilisateur, il affiche les produits ajoutés au panier et le total du panier. Il permet également de supprimer un produit du panier et de valider la commande.
*/

//importation de React pour pouvoir utiliser les fonctionnalités de React
const Cart = () => {
    const montsera = 8
    const lierre = 4
    const bouquet = 12
    return (
        <div>
                <h2>Votre panier</h2>
            <ul>
                <li>Montsera: {montsera}€</li>
                <li>Lierre: {lierre}$</li>
                <li>Bouquet de fleurs: {bouquet}€</li>
            </ul>
            <p>
                Total : {montsera + lierre + bouquet}€
            </p>
        </div>
        
       
    )

}

//exportation du composant Cart 
export default Cart